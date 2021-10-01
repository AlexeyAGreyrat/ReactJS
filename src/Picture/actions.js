import { setMessage, setError, setLoading, API_URL } from "./pictureSlice";

export const getPicture = () => async (dispatch, getState) => {
  const {
    picture: { message, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(API_URL);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      const result = await responce.json();
      console.log(result)
      dispatch(setMessage(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};
