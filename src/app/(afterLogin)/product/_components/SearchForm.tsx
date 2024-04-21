"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SearchForm() {
  const router = useRouter();

  const onSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log("event.currentTarget", event.currentTarget);
    router.push(`/product?keyword=${event.currentTarget.search.value}`);
  };

  return (
    <form onSubmit={onSubmitSearch} className="flex">
      <input name="search" type="search" className="border border-gray-500 rounded-l-md outline-none px-2" />
      <button
        type="submit"
        className="rounded-r-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm"
      >
        검색
      </button>
    </form>
  );
}
