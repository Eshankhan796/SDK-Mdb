const b4 = document.getElementById('b4');
const b5 = document.getElementById('quality');
const b6 = document.getElementById('genre');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const apiUrl = 'https://yts.mx/api/v2/list_movies.json?'


window.onload = () => {
  SessionInputTransfer();
  axiosFetch(b4.value);
};

function SessionInputTransfer() {
  const SessionValue = JSON.parse(sessionStorage.getItem('searched'));
  const decrypted = atob(SessionValue);
  b4.value = decrypted;
}

function MovieSearch(event) {
  event.preventDefault();
  axiosFetch(b4.value);
}

function axiosFetch(inputValue) {
  const query = encodeURI(inputValue);
  const APIPR = apiUrl + `query_term=${query}&quality=${b5.value}&genre=${b6.value}&limit=30&sort_by=title&page=1`;
  b8.textContent = `Results For: ${inputValue}`;

  axios.get(APIPR)
    .then(response => {
      MovieDisplay(response.data.data)
      b9.textContent = `Total: ${response.data.data.movie_count}`;
    })
    .catch(error => {
      if (error.message === "Cannot read properties of undefined (reading 'forEach')") {
        b8.textContent = `Sorry, There is no results for: '${inputValue}'`;
        b9.textContent = '';
      };
      console.log(error);
    });
}

function MovieDisplay(data) {
  const MovieArray = data.movies;
  b7.innerHTML = '';
  MovieArray.forEach(movie => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');
    const h4_1 = document.createElement('h4');
    const h5_1 = document.createElement('h5');

    img.classList.add('c1');
    div1.classList.add('c2');
    div2.classList.add('c4');
    div3.classList.add('c6');
    span.classList.add('c3');
    h4_1.classList.add('c5');
    h5_1.classList.add('c7');

    img.src = movie.large_cover_image;
    span.textContent = movie.rating;
    h4_1.textContent = movie.title;
    h5_1.textContent = movie.year;

    div1.append(img, span);
    div2.append(div1, div3);
    div3.append(h4_1, h5_1)
    b7.append(div2);
  });
  console.log(data);
};