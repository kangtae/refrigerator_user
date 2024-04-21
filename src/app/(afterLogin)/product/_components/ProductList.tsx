"use client";

import Link from "next/link";
import { MouseEvent, useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

// helper
import { productListQueryFn } from "../_helper/fetch/reactQueryFn";

// components
import Pagination from "../../_components/Pagination";

// types
import { IProductList } from "../_types/product";

interface IProductListProps {
  keyword: string;
}

export default function ProductList({ keyword = "" }: IProductListProps) {
  const [page, setPage] = useState(0);
  const { data, refetch } = useQuery({
    queryKey: ["productList", page],
    queryFn: () => productListQueryFn(page, keyword),
    placeholderData: keepPreviousData,
  });

  const onPageChange = (currenPage: number) => {
    setPage(currenPage);
  };

  const onClickDelete = (id: string | number) => async (event: MouseEvent<HTMLAnchorElement>) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("삭제 되었습니다.");
      refetch();
    }
  };

  return (
    <>
      <div className="flex items-center py-3 bg-slate-200 mt-4">
        <div className="w-[100px] text-center text-sm font-semibold text-gray-900">번호</div>
        <div className="w-full text-center text-sm font-semibold text-gray-900">제품</div>
        <div className="w-[100px] text-center text-sm font-semibold text-gray-900">등록일</div>
        <div className="w-[250px] text-center text-sm font-semibold text-gray-900">수정/삭제</div>
      </div>
      <ul className="mb-5">
        {data?.response?.map((item: IProductList, idx: number) => {
          const { id = "", categoryName = "", productName = "", productImageClass = "", createdAt = "" } = item;
          return (
            <li key={id} className="flex items-center py-3 bg-white border-b border-b-slate-200 hover:bg-slate-100">
              <div className="w-[100px] text-sm text-gray-500 text-center">{idx + 1}</div>
              <div className="w-full text-sm">
                <Link href={`/product/${id}`} className="flex items-center">
                  <div className="h-11 w-11 text-3xl flex justify-center items-center">
                    <i className={`${productImageClass}`}></i>
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-500">{categoryName}</div>
                    <div className="mt-1 text-gray-900">{productName}</div>
                  </div>
                </Link>
              </div>
              <div className="w-[100px] text-center text-sm text-gray-500">{createdAt === null ? "-" : createdAt}</div>
              <div className="w-[250px] text-center text-sm font-medium">
                <Link href={`/product/edit/${id}`} className="text-indigo-600 hover:text-indigo-900 mr-2">
                  수정
                </Link>
                <Link href="#" className="text-indigo-600 hover:text-indigo-900" onClick={onClickDelete(id)}>
                  삭제
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Pagination size={10} totalCount={data?.totalCount} currentPage={page} onPageChange={onPageChange} />
    </>
  );
}
