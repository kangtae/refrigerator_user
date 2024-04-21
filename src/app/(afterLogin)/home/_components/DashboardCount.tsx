interface IDashboardCountProps {
  title: string;
  count: number;
}

export default function DashboardCount({ title = "", count = 0 }: IDashboardCountProps) {
  return (
    <div className="bg-white rounded-lg w-full p-7 space-y-3 shadow">
      <h2 className="font-medium text-gray-500">{title}</h2>
      <p className="mt-1 text-3xl font-semibold text-gray-900">{count}</p>
    </div>
  );
}
