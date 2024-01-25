const b4 = document.getElementById('b4');
const b5 = document.getElementById('quality');
const b6 = document.getElementById('genre');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');
const apiUrl = 'https://yts.mx/api/v2/list_movies.json?';
let currentPage = 1;

window.onload = () => {
  SessionInputTransfer();
  axiosFetch(b4.value, currentPage);
  calcScrollValue;
};

function SessionInputTransfer() {
  const SessionValue = JSON.parse(localStorage.getItem('searched'));
  const decrypted = atob(SessionValue);
  b4.value = decrypted;
}

function MovieSearch(event) {
  event.preventDefault();
  currentPage = 1;
  axiosFetch(b4.value, currentPage);
}

function axiosFetch(inputValue, page) {
  const query = encodeURI(inputValue);
  const APIPR = apiUrl + `query_term=${query}&quality=${b5.value}&genre=${b6.value}&limit=30&page=${page}`;

  if (inputValue === '' && b6.value !== 'all') {
    b8.textContent = `Results For: ${b6.value}`;
    b11.innerText = `Searched: ${b6.value}`;
  } else {
    b8.textContent = `Results For: ${inputValue}`;
    b11.innerText = `Searched: ${inputValue}`;
  }

  axios.get(APIPR)
    .then(response => {
      MovieDisplay(response.data.data);
      b9.textContent = `Total: ${response.data.data.movie_count}`;
      if (response.data.data.movie_count > 30) {
        pageBtn(response.data.data);
      } else {
        b10.innerHTML = '';
      }
    })
    .catch(error => {
      if (error.message === "Cannot read properties of undefined (reading 'forEach')") {
        b8.textContent = `Sorry, There is no results for: '${inputValue}'`;
        b9.textContent = '';
        b10.innerHTML = '';
      } else if (error.message === "Network Error") {
        window.alert('Sorry, You are not connected to internet');
      };
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
    div3.append(h4_1, h5_1);
    b7.append(div2);
    GenreTags(movie, div2);
    div2.addEventListener('click', () => {
      const movieId = movie.id;
      localStorage.setItem('movieId', JSON.stringify(movieId));
      window.location.href = '/HTML/detail.html';
    });
  });
};

function GenreTags(genre, div2) {
  const tags = genre.genres;
  const div = document.createElement('div');
  tags.forEach(tag => {
    const span = document.createElement('span');
    span.classList.add('c8');
    span.textContent = tag;
    div.append(span);
  });
  div2.append(div);
};

function pageBtn(data) {
  const backBtn = document.createElement('button');
  const nextbtn = document.createElement('button');
  const pageNum = document.createElement('span');
  const pageEstimated = () => Math.ceil(data.movie_count / data.limit);
  backBtn.classList.add('c9');
  nextbtn.classList.add('c9');
  pageNum.classList.add('c10');

  backBtn.innerHTML = '<ion-icon name="arrow-back"></ion-icon>';
  nextbtn.innerHTML = '<ion-icon name="arrow-forward"></ion-icon>';
  pageNum.textContent = data.page_number;

  if (data.page_number === 1) {
    backBtn.disabled = true;
    backBtn.style.opacity = '.8';
  }

  if (data.page_number === pageEstimated()) {
    nextbtn.disabled = true;
    nextbtn.style.opacity = '.8';
  }
  nextbtn.addEventListener('click', () => {
    currentPage++;
    axiosFetch(b4.value, currentPage);
  });

  backBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      axiosFetch(b4.value, currentPage);
    }
  });

  b10.innerHTML = '';
  b10.append(backBtn, pageNum, nextbtn);
}