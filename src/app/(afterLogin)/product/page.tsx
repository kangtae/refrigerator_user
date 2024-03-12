import Link from "next/link";
import { IProductList } from "./_types/product";

export default async function ProductListPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  console.log("res====>", res);

  const data = [
    {
      id: 1,
      categoryName: "채소",
      productName: "양배추",
      productImageUrl: "food-icons8-apple-fruit-100",
      createdAt: null,
    },
    { id: 2, categoryName: "육류", productName: "고기", productImageUrl: "food-icons8-apple-jam-100", createdAt: null },
  ];

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
        {data.map((item: IProductList, idx: number) => (
          <li key={item.id} className="flex items-center py-3 border-b border-b-slate-200 hover:bg-slate-100">
            <div className="w-[100px] text-sm text-gray-500 text-center">{idx + 1}</div>
            <div className="w-full text-sm">
              <Link href={""} className="flex items-center">
                <div className="h-11 w-11 text-3xl flex justify-center items-center">
                  <i className={`${item.productImageUrl}`}></i>
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-500">{item.categoryName}</div>
                  <div className="mt-1 text-gray-900">{item.productName}</div>
                </div>
              </Link>
            </div>
            <div className="w-[100px] text-center text-sm text-gray-500">
              {item.createdAt === null ? "-" : item.createdAt}
            </div>
            <div className="w-[250px] text-center text-sm font-medium">
              <Link href="#" className="text-indigo-600 hover:text-indigo-900 mr-2">
                수정
              </Link>
              <Link href="#" className="text-indigo-600 hover:text-indigo-900">
                삭제
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
