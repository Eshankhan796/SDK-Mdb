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
  const movieId = JSON.parse(localStorage.getItem('movieId'));
  axiosFetch(movieId);
};

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
  const div4 = document.createElement('div');
  const ul1 = document.createElement('ul');
  const ul2 = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const li4 = document.createElement('li');
  const h2 = document.createElement('h2');
  const h3 = document.createElement('h3');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  const p = document.createElement('p');
  const iframe = document.createElement('iframe');
  const lis = [li1, li2, li3, li4];
  const genres = data.movie.genres;

  div1.classList.add('c12');
  div2.classList.add('c6');
  div3.classList.add('c16');
  div4.classList.add('c19');
  img1.classList.add('c11');
  img2.classList.add('c15');
  img3.classList.add('c15');
  img4.classList.add('c15');
  span1.classList.add('c7');
  span2.classList.add('c17');
  ul1.classList.add('c13');
  ul2.classList.add('c18');
  iframe.classList.add('c21');
  lis.forEach(li => {
    li.classList.add('c14');
  });
  genres.forEach(genre => {
    const li = document.createElement('li');
    li.textContent = genre;
    li.classList.add('c20');
    ul2.append(li);
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
  iframe.src = `https://youtube.com/embed/${data.movie.yt_trailer_code}?controls=0`;
  iframe.setAttribute('frameborder', 0);
  li1.textContent = data.movie.rating;
  li2.textContent = `Like: ${data.movie.like_count}`;
  li3.textContent = languageMap[data.movie.language];
  li4.textContent = formatMovieRuntime(data.movie.runtime);
  h2.textContent = data.movie.title_english;
  h3.textContent = 'Overview:';
  span1.textContent = data.movie.year;
  span2.textContent = 'Geners:';
  p.textContent = data.movie.description_full;

  ul1.append(li1, li2, li3, li4);
  div2.append(h2, span1);
  div3.append(img2, img3, img4)
  div4.append(span2, ul2);
  div1.append(img1, ul1, div2, div4, h3, p, div3, iframe);
  d1.append(div1);
  torrentDisplay(data.movie.torrents);
};

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
};

function torrentDisplay(torrents) {
  const parentDiv = document.createElement('div');
  parentDiv.classList.add('c23');
  torrents.forEach(torrent => {
    const childDiv = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const div5 = document.createElement('div');
    const div6 = document.createElement('div');
    const div7 = document.createElement('div');
    const h3_1 = document.createElement('h3');
    const h3_2 = document.createElement('h3');
    const h3_3 = document.createElement('h3');
    const h3_4 = document.createElement('h3');
    const h3_5 = document.createElement('h3');
    const h3_6 = document.createElement('h3');
    const h3_7 = document.createElement('h3');
    const span1 = document.createElement('span');
    const span2 = document.createElement('span');
    const span3 = document.createElement('span');
    const span4 = document.createElement('span');
    const span5 = document.createElement('span');
    const span6 = document.createElement('span');
    const span7 = document.createElement('span');
    
    childDiv.classList.add('c22');
    div1.classList.add('c24');
    div2.classList.add('c24');
    div3.classList.add('c24');
    div4.classList.add('c24');
    div5.classList.add('c24');
    div6.classList.add('c24');
    div7.classList.add('c24');
    h3_1.classList.add('c25');
    h3_2.classList.add('c25');
    h3_3.classList.add('c25');
    h3_4.classList.add('c25');
    h3_5.classList.add('c25');
    h3_6.classList.add('c25');
    h3_7.classList.add('c25');
    span1.classList.add('c27');
    span2.classList.add('c27');
    span3.classList.add('c27');
    span4.classList.add('c27');
    span5.classList.add('c27');
    span6.classList.add('c27');
    span7.classList.add('c27');

    span1.textContent = torrent.size;
    span2.textContent = torrent.quality;
    span3.textContent = torrent.audio_channels;
    span4.textContent = torrent.video_codec;
    span5.textContent = torrent.type;
    span6.textContent = torrent.peers;
    span7.textContent = torrent.seeds;
    
    h3_1.innerHTML = '<ion-icon class="c26" name="document"></ion-icon> Size:';
    h3_2.innerHTML = '<ion-icon class="c26" name="resize"></ion-icon> Quality:';
    h3_3.innerHTML = '<ion-icon class="c26" name="volume-high"></ion-icon> Audio Channel:';
    h3_4.innerHTML = '<ion-icon class="c26" name="document-lock"></ion-icon> Video Codec:';
    h3_5.innerHTML = '<ion-icon class="c26" name="information"></ion-icon> Type:';
    h3_6.innerHTML = '<ion-icon class="c26" name="cloud-download"></ion-icon> Peers:';
    h3_7.innerHTML = '<ion-icon class="c26" name="cloud-upload"></ion-icon> Seeds:';
    
    
    div1.append(h3_1, span1);
    div2.append(h3_2, span2);
    div3.append(h3_3, span3);
    div4.append(h3_4, span4);
    div5.append(h3_5, span5);
    div6.append(h3_6, span6);
    div7.append(h3_7, span7);
    childDiv.append(div1, div2, div3, div4, div5, div6, div7);
    parentDiv.append(childDiv);
  });
  d1.append(parentDiv);
};