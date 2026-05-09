interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">

      <div className="text-center mb-8">

        <h1 className="text-4xl font-bold text-white mb-2">
          {title}
        </h1>

        <p className="text-slate-300">
          {subtitle}
        </p>
      </div>

      {children}
    </div>
  );
}