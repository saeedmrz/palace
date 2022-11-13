import {
  fetchPopularData,
  fetchUpcomingData,
  fetchNewGamesData,
  fetchSearchGames,
} from "api/gameApi";

export const loadGames = () => async (dispatch) => {
  dispatch({
    type: "LOADING_GAMES",
  });

  const popularData = await fetchPopularData();
  const upcomingData = await fetchUpcomingData();
  const newGamesData = await fetchNewGamesData();

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  dispatch({
    type: "LOADING_GAMES",
  });

  const searchGames = await fetchSearchGames(game_name);
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
