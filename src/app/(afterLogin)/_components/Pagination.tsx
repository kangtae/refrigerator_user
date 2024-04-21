import Link from "next/link";

interface IPaginationProps {
  size: number;
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ size = 10, totalCount = 0, currentPage = 0, onPageChange }: IPaginationProps) {
  const pages = Math.ceil(totalCount / size);

  const isFirstPage = currentPage + 1 === 1;
  const isLastPage = currentPage + 1 === pages;

  // console.log("totalCount:", totalCount, "size:", size);
  // console.log("currentPage: ", currentPage, "pages:", pages);

  return (
    <div className="flex items-center justify-center space-x-2 space-y-0">
      <Link
        href="#"
        className={`hover:text-indigo-500 ${isFirstPage && "pointer-events-none text-gray-300"}`}
        title="이전"
        onClick={() => onPageChange(0)}
      >
        &lt;
      </Link>
      {Array(pages)
        .fill("")
        .map((_, idx) => (
          <Link
            href="#"
            key={`${idx}`}
            className={`hover:text-indigo-500 ${currentPage === idx && "text-indigo-500"}`}
            onClick={() => onPageChange(idx)}
          >
            {idx + 1}
          </Link>
        ))}
      <Link
        href="#"
        className={`hover:text-indigo-500 ${isLastPage && "pointer-events-none text-gray-300"}`}
        title="다음"
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </Link>
    </div>
  );
}
