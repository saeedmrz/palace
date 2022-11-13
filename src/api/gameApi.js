import api from "./api";
import { BASE_URL, API_KEY } from "api/constants/apiConstants";
import { currentDate, lastYear, nextYear } from "./utils";

// Creating URL to connect to API to get the games INFO
const popular_games = `games${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const URLS = {
  popularGamesURL: `${BASE_URL}${popular_games}`,
  upcomingGamesURL: `${BASE_URL}${upcoming_games}`,
  newGamesURL: `${BASE_URL}${newGames}`,
};

export const gameDetailsURL = (game_id) =>
  `${BASE_URL}games/${game_id}${API_KEY}`;

export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots${API_KEY}`;

export const searchGameURL = (game_name) =>
  `${BASE_URL}games${API_KEY}&search=${game_name}&page_size=9`;

// Fetching from API
export const fetchPopularData = () => {
  return api.get(URLS.popularGamesURL);
};

export const fetchNewGamesData = () => {
  return api.get(URLS.newGamesURL);
};

export const fetchUpcomingData = () => {
  return api.get(URLS.upcomingGamesURL);
};

export const fetchSearchGames = (name) => {
  return api.get(searchGameURL(name));
};

export const fetchGameDetails = (id) => {
  return api.get(gameDetailsURL(id));
};

export const fetchGameScreenshots = (id) => {
  return api.get(gameScreenshotURL(id));
};
