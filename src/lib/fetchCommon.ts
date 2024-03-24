export default async function fetchCommon({url = "", method = "POST", data = {},
} : {url: string, method: string, data}) {
	const base_options = {
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include",
		method,
		body : JSON.stringify(data)
	};
	try{
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, base_options);
		return res.json();

	}catch (error){
		console.log("error")
	}
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.


}