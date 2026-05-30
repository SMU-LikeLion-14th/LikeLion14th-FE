const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWNhNzYyNzA0MzA2Y2ZmN2NlMjlkNTJmZTI2YjJjNiIsIm5iZiI6MTc3Nzk3MTExMi4zNzMsInN1YiI6IjY5ZjlhZmE4ZDNmNDNlMDExZTc5NWUxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y6xTYQ1mUmdsPWMxFGwOwL0PZDbUH2zNwWL5ITdh5Xk",
    },
};

fetch(
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    options,
)
    .then((res) => res.json())
    .then((data) => {
        const movies = data.results;
        const article = document.querySelector("article");

        article.innerHTML = "";

        movies.forEach((movie) => {
            const card = document.createElement("div");
            card.classList.add("movie-card");

            const img = document.createElement("img");
            img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            img.alt = movie.title;

            const overlay = document.createElement("div");
            overlay.className = "overlay";

            const title = document.createElement("h3");
            title.textContent = movie.title;

            const rating = document.createElement("p");
            rating.textContent = `평점: ${movie.vote_average.toFixed(1)}`;

            const releaseDate = document.createElement("p");
            releaseDate.textContent = `개봉일: ${movie.release_date}`;

            overlay.appendChild(title);
            overlay.appendChild(rating);
            overlay.appendChild(releaseDate);

            card.appendChild(img);
            card.appendChild(overlay);
            article.appendChild(card);
        });
    })
    .catch((err) => console.error(err));
