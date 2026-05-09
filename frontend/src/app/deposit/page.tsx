"use client";

import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

import { depositMoney }
from "../../services/transaction.service";

export default function DepositPage() {

  const [amount, setAmount] = useState("");

  const [loading, setLoading] = useState(false);

  const handleDeposit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await depositMoney(Number(amount));

      toast.success(
        response.message
      );

      setAmount("");

    } catch (error: any) {

      toast.error(
        error?.response?.data ||
        "Deposit failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">

      <Toaster />

      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold mb-6 text-center">
          Deposit Money
        </h1>

        <form
          onSubmit={handleDeposit}
          className="space-y-6"
        >

          <div>

            <label className="block mb-2 text-slate-300">
              Amount
            </label>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) =>
                setAmount(e.target.value)
              }
              className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 transition rounded-xl py-3 font-semibold"
          >
            {loading
              ? "Processing..."
              : "Deposit"}
          </button>
        </form>
      </div>
    </div>
  );
}