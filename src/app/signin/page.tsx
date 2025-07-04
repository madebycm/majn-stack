// @author madebycm (2025)
// Custom sign-in page with simplified button text
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      username,
      password,
      callbackUrl,
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-50 to-slate-100 text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Sign In
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:border-gray-400 focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-black focus:border-gray-400 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-gray-800"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}