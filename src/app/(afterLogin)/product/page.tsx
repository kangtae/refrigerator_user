import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import Link from "next/link";

// helper
import { productListQueryFn } from "./_helper/fetch/reactQueryFn";

// components
import ProductList from "./_components/ProductList";
import SearchForm from "./_components/SearchForm";

export default async function ProductListPage({ searchParams }: { searchParams: { keyword: string } }) {
  const keyword = searchParams?.keyword || "";
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["productList", 0], queryFn: () => productListQueryFn(0, keyword) });
  const dehydratedState = dehydrate(queryClient);

  console.log("keywordkeywordkeyword =>", keyword);

  return (
    <HydrationBoundary state={dehydratedState}>
      <h2 className="text-3xl font-bold">제품 리스트</h2>
      <div className="mt-4 flex justify-end space-x-2">
        <SearchForm />
        <Link
          href="/product/new"
          className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm"
        >
          등록
        </Link>
      </div>

      <ProductList keyword={keyword} />
    </HydrationBoundary>
  );
}
