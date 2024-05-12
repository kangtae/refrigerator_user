import React from "react";

interface Props {
	title: string;
}
export default function PageTitle({ title }: Props) {
  return <>
	  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
		  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{title}</h2>
	  </div>
  </>
}
