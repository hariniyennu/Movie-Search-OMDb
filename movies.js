async function fetchMovie() {
    const title = document.getElementById('movieTitle').value;
    const apiKey = API_KEY;
    if (!title) {
        alert('Please enter a movie name!');
        return;
    }
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    const data = await response.json();
    
    if (data.Response === "False") {
        document.getElementById('movieInfo').innerHTML = '<p>Movie not found!</p>';
        return;
    }
    document.getElementById('movieInfo').innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <img src="${data.Poster}" alt="Movie Poster">
        <p><strong>Genre:</strong> ${data.Genre}</p>
        <p><strong>Director:</strong> ${data.Director}</p>
        <p><strong>Plot:</strong> ${data.Plot}</p>
        <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
    `;
}
