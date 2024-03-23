import fetchGet from "@/lib/fetchGet";

export const productListQueryFn = async () => {
  const data = await fetchGet("/products", { cache: "no-store" });

  return data;
};
