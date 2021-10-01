import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { getPicture } from "./actions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "30%",
    height: "10%",
  },

  imageWrapper: {
    minWidth: "250px",
    minHeight: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  Img: {
    width: "100%",
    height: "100%",
  },
}));

const Picture = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((state) => state.picture);

  console.log(message, loading, error);

  const getThunkPicture = useCallback(() => dispatch(getPicture()), [dispatch]);

  useEffect(() => {
    getThunkPicture();
  }, [getThunkPicture]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress />}
        {error && <div>Возникла ошибка</div>}

        {!loading && !error && message && (
          <img className={classes.Img} src={message.image} alt="Picture" />
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => getThunkPicture()}
      >
        Случайная картинка
      </Button>
    </div>
  );
};
export default Picture;
