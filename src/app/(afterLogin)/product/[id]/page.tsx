import fetchGet from "@/lib/fetchGet";
import ButtonGroup from "./_components/ButtonGroup";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const data = await fetchGet(`/products/${id}`);
  const { categoryName = "", productName = "", productImageUrl = "", createdAt = "" } = data.response || {};

  return (
    <>
      <h2 className="text-3xl font-bold">제품 상세</h2>
      <div className="mt-8">
        {/* <i className={`${productImageUrl}`}></i> */}
        <i className="food-icons8-apple-fruit-100 text-5xl"></i>
        <ul className="space-y-3 mt-4">
          <li>
            <h3 className="text-indigo-600">카테고리명</h3>
            <p>{categoryName}</p>
          </li>
          <li>
            <h3 className="text-indigo-600">제품명</h3>
            <p>{productName}</p>
          </li>
          <li>
            <h3 className="text-indigo-600">등록일</h3>
            <p>{createdAt}</p>
          </li>
        </ul>

        <div className="mt-4 space-x-2">
          <ButtonGroup id={id} />
        </div>
      </div>
    </>
  );
}
