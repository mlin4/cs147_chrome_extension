import React from 'react';
import ReactDOM from 'react-dom';

import {
  Grid, Paper, Card, CardContent, CardMedia, CardActionArea, Typography
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './styles/main.css';
import TopBar from './components/TopBar';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RoomIcon from '@material-ui/icons/Room';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151, //TODO: adjust width of image
  },

}));


class StartingPopup extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {

    //define grid for suggested item cards
    <Grid direction="column">

          //suggested item card 1
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image="" //TODO: insert image here
              title="" //TODO:: alt photo title
            />
            <div className={classes.details}> //TODO: change font/sizes as need be
              <CardContent className={classes.content}>

                <Typography component="h5" variant="h5">
                  Item Name
                </Typography>

                <Grid>
                  <IconButton> <AttachMoneyIcon/> </IconButton>
                  <Typography variant="subtitle1" color="textSecondary">
                    Price
                  </Typography>
                </Grid>

                <Grid>
                  <IconButton> <RoomIcon/> </IconButton>
                  <Typography variant="subtitle1" color="textSecondary">
                    Location
                  </Typography>
                </Grid>

                <Grid>
                  <IconButton> <CheckIcon/> </IconButton>
                  <Typography variant="subtitle1" color="textSecondary">
                    Use Status
                  </Typography>
                </Grid>

              </CardContent>
            </div>
        </Card>

        //suggested item card 2
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image="" //TODO: insert image here
            title="" //TODO:: alt photo title
          />
          <div className={classes.details}> //TODO: change font/sizes/color as need be
            <CardContent className={classes.content}>

              <Typography component="h5" variant="h5">
                Item Name
              </Typography>

              <Grid>
                <IconButton> <AttachMoneyIcon/> </IconButton>
                <Typography variant="subtitle1">
                  Price
                </Typography>
              </Grid>

              <Grid>
                <IconButton> <RoomIcon/> </IconButton>
                <Typography variant="subtitle1">
                  Location
                </Typography>
              </Grid>

              <Grid>
                <IconButton> <CheckIcon/> </IconButton>
                <Typography variant="subtitle1">
                  Use Status
                </Typography>
              </Grid>

            </CardContent>
          </div>
      </Card>

    </Grid>

    <AppBar className="extension-appBar" position="absolute">
      <ToolBar style={{display:"flex", justifyContent: "space-between"}}>
        <Grid direction="column" justify="center" alignItems="center">
          <Button variant="contained"> See more </Button> //TODO: Change button color
          <Button> Starred Items </Button> //TODO: Change text color
      </ToolBar>
    </AppBar>

  }

}


ReactDOM.render(
  <StartingPopup />,
  document.getElementById('chromeExtension'),
);
