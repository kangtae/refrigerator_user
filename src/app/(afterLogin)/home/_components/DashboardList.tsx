// types
import { ITop5Product } from "../_types/dashboard";

interface IDashboardListProps {
  title: string;
  data: ITop5Product[];
}

export default function DashboardList({ title = "", data = [] }: IDashboardListProps) {
  return (
    <div className="bg-white rounded-lg w-full h-full p-7 space-y-3 shadow">
      <h2 className="text-xl font-semibold text-gray-90">{title}</h2>
      <ul className="mt-5">
        {data.map((item: any, idx: number) => {
          const { productName = "", count = 0 } = item;
          return (
            <li key={idx} className="flex items-center py-3 border-b border-b-slate-200">
              <div className="w-full text-sm text-gray-900">{productName}</div>
              <div className="w-[100px] text-sm text-gray-900 text-right">{count}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
