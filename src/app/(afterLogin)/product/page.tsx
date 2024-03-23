import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

// helper
import { productListQueryFn } from "./_helper/fetch/reactQueryFn";

// components
import ProductList from "./_components/ProductList";
import Link from "next/link";

export default async function ProductListPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["productList"], queryFn: productListQueryFn });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <h2 className="text-3xl font-bold">제품 리스트</h2>
      <div className="mt-4 text-right">
        <Link
          href="/product/new"
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm"
        >
          등록
        </Link>
      </div>

      <ProductList />
    </HydrationBoundary>
  );
}
