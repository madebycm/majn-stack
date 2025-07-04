// @author madebycm (2025)
// Main landing page with authentication and tRPC integration
import Link from "next/link";
import { TextEffect } from "@/components/motion-primitives/text-effect";

import { LatestPost } from "@/app/_components/post";
import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100 text-black">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <TextEffect per="char" preset="fade">
              majn-stack
            </TextEffect>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Next.js 15</h3>
              <p className="text-gray-600">
                Server components, app router, and blazing fast performance
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">NextAuth</h3>
              <p className="text-gray-600">
                Secure authentication with multiple providers and sessions
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Prisma</h3>
              <p className="text-gray-600">
                Type-safe database access with migrations and studio
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">tRPC</h3>
              <p className="text-gray-600">
                End-to-end typesafe APIs without code generation
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-gray-700">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl text-gray-700">
                {session && <span>Logged in as {session.user?.name}</span>}
              </p>
              <Link
                href={session ? "/api/auth/signout" : "/api/auth/signin"}
                className="rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-gray-800"
              >
                {session ? "Sign out" : "Sign in"}
              </Link>
            </div>
          </div>

          {session?.user && <LatestPost />}
        </div>
      </main>
    </HydrateClient>
  );
}
