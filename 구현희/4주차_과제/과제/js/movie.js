const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjhlNjkyODlmZmJhZWQwM2QwYmE2NGQxODRhYWE5OSIsIm5iZiI6MTc3NzkwMDIxOS44NjYsInN1YiI6IjY5Zjg5YWJiNGM2NzBiODFkZmEwYWVmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KeUbnP2T47qA0sv_LxcTb-t9CTh4OrpmyTITv6xnbNM",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options,
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const movies = data.results;
    const movieList = document.getElementById("movie-list");

    movies.forEach((movie) => {
      const card = document.createElement("div");
      card.classList.add("movie-card");

      const imgWrapper = document.createElement("div");
      imgWrapper.classList.add("img-wrapper");

      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.classList.add("poster");

      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      overlay.innerHTML = `
    <h3>${movie.title}</h3>
    <p>${movie.overview}</p>
  `;

      imgWrapper.appendChild(img);
      imgWrapper.appendChild(overlay);
      card.appendChild(imgWrapper);
      movieList.appendChild(card);
    });
  })
  .catch((err) => console.error(err));
