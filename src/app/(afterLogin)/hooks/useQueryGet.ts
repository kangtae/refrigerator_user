
import fetchGet from "@/lib/fetchGet";
import {useQuery} from "@tanstack/react-query";

const GetData = async ({url, options}) => {
	const data = await fetchGet(url, options);
	return data;
};

const useQueryGet = ({key, url, options}: { key: string, url: string, options?: any }) => useQuery({queryKey: key, queryFn:GetData({
	url,
	options
})});

export default useQueryGet;