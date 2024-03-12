import Navigation from "./_components/navigation";

export default function afterLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/5 p-4 h-screen bg-slate-200">
        <h1 className="text-3xl font-bold">admin</h1>
        <Navigation />
      </div>
      <div className="w-4/5 p-10">{children}</div>
    </div>
  );
}
