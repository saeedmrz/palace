import { fetchGameScreenshots, fetchGameDetails } from "api/gameApi";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await fetchGameDetails(id);
  const screenShotData = await fetchGameScreenshots(id);

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
