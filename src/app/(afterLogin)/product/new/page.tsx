import RegistrationForm from "@/app/(afterLogin)/product/_components/RegistrationForm";
import fetchGet from "@/lib/fetchGet";

export default async function ProductRegistration() {
	const {response: categoryOptions = []} = await fetchGet(`/categories`);
	if(categoryOptions.length === 0) return null;
	return (
		<>
			<h2 className="text-3xl font-bold">제품 등록</h2>
			<div className="mt-10">
				<RegistrationForm
					categoryOptions={categoryOptions}
				/>
			</div>
		</>
	);
}
