"use client";

export default function DashboardPage() {

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="flex">

        {/* Sidebar */}

        <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">

          <h1 className="text-3xl font-bold text-blue-400 mb-10">
            FinVerse
          </h1>

          <div className="space-y-4">

            <button className="w-full text-left bg-blue-600 px-4 py-3 rounded-xl">
              Dashboard
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl transition">
              Transactions
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl transition">
              Transfer
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl transition">
              Deposit
            </button>

            <button className="w-full text-left hover:bg-slate-800 px-4 py-3 rounded-xl transition">
              Withdraw
            </button>
          </div>
        </div>

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