"use client";

import Sidebar from "../../components/ui/Sidebar";

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="flex">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}

        <div className="flex-1 p-8">

          <h2 className="text-4xl font-bold mb-8">
            Dashboard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

              <h3 className="text-slate-400 mb-2">
                Total Balance
              </h3>

              <p className="text-3xl font-bold text-green-400">
                ₹50,000
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

              <h3 className="text-slate-400 mb-2">
                Monthly Income
              </h3>

              <p className="text-3xl font-bold text-blue-400">
                ₹12,000
              </p>
            </div>

            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

              <h3 className="text-slate-400 mb-2">
                Monthly Expense
              </h3>

              <p className="text-3xl font-bold text-red-400">
                ₹8,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}