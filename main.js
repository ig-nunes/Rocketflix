import {
  API_KEY, BASE_URL,
  IMG_URL,
  language,
} from './api.js'

const baseUrl = BASE_URL;
const apiKey = API_KEY;
const imgUrl = IMG_URL;
const lang = language;

function getMovie() {
  let min = 1;         // indice mínimo
  let max = 1000;        // indice máximo
  let number = Math.floor(Math.random() * (max - min + 1) + min);
  axios.get(`${baseUrl}${number}?${apiKey}&${lang}`)   //baseUrl + number + "?" + apiKey + "&" + lang                                            
    .then(response => {
      // console.log(response.data);
      textError.textContent = "";
      if (response.data.title !== "") {
        movieName.textContent = response.data.title
      } else {
        movieName.textContent = "Nome não disponível"
      }

      if (response.data.overview !== "") {
        movieDescription.textContent = response.data.overview
      } else {
        movieDescription.textContent = "Sinopse não disponível."
      }

      if (response.data.poster_path !== null) {
        moviePoster.src = `${imgUrl}${response.data.poster_path}`
      } else {
        moviePoster.textContent = "Imagem não dispinível."
      }


    })
    .catch(error => {
      // console.error(error)
      textError.textContent = "OPS! Filme não encontrado. Aperte no botão para procurar novamente."
      movieName.textContent = ""
      movieDescription.textContent = ""
      moviePoster.src = null
    })
}


// Referenciando o botão:

let btn = document.getElementById('button-find-movie');

// Adicionando evento para o botão:

btn.addEventListener('click', getMovie, true);
