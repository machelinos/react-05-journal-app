import TurnedInNot from "@mui/icons-material/TurnedInNot"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { format } from "date-fns";
import { useSelector } from "react-redux"

export const Sidebar = ({drawerWidth}) => {
    const { displayName } = useSelector(state=>state.auth);
    const { notes} = useSelector(state=>state.journal);

  return (
    <Box
        component="nav"
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography variant="h5">
                    { displayName }
                </Typography>
            </Toolbar>

            <Divider />

            <List>
                {
                    notes.map(({id, date, title})=>{
                        const noteDate = format(date,'d MMMM u');

                        return (
                            <ListItem key={id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={noteDate} />
                                        <ListItemText secondary={title} />
                                    </Grid>

                                </ListItemButton>

                            </ListItem>
                        )}
                    )
                }
            </List>

        </Drawer>

    </Box>
  )
}
