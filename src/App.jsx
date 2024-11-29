import './App.css';
import Navbar from './components/Navbar/Header';
import MovieCard from './components/movieCard/MovieCard';

function App() {
	return (
		<>
			<main>
				<div className="bg-green-500 w-full h-screen">
					<Navbar />
					<section className="flex justify-center items-center bg-red-400 h-5/6 mt-11">
						<MovieCard />
					</section>
				</div>
			</main>
		</>
	);
}

export default App;
