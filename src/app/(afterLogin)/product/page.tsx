import Link from "next/link";
import fetchGet from "@/lib/fetchGet";
import { IProductList } from "./_types/product";

export default async function ProductListPage() {
  const data = await fetchGet("/products");

  return (
    <>
      <h2 className="text-3xl font-bold">제품 리스트</h2>
      <ul className="mt-8">
        <li className="flex items-center py-3 bg-slate-200">
          <div className="w-[100px] text-center text-sm font-semibold text-gray-900">번호</div>
          <div className="w-full text-center text-sm font-semibold text-gray-900">제품</div>
          <div className="w-[100px] text-center text-sm font-semibold text-gray-900">등록일</div>
          <div className="w-[250px] text-center text-sm font-semibold text-gray-900">수정/삭제</div>
        </li>
        {data.response.map((item: IProductList, idx: number) => {
          const { id = "", categoryName = "", productName = "", productImageUrl = "", createdAt = "" } = item;
          return (
            <li key={id} className="flex items-center py-3 border-b border-b-slate-200 hover:bg-slate-100">
              <div className="w-[100px] text-sm text-gray-500 text-center">{idx + 1}</div>
              <div className="w-full text-sm">
                <Link href={`/product/${id}`} className="flex items-center">
                  <div className="h-11 w-11 text-3xl flex justify-center items-center">
                    <i className={`${productImageUrl}`}></i>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-500">{categoryName}</div>
                    <div className="mt-1 text-gray-900">{productName}</div>
                  </div>
                </Link>
              </div>
              <div className="w-[100px] text-center text-sm text-gray-500">{createdAt === null ? "-" : createdAt}</div>
              <div className="w-[250px] text-center text-sm font-medium">
                <Link href="#" className="text-indigo-600 hover:text-indigo-900 mr-2">
                  수정
                </Link>
                <Link href="#" className="text-indigo-600 hover:text-indigo-900">
                  삭제
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
