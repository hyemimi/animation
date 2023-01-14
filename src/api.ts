import axios from "axios";

const API_KEY = "cef1465372782aefaa2ae26fed3c7c10";
const BASE_PATH = "https://api.themoviedb.org/3";

//api.themoviedb.org/3/movie/550?api_key=cef1465372782aefaa2ae26fed3c7c10
//https://api.themoviedb.org/3/movie/550?api_key=cef1465372782aefaa2ae26fed3c7c10

interface IMovie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  id: number;
}
export interface IgetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
export async function getMovies() {
  return await axios
    .get(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`)
    .then((res) => res.data);
}

interface IRated {
  backdrop_path: string;
  title: string;
  overview: string;
  id: number;
  vote_average: number;
  release_date: string;
}
export interface IgetRatedResults {
  page: number;
  results: IRated[];
  total_pages: number;
  total_results: number;
}

export interface IgetLatestMovies {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  title: string;
  status: string;
}

//https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

export async function getLatest() {
  return await axios
    .get(`${BASE_PATH}/movie/latest?api_key=${API_KEY}&language=en-US`)
    .then((res) => res.data);
}

export async function getTopRated() {
  return await axios
    .get(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`)
    .then((res) => res.data);
}

//https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
