import fetchGet from "@/lib/fetchGet";

export const productListQueryFn = async (page: number = 0) => {
  const data = await fetchGet("/products", {
    params: {
      page,
      size: 10,
    },
  });

  return data;
};
