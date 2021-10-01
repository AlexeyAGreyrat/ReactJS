import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  homeStyle: {
    backgroundColor: "#0ABAB5",
    maxWidth: "114px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    fontSize: "35px",
    color: "white",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div>       
      <Button>  
    Home
  </Button>
    </div>
  );
};

export default Home;
