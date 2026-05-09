"use client";

import { useState } from "react";

import { Mail, Lock, User } from "lucide-react";

import toast, { Toaster } from "react-hot-toast";

import { registerUser } from "../../services/auth.service";

import AuthCard from "../../components/ui/AuthCard";

export default function RegisterPage() {

  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    if (password !== confirmPassword) {

      toast.error("Passwords do not match");

      return;
    }

    try {

      setLoading(true);

      const response = await registerUser({
        fullName,
        email,
        password,
      });

      toast.success(response);

      console.log(response);

    } catch (error: any) {

console.log(error);

toast.error(
  JSON.stringify(error?.response?.data) ||
  "Registration failed"
);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">

      <Toaster />

      <AuthCard
        title="Create Account"
        subtitle="Join FinVerse Digital Banking"
      >

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>

            <label className="text-sm text-slate-300 mb-2 block">
              Full Name
            </label>

            <div className="relative">

              <User className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />

              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) =>
                  setFullName(e.target.value)
                }
                className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

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
                placeholder="Create password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full bg-slate-900/60 border border-slate-700 text-white rounded-xl py-3 pl-11 pr-4 outline-none focus:border-blue-500 transition"
              />
            </div>
          </div>

          <div>

            <label className="text-sm text-slate-300 mb-2 block">
              Confirm Password
            </label>

            <div className="relative">

              <Lock className="absolute left-3 top-3.5 text-slate-400 w-5 h-5" />

              <input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
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
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

      </AuthCard>
    </div>
  );
}