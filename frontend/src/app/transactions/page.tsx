"use client";

import { useEffect, useState } from "react";

import Sidebar from "../../components/ui/Sidebar";

import {
  getTransactionHistory
} from "../../services/transaction.service";

export default function TransactionsPage() {

  const [transactions, setTransactions] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetchTransactions();

  }, []);

  const fetchTransactions = async () => {

    try {

      const data =
        await getTransactionHistory();

      setTransactions(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Transaction History
        </h1>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left p-4">
                  Type
                </th>

                <th className="text-left p-4">
                  Amount
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>

              {loading ? (

                <tr>
                  <td
                    colSpan={4}
                    className="p-6 text-center"
                  >
                    Loading...
                  </td>
                </tr>

              ) : transactions.length === 0 ? (

                <tr>
                  <td
                    colSpan={4}
                    className="p-6 text-center"
                  >
                    No transactions found
                  </td>
                </tr>

              ) : (

                transactions.map((tx, index) => (

                  <tr
                    key={index}
                    className="border-t border-slate-800"
                  >

                    <td className="p-4">
                      {tx.transactionType}
                    </td>

                    <td className="p-4 text-green-400 font-semibold">
                      ₹{tx.amount}
                    </td>

                    <td className="p-4">
                      {tx.status}
                    </td>

                    <td className="p-4">
                      {new Date(
                        tx.createdAt
                      ).toLocaleString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}