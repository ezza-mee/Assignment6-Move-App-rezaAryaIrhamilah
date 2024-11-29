import Search from './Search';

function Header() {
	return (
		<header>
			<nav className="bg-orange-600 w-full h-14 flex">
				<div className="w-5/6 h-14 ml-10 flex justify-start items-center font-bold">
					<h1 className="text-white ml-10">FinProH8</h1>
				</div>
				<div className="w-80 h-1 flex justify-center ml-10">
					<Search />
				</div>
			</nav>
		</header>
	);
}

export default Header;
