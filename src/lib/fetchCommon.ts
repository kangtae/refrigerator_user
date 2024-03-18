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

	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, base_options);
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}