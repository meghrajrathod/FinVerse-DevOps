"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  ArrowDownCircle,
  ArrowUpCircle,
  Send,
  History,
  LogOut,
} from "lucide-react";

export default function Sidebar() {

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 p-6 flex flex-col">

      <div className="mb-10">

        <h1 className="text-3xl font-bold text-white">
          FinVerse
        </h1>

        <p className="text-slate-400 mt-2">
          Digital Banking
        </p>
      </div>

      <nav className="flex flex-col gap-3 flex-1">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 transition text-white"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/deposit"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-800 transition text-white"
        >
          <ArrowDownCircle size={20} />
          Deposit
        </Link>

        <Link
          href="/withdraw"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-800 transition text-white"
        >
          <ArrowUpCircle size={20} />
          Withdraw
        </Link>

        <Link
          href="/transfer"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-800 transition text-white"
        >
          <Send size={20} />
          Transfer
        </Link>

        <Link
          href="/transactions"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-slate-800 transition text-white"
        >
          <History size={20} />
          Transactions
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-red-600 hover:bg-red-700 transition text-white mt-6"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
}