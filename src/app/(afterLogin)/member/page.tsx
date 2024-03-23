import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

// helper
import { memberListQueryFn } from "./_helper/fetch/reactQueryFn";

// components
import MemberList from "./_components/MemberList";

export default async function ProductListPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["memberList", 0], queryFn: () => memberListQueryFn(0) });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <h2 className="text-3xl font-bold">멤버 리스트</h2>
      <MemberList />
    </HydrationBoundary>
  );
}
