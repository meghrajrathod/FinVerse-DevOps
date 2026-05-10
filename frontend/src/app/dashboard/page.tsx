"use client";

import { useEffect, useState }
from "react";

import AuthGuard
from "../../components/auth/AuthGuard";

import Sidebar
from "../../components/ui/Sidebar";

import { getProfile }
from "../../services/user.service";

import {
  getTransactionHistory
} from "../../services/transaction.service";

export default function DashboardPage() {

  const [profile, setProfile] =
    useState<any>(null);

  const [transactions,
    setTransactions] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData =
    async () => {

    try {

      const profileData =
        await getProfile();

      const transactionData =
        await getTransactionHistory();

      setProfile(profileData);

      setTransactions(
        transactionData.slice(0, 5)
      );

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  if (loading) {

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <AuthGuard>

      <div className="min-h-screen bg-slate-950 text-white flex">

        <Sidebar />

        <div className="flex-1 p-8 overflow-y-auto">

          <h1 className="text-4xl font-bold mb-2">
            Welcome,
            {" "}
            {profile?.fullName}
          </h1>

          <p className="text-slate-400 mb-10">
            FinVerse Digital Banking
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-slate-400 text-lg mb-2">
                Current Balance
              </h2>

              <p className="text-4xl font-bold text-green-400">
                ₹{profile?.balance}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-slate-400 text-lg mb-2">
                Account Email
              </h2>

              <p className="text-lg font-semibold break-all">
                {profile?.email}
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

              <h2 className="text-slate-400 text-lg mb-2">
                Status
              </h2>

              <p className="text-2xl font-bold text-blue-400">
                Active
              </p>
            </div>
          </div>

          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-6">
              Quick Actions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <a
                href="/deposit"
                className="bg-blue-600 hover:bg-blue-700 transition rounded-3xl p-6"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Deposit
                </h3>

                <p>
                  Add money to your account
                </p>
              </a>

              <a
                href="/withdraw"
                className="bg-red-600 hover:bg-red-700 transition rounded-3xl p-6"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Withdraw
                </h3>

                <p>
                  Withdraw funds securely
                </p>
              </a>

              <a
                href="/transfer"
                className="bg-green-600 hover:bg-green-700 transition rounded-3xl p-6"
              >
                <h3 className="text-2xl font-bold mb-2">
                  Transfer
                </h3>

                <p>
                  Send money instantly
                </p>
              </a>
            </div>
          </div>

          <div className="mt-12">

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-3xl font-bold">
                Recent Transactions
              </h2>

              <a
                href="/transactions"
                className="text-blue-400 hover:text-blue-300"
              >
                View All
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

              {transactions.length === 0 ? (

                <div className="p-8 text-center text-slate-400">
                  No transactions found
                </div>

              ) : (

                transactions.map(
                  (tx, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between p-6 border-b border-slate-800 last:border-none"
                  >

                    <div>

                      <h3 className="text-lg font-semibold">
                        {tx.transactionType}
                      </h3>

                      <p className="text-slate-400 text-sm">
                        {new Date(
                          tx.createdAt
                        ).toLocaleString()}
                      </p>
                    </div>

                    <div className="text-right">

                      <p className="text-xl font-bold text-green-400">
                        ₹{tx.amount}
                      </p>

                      <p className="text-sm text-slate-400">
                        {tx.status}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

    </AuthGuard>
  );
}