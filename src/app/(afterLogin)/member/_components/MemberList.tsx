"use client";

import { useQuery } from "@tanstack/react-query";

// helper
import { memberListQueryFn } from "../_helper/fetch/reactQueryFn";

// components
import Pagination from "../../_components/Pagination";

// types
import { IMemberList } from "../_types/member";

export default function MemberList() {
  const { data } = useQuery({ queryKey: ["memberList"], queryFn: memberListQueryFn });

  return (
    <>
      <div className="flex items-center py-3 bg-slate-200 mt-4">
        <div className="w-[100px] text-center text-sm font-semibold text-gray-900">번호</div>
        <div className="w-[180px] text-center text-sm font-semibold text-gray-900">회원 ID</div>
        <div className="w-[180px] text-center text-sm font-semibold text-gray-900">회원명</div>
        <div className="w-full text-center text-sm font-semibold text-gray-900">이메일</div>
        <div className="w-[200px] text-center text-sm font-semibold text-gray-900">가입일자</div>
      </div>
      <ul className="mb-5">
        {data.response.map((item: IMemberList, idx: number) => {
          const { id = "", userName = "", userId = "", email = "", createTime = "" } = item;
          return (
            <li key={id} className="flex items-center py-3 border-b border-b-slate-200 hover:bg-slate-100">
              <div className="w-[100px] text-sm text-gray-500 text-center">{idx + 1}</div>
              <div className="w-[180px] text-sm text-gray-500 text-center">{userId}</div>
              <div className="w-[180px] text-sm text-gray-500 text-center">{userName}</div>
              <div className="w-full text-sm text-gray-500 text-center">{email}</div>
              <div className="w-[200px] text-center text-sm text-gray-500">
                {createTime === null ? "-" : createTime}
              </div>
            </li>
          );
        })}
      </ul>

      <Pagination />
    </>
  );
}
