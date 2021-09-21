import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { mergeClasses } from '@material-ui/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    list: {
        listStyleType: 'none',
        display: 'flex',

 },
    link:
     {
         textDecoration: 'none',
         color: 'whitesmoke',
         margin: '0 20px',
         fontSize: '25px',
         color : 'Blue',
         fontWeight : '600', 
     },
     pow:
     {
        backgroundColor:  '#4caf50',
        
     },

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar 
            position="static" 
            className={classes.pow}
            >
                <Toolbar>                    
                    <nav >
                        <ul  className={classes.list}>
                            <li>                                
                                <Link className={classes.link} to="/">Home</Link>
                            </li>
                            <li>
                                <Link className={classes.link}  to="/chat">Chat </Link>
                            </li>
                            <li>
                                <Link className={classes.link} to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    );
}