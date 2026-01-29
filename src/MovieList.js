export function MovieList({ movies }) {
  const uniqueMovies = movies
    ? Array.from(new Map(movies.map((m) => [m.imdbID, m])).values())
    : [];
  return (
    <ul className="list">
      {uniqueMovies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
function Movie({ movie }) {
  return (
    <li>
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
