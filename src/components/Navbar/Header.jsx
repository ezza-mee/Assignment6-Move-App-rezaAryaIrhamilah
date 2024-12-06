import PropTypes from 'prop-types';
import '../../index.css';
import Search from './Search';

const Header = ({ setSearchMovie }) => {
	return (
		<header className="bg-orange-500 h-16 shadow-md text-white flex">
			<div className="w-5/6 flex justify-start items-center">
				<h1 className="text-3xl font-bold ml-8">Movie App</h1>
			</div>
			<div className="w-2/6 flex justify-center items-center">
				<Search setSearchMovie={setSearchMovie} />
			</div>
		</header>
	);
};

// Validasi props dengan propTypes
Header.propTypes = {
	setSearchMovie: PropTypes.func.isRequired,
};

export default Header;
