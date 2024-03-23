import Link from "next/link";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 space-y-0">
      <Link href="#" className="hover:text-indigo-500">
        이전
      </Link>
      {Array(5)
        .fill("")
        .map((_, idx) => (
          <Link href="#" key={`${idx}`} className="hover:text-indigo-500">
            1
          </Link>
        ))}
      <Link href="#" className="hover:text-indigo-500">
        다음
      </Link>
    </div>
  );
}
