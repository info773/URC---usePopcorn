export function MovieList({ movies, onSelectMovie }) {
  const uniqueMovies = movies
    ? Array.from(new Map(movies.map((m) => [m.imdbID, m])).values())
    : [];
  return (
    <ul className="list list-movies">
      {uniqueMovies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
