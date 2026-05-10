"use client";

import { useEffect, useState }
from "react";

import { useRouter }
from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {

  const router = useRouter();

  const [authorized,
    setAuthorized] = useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {

      router.push("/login");

    } else {

      setAuthorized(true);
    }

  }, []);

  if (!authorized) {

    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Checking authentication...
      </div>
    );
  }

  return <>{children}</>;
}