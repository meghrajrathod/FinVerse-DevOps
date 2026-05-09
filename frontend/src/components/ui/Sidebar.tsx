"use client";

import Link from "next/link";

import Cookies from "js-cookie";

import {
  LayoutDashboard,
  ArrowDownCircle,
  ArrowUpCircle,
  Send,
  Receipt,
  LogOut
} from "lucide-react";

export default function Sidebar() {

  const logout = () => {

    Cookies.remove("token");

    window.location.href = "/login";
  };

  return (
    <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        FinVerse
      </h1>

      <div className="space-y-3">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 hover:bg-slate-800 transition px-4 py-3 rounded-xl"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/deposit"
          className="flex items-center gap-3 hover:bg-slate-800 transition px-4 py-3 rounded-xl"
        >
          <ArrowDownCircle size={20} />
          Deposit
        </Link>

        <Link
          href="/withdraw"
          className="flex items-center gap-3 hover:bg-slate-800 transition px-4 py-3 rounded-xl"
        >
          <ArrowUpCircle size={20} />
          Withdraw
        </Link>

        <Link
          href="/transfer"
          className="flex items-center gap-3 hover:bg-slate-800 transition px-4 py-3 rounded-xl"
        >
          <Send size={20} />
          Transfer
        </Link>

        <Link
          href="/transactions"
          className="flex items-center gap-3 hover:bg-slate-800 transition px-4 py-3 rounded-xl"
        >
          <Receipt size={20} />
          Transactions
        </Link>

        <button
          onClick={logout}
          className="w-full flex items-center gap-3 hover:bg-red-600 transition px-4 py-3 rounded-xl text-left"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}