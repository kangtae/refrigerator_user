interface IBaseOptions {
  body?: any;
  headers?: any;
  cache?: RequestCache;
  credentials?: RequestCredentials | undefined;
  method?: string;
}

export default async function fetchGet(url: string, options?: any) {
  const base_options: IBaseOptions = {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    method: "GET",
  };

  if (options?.params) {
    const to_array_params: any = Object.entries(options?.params);
    url += "?" + decodeURIComponent(new URLSearchParams(to_array_params).toString());
  }
  if (options?.cache) {
    base_options.cache = options.cache;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, base_options);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
