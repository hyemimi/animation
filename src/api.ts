import axios from "axios";

const API_KEY = "cef1465372782aefaa2ae26fed3c7c10";
const BASE_PATH = "https://api.themoviedb.org/3";

//api.themoviedb.org/3/movie/550?api_key=cef1465372782aefaa2ae26fed3c7c10
//https://api.themoviedb.org/3/movie/550?api_key=cef1465372782aefaa2ae26fed3c7c10
export async function getMovies() {
  return await axios
    .get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
    .then((res) => res.data);
}
