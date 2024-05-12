import Link from "next/link";
import Navigation from "./_components/navigation";
import LogoutButton from "@/app/(afterLogin)/_components/LogoutButton";

export default function afterLoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/5 p-4 h-screen bg-slate-200">
	      <div className="flex flex-col justify-between	h-full">
		      <div>
			      <h1 className="text-3xl font-bold">
				      <Link href="/home">admin</Link>
			      </h1>
			      <Navigation />
		      </div>

		      <LogoutButton />
	      </div>
      </div>
      <div className="w-4/5 p-10 bg-gray-100">{children}</div>

    </div>
  );
}
