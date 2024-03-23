import RegistrationForm from "@/app/(afterLogin)/product/_components/RegistrationForm";
import fetchGet from "@/lib/fetchGet";

export default async function ProductEdit({params} : {params : {id: string }}) {
	const id = params.id;
	console.log("id",id);
	const {response: categoryOptions = []} = await fetchGet(`/categories`);

	const {response : inItData = {}} = await fetchGet(`/products/${id}`);

	if(categoryOptions.length === 0) return null;
	return (
		<>
			<h2 className="text-3xl font-bold">제품 수정</h2>
			<div className="mt-10">
				<RegistrationForm
					categoryOptions={categoryOptions}
					inItData={inItData}
					paramsId={id}
				/>
			</div>
		</>
	);
}