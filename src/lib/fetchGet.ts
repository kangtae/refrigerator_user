export default async function fetchGet(url: string, options?: any) {
  const base_options = {
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
  };

  if (options.params) {
    const to_array_params: any = Object.entries(options?.params);
    url += "?" + decodeURIComponent(new URLSearchParams(to_array_params).toString());
  }

  const res = await fetch(url, base_options);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
