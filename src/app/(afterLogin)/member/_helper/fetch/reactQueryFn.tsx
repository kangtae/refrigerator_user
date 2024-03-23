import fetchGet from "@/lib/fetchGet";

export const memberListQueryFn = async (page: number) => {
  const data = await fetchGet("/members", {
    params: {
      page,
      size: 10,
    },
  });

  return data;
};
