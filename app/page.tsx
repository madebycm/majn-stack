// @author madebycm (2025)
// Main landing page with authentication and tRPC integration
import Link from "next/link";
import { TextEffect } from "@/components/motion-primitives/text-effect";

import { UsersTable } from "@/app/_components/users-table";
import { auth } from "@/backend/auth";
import { api, HydrateClient } from "@/trpc/server";
import { SignOutDialog } from "@/components/layout/sign-out-dialog";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.user.getAll.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <TextEffect per="char" preset="fade">
              majn-stack
            </TextEffect>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            <div className="flex flex-col gap-3 rounded-xl border bg-card p-6">
              <h3 className="text-xl font-semibold">Next.js 15</h3>
              <p className="text-muted-foreground">
                Server components, app router, and blazing fast performance
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border bg-card p-6">
              <h3 className="text-xl font-semibold">NextAuth</h3>
              <p className="text-muted-foreground">
                Secure authentication with multiple providers and sessions
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border bg-card p-6">
              <h3 className="text-xl font-semibold">Prisma</h3>
              <p className="text-muted-foreground">
                Type-safe database access with migrations and studio
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border bg-card p-6">
              <h3 className="text-xl font-semibold">tRPC</h3>
              <p className="text-muted-foreground">
                End-to-end typesafe APIs without code generation
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-muted-foreground">
                {session && <span>Logged in as {session.user?.username} ({session.user?.role})</span>}
              </p>
              {session ? (
                <SignOutDialog>
                  <button className="rounded-full bg-primary px-10 py-3 font-semibold text-primary-foreground no-underline transition hover:bg-primary/90">
                    Sign out
                  </button>
                </SignOutDialog>
              ) : (
                <Link
                  href="/api/auth/signin"
                  className="rounded-full bg-primary px-10 py-3 font-semibold text-primary-foreground no-underline transition hover:bg-primary/90"
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>

          {session?.user && (
            <div className="w-full max-w-4xl">
              <h2 className="text-2xl font-bold mb-4 text-center">Registered Users</h2>
              <UsersTable />
            </div>
          )}
        </div>
      </main>
    </HydrateClient>
  );
}
