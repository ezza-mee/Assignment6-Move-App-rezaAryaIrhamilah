import './index.css';
import Header from './components/Navbar/Header';
import Movie from './components/MovieCard/Movie';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from './store/reducers/movieSlice';

const API_KEY = '7f57757b';

const App = () => {
	const [searchMovie, setSearchMovie] = useState('batman');
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movie);

	const fetchMovies = async (keyword) => {
		try {
			const apiURL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`;
			const response = await fetch(apiURL);
			const respJSON = await response.json();

			if (!response.ok || respJSON.Response === 'False') {
				throw new Error(respJSON.Error);
			}

			dispatch(setMovies(respJSON.Search || []));
		} catch (err) {
			console.error('[fetchMovies]:', err);
		}
	};

	// Fetch setiap kali `searchMovie` berubah
	useEffect(() => {
		fetchMovies(searchMovie);
	}, [searchMovie, dispatch]);

	return (
		<div>
			<Header setSearchMovie={setSearchMovie} />
			<div className="">
				<Movie movies={movies} />
			</div>
		</div>
	);
};

export default App;
