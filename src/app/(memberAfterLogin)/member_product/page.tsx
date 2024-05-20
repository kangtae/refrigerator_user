import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-gray-100">
			<h3>제품 리스트 </h3>
			<div className="bg-white shadow p-4 w-full">
				<div className="flex">
					<input type="text" placeholder="품목명을 검색하세요" className="flex-grow p-2 border border-gray-300 rounded" />
					<button className="ml-2 p-2 border border-gray-300 rounded">Q</button>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4 p-4 w-full">
				{categories.map((category) => (
					<div key={category.name} className="flex flex-col items-center p-2 bg-white rounded shadow">
						<img src={category.image} alt={category.name} className="w-10 h-10 rounded-full mb-2" />
						<span>{category.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

const categories = [
	{ name: '가지', image: '/icons/eggplant.png' },
	{ name: '감자', image: '/icons/potato.png' },
	{ name: '고구마', image: '/icons/sweetpotato.png' },
	{ name: '고추', image: '/icons/chili.png' },
	{ name: '곤드레', image: '/icons/gondre.png' },
	{ name: '구아바', image: '/icons/guava.png' },
	{ name: '나물', image: '/icons/namul.png' },
	{ name: '나팔꽃', image: '/icons/morning_glory.png' },
	{ name: '단호박', image: '/icons/pumpkin.png' },
	{ name: '당근', image: '/icons/carrot.png' },
	{ name: '도라지', image: '/icons/balloonflower.png' },
	{ name: '마', image: '/icons/yam.png' },
];
