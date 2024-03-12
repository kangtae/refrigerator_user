"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const navigation = [{ name: "제품 리스트", url: "/product" }];
  const pathname = usePathname();

  // console.log("pathname", pathname, pathname.match(item.name));

  return (
    <ul className="mt-8">
      {navigation.map((item: { name: string; url: string }, idx: number) => (
        <li key={idx}>
          <Link
            href={item.url}
            className={`cursor-pointer block py-2 px-3 rounded-md hover:text-indigo-600 hover:font-bold ${
              pathname.match(item.url) && "text-indigo-600 font-bold"
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
