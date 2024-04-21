import fetchGet from "@/lib/fetchGet";

export const productListQueryFn = async (page: number = 0, keyword: string = "") => {
  console.log("keyword", keyword);
  const data = await fetchGet("/products", {
    params: {
      page,
      size: 10,
      keyword,
    },
  });

  return data;
};
