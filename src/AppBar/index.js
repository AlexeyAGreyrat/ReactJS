import { AppBar as MaterialUiHome } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: "20px",
    color: theme.palette.background.default,
    textDecoration: "none",
  },

  activeLink: {
    color: "black",
  },

  appHome: {
    marginBottom: "20px",
  },
}));

const routes = [
  {
    pathTitle: "Home",
    path: "/",
  },
  { pathTitle: "Chats", path: "/chat/choosechat" },
  { pathTitle: "Profile", path: "/profile" },
];

const AppBar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <MaterialUiHome className={classes.appHome} position="static">
      <Toolbar>
        {routes.map((route) => (
          <Link
            key={route.path}
            to={route.path}
            className={`${classes.link} ${
            route.path === location.pathname ? classes.activeLink : ""
            }`}
          >
            <Typography variant="h4">{route.pathTitle}</Typography>
          </Link>
        ))}
      </Toolbar>
    </MaterialUiHome>
  );
};

export default AppBar;
