const b4 = document.getElementById('b4');
const b5 = document.getElementById('quality');
const b6 = document.getElementById('genre');
const b7 = document.getElementById('b7');
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
  const APIPR = apiUrl + `query_term=${query}&quality=${b5.value}&genre=${b6.value}&limit=30&page=1`;
  axios.get(APIPR)
    .then(response => {
      MovieDisplay(response.data)
    })
    .catch(error => {
      window.alert('Sorry, ' + error.message);
    });
}

function MovieDisplay(data) {
  
}