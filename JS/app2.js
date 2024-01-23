const apiUrl = 'https://yts.mx/api/v2/movie_details.json?';
const d1 = document.getElementById('d1');
const languageMap = {
  "en": "English",
  "fr": "French",
  "ja": "Japanese",
  "es": "Spanish",
  "it": "Italian",
  "de": "German",
  "zh": "Chinese",
  "ko": "Korean",
  "cn": "Cantonese",
  "hi": "Hindi",
  "sv": "Swedish",
  "ru": "Russian",
  "pt": "Portuguese",
  "ro": "Romanian",
  "pl": "Polish",
  "nl": "Dutch",
  "th": "Thai",
  "da": "Danish",
  "tr": "Turkish",
  "no": "Norwegian",
  "ta": "Tamil",
  "ar": "Arabic",
  "id": "Indonesian",
  "fi": "Finnish",
  "vi": "Vietnamese",
  "hu": "Hungarian",
  "te": "Telugu",
  "cs": "Czech",
  "fa": "Persian",
  "tl": "Tagalog",
  "uk": "Ukrainian",
  "et": "Estonian",
  "he": "Hebrew",
  "el": "Greek",
  "pa": "Punjabi",
  "ml": "Malayalam",
  "ms": "Malay",
  "bn": "Bangla",
  "ca": "Catalan",
  "is": "Icelandic",
  "ur": "Urdu",
  "sr": "Serbian",
  "sk": "Slovak",
  "kn": "Kannada",
  "lv": "Latvian",
  "mr": "Marathi",
  "lt": "Lithuanian",
  "ka": "Georgian",
  "hr": "Croatian",
  "bg": "Bulgarian",
  "xx": "xx",
  "gl": "Galician",
  "sh": "Serbo-Croatian",
  "eu": "Basque",
  "mk": "Macedonian",
  "af": "Afrikaans",
  "ga": "Irish",
  "wo": "Wolof",
  "ku": "Kurdish",
  "yo": "Yoruba",
  "am": "Amharic",
  "bo": "Tibetan",
  "sq": "Albanian",
  "bs": "Bosnian",
  "sw": "Swahili",
  "hy": "Armenian",
  "kk": "Kazakh",
  "sl": "Slovenian",
  "yue": "Cantonese",
  "km": "Khmer",
  "ps": "Pashto",
  "st": "Southern Sotho",
  "zu": "Zulu",
  "gu": "Gujarati",
  "la": "Latin",
  "mn": "Mongolian",
  "nb": "Norwegian Bokmål",
  "yi": "Yiddish",
  "mi": "Maori",
  "ak": "Akan",
  "ht": "Haitian Creole",
  "mt": "Maltese",
  "xh": "Xhosa",
  "my": "Burmese",
  "ne": "Nepali",
  "lo": "Lao",
  "bm": "Bambara",
  "ab": "Abkhazian",
  "os": "Ossetic",
  "aa": "Afar",
  "lb": "Luxembourgish",
  "ky": "Kyrgyz",
  "az": "Azerbaijani",
  "so": "Somali",
  "iu": "Inuktitut",
  "lg": "Ganda",
  "be": "Belarusian",
  "ig": "Igbo",
  "cy": "Welsh",
  "cmn": "cmn",
  "zxx": "No linguistic content",
  "fil": "Filipino",
  "tw": "Twi",
  "rw": "Kinyarwanda",
  "or": "Odia",
  "ase": "American Sign Language",
  "nan": "Min Nan Chinese",
  "ber": "ber",
  "qag": "qag",
  "gsw": "Swiss German",
  "ln": "Lingala",
  "iba": "Iban",
  "cr": "Cree",
  "jv": "Javanese",
  "tn": "Tswana",
  "qab": "qab",
  "rom": "Romany",
  "dz": "Dzongkha",
  "mo": "Romanian",
  "sa": "Sanskrit",
  "ukl": "ukl",
  "ug": "Uyghur",
  "kvk": "kvk"
}


window.onload = () => {
  MovieDetails();
};

function MovieDetails() {
  const movieId = JSON.parse(sessionStorage.getItem('movieId'));
  axiosFetch(movieId);
}

function axiosFetch(movieId) {
  const APIPR = apiUrl + `movie_id=${movieId}&with_images=true&with_cast=true`;
  axios.get(APIPR)
    .then(response => {
      MovieDisplay(response.data.data);
    })
    .catch(error => {
      console.log(error);
    })
};

function MovieDisplay(data) {
  console.log(data);
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const span = document.createElement('span');
  const p = document.createElement('p');
  const lis = [li1, li2, li3, li4];


  div1.classList.add('c12');
  div2.classList.add('c6');
  img1.classList.add('c11');
  img2.classList.add('c15');
  img3.classList.add('c15');
  img4.classList.add('c15');
  span.classList.add('c7');
  ul.classList.add('c13');
  lis.forEach(li => {
    li.classList.add('c14');
  });


  div1.style.backgroundImage = `linear-gradient(#0000003B, #1d1c21), url('${data.movie.background_image_original}')`;
  div2.style.padding = '20px';
  h2.style.padding = '20px';
  h3.style.padding = '20px 20px 10px 20px'
  p.style.padding = '10px 20px 20px 20px';
  img1.src = data.movie.large_cover_image;
  img2.src = data.movie.large_screenshot_image1;
  img3.src = data.movie.large_screenshot_image2;
  img4.src = data.movie.large_screenshot_image3;

  li1.textContent = data.movie.rating;
  li2.textContent = `Like: ${data.movie.like_count}`;
  li3.textContent = languageMap[data.movie.language];
  li4.textContent = formatMovieRuntime(data.movie.runtime);
  h2.textContent = data.movie.title_english;
  h3.textContent = 'Overview:';
  span.textContent = data.movie.year;
  p.textContent = data.movie.description_full;

  ul.append(li1, li2, li3, li4);
  div2.append(h2, span);
  div3.append(img2, img3, img4)
  div1.append(img1, ul, div2, h3, p, div3);
  d1.append(div1);
}

function formatMovieRuntime(runtime) {
  const minutes = parseInt(runtime);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  let formattedRuntime = "";
  if (hours > 0) {
    formattedRuntime += `${hours}H${hours > 1 ? 's' : ''}`;
  };
  if (remainingMinutes > 0) {
    formattedRuntime += ` ${remainingMinutes}M${remainingMinutes > 1 ? 's' : ''}`;
  };
  return formattedRuntime;
}