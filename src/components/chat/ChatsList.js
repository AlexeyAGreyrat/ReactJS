import {List, ListItem, ListItemText} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


const useStyle = makeStyles({
    link:{
        textDecoration: 'none',
        color: 'blue',
        fontSize: "18px",
    }
})

export const ChatsList = () => {

    const classes = useStyle();

    return    <List component="nav" aria-label="main mailbox folders">

        <Link className={classes.link} to='/chat/1' >
        <ListItem button>
            <ListItemText primary="Chat1" />
        </ListItem>
        </Link>
        <Link className={classes.link} to='/chat/2'>
        <ListItem button>

            <ListItemText primary="Chat2" />
        </ListItem>
    </Link>
        <Link className={classes.link} to='/chat/3'>
        <ListItem button>
            <ListItemText primary="Chat3" />
        </ListItem>
    </Link>
        <Link className={classes.link} to='/chat/4'>
        <ListItem button>
            <ListItemText primary="Chat4" />
        </ListItem>
        </Link>
    </List>
}