"use client";

import { useState } from "react";

import { Mail, Lock } from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

import { loginUser } from "../../services/auth.service";

import Cookies from "js-cookie";

export default function LoginPage() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await loginUser({
        email,
        password,
      });

      Cookies.set("token", response.token, {
  expires: 7,
});

      toast.success("Login successful!");
      window.location.href = "/dashboard";

      console.log(response);

    } catch (error: any) {

      toast.error(
        error?.response?.data || "Login failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">

      <Toaster />

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white mb-2">
            FinVerse
          </h1>

          <p className="text-slate-300">
            Secure Digital Banking Platform
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>

            <label className="text-sm text-slate-300 mb-2 block">
              Email Address
            </label>

            <div className="relative">

              <Mail className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div>

            <label className="text-sm text-slate-300 mb-2 block">
              Password
            </label>

            <div className="relative">

              <Lock className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}