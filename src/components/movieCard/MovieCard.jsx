import '../../index.css';

function Movie() {
	return (
		<div className="flex  justify-center items-center w-5/6 h-5/6 bg-slate-500">
			<div className="bg-gray-600 w-52 h-52 m-10">
				<div className="bg-green-300 w-52 h-5/6"></div>
				<div className="bg-red-500 w-52 h-10"></div>
			</div>
		</div>
	);
}

export default Movie;
