import {List, ListItem, ListItemText} from "@material-ui/core";

export const ChatsList = () => {
    return    <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
            <ListItemText primary="Chat1" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Chat2" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Chat3" />
        </ListItem>
        <ListItem button>
            <ListItemText primary="Chat4" />
        </ListItem>
    </List>
}