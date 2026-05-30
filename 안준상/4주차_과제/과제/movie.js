const url = "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGEzNzU5NzQ3YmQxZjUwM2QzZjBhMTA4Mjc2NjViMCIsIm5iZiI6MTc3Nzg4MTY1My4yNzgsInN1YiI6IjY5Zjg1MjM1NmU0NDhkOWI4MTMzN2Y5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._IQTtBxHVvP21XzE9nNE4E-_Cj5iV66kh3oyUn5dPx4",
  },
};

fetch(url, options)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.results;
    const container = document.getElementById("movie-board");

    movies.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card");
      const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

      movieCard.innerHTML = `
        <img src="${imageUrl}" alt="${movie.title} 포스터" class="movie-poster">
        <div class="movie-hover-info">
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-vote-average">평점: ${movie.vote_average}</p>
        </div>
        `;
      container.appendChild(movieCard);
    });
  })
  .catch((err) => console.error("통신 실패. err:", err));
