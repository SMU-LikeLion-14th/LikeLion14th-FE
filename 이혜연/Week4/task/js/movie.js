const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDM2ODVhZWE1OGY0ODI4ZmQwOGFkOTBhOTQ1Y2ViZiIsIm5iZiI6MTc1MTA5MTE4Ny40OCwic3ViIjoiNjg1Zjg3ZjMxYTk2YzEwMjczN2I0NDY5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4q_g-OX1tngpZ-knzLi1WO81UoZKUEGQka0SIOzPnT0",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
  options,
)
  .then((res) => res.json())
  .then((res) => {
    const movies = res.results;
    const movieList = document.querySelector(".popular-list");

    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster">
        <div class="movie-overlay">
        <p class="movie-title">${movie.title}</p>
        <p>개봉일 ${movie.release_date}</p>
        <p>평점 ${movie.vote_average}</p>
        </div>`;

      movieList.appendChild(card);
    });
  })
  .catch((err) => console.error(err));
