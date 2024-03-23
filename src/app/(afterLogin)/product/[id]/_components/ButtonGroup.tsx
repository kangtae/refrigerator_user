"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

interface IButtonGroupProps {
  id: string;
}

export default function ButtonGroup({ id = "" }: IButtonGroupProps) {
  const router = useRouter();
  const onClickDelete = (id: string) => async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      alert("삭제 되었습니다.");
      router.push("/product");
    }
  };

  return (
    <>
      <Link
        href={`/product/edit/${id}`}
        className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        수정
      </Link>
      <Link
        href={"/product/"}
        className="rounded bg-indigo-50 px-2 py-1 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
      >
        목록
      </Link>
      <button
        type="button"
        className="rounded bg-gray-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClickDelete(id)}
      >
        삭제
      </button>
    </>
  );
}
