import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import WorkIcon from '@material-ui/icons/Work';
import MenuIcon from '@material-ui/icons/Menu';
import ContactsIcon from '@material-ui/icons/Contacts';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';

import './App.css';


import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        background: "#004185",
        color: "#FFF",
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        background: "#386bb5",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: "rgba(183, 197, 230, 0.9)"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App() {
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {["About Me"].map((text) => (
                    <a href="#AboutMe" className="App-link">
                        <ListItem button key={text}>
                            <ListItemIcon><PeopleIcon></PeopleIcon></ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider/>
            <List>
                {['Experience'].map((text) => (
                    <a href="#WorkExperience" className="App-link">
                        <ListItem button key={text}>
                            <ListItemIcon><WorkIcon></WorkIcon></ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider/>
            <List>
                {['Projects'].map((text) => (
                    <a href="#PersonalProjects" className="App-link">
                        <ListItem button key={text}>
                            <ListItemIcon><AssignmentIcon></AssignmentIcon></ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
                ))}
            </List>
            <Divider/>
            <List>
                {['Contact'].map((text) => (
                    <a href="Contact" className="App-link">
                        <ListItem button key={text}>
                            <ListItemIcon><ContactsIcon></ContactsIcon></ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </a>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        Andrew Huynh
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="Sections">
                <Hidden smUp implementation="js">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="js">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <section>
                    <Typography variant="h6" id="AboutMe">About Me</Typography>
                    <Divider variant="inset" className="header-divider"/>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                        facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                        gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                        donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                        imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                        arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                        donec massa sapien faucibus et molestie ac.
                    </Typography>
                </section>
                <section>
                    <Typography variant="h6" id="WorkExperience">Work Experience</Typography>
                    <Divider variant="inset" className="header-divider"/>
                    <Typography paragraph>
                        Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                        facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                        tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                        consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                        vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                        hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                        tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                        nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                        accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                    </Typography>
                </section>
                <section id="PersonalProjects">

                </section>
                <section id="Contact">

                </section>
            </main>
        </div>
    );
}


export default App;
