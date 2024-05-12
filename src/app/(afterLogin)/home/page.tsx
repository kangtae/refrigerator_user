import fetchGet from "@/lib/fetchGet";

// components
import DashboardCount from "./_components/DashboardCount";
import DashboardList from "./_components/DashboardList";

export default async function HomePage() {
  const data = await fetchGet("/dash-board");
  const {
    total_member_count = 0,
    top5_product = [],
    today_join_member_count = 0,
    total_product_count = 0,
  } = data?.response || {};
  // console.log("data =>", top5_product);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <DashboardCount title="오늘 가입한 회원수" count={total_member_count} />
        <DashboardCount title="총 회원수" count={today_join_member_count} />
        <DashboardCount title="총 상품수" count={total_product_count} />
      </div>
      <div className="grid grid-cols-2 gap-4 h-[300px]">
        <DashboardList title="Top5 상품" data={top5_product} />
      </div>
    </div>
  );
}
