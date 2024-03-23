import fetchGet from "@/lib/fetchGet";

export const memberListQueryFn = async () => {
  const data = await fetchGet("/members");

  return data;
};
