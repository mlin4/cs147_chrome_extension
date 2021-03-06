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
import StarIcon from '@material-ui/icons/Star';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {  //TODO: Adjust size of card here
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },

}));


class Product1 extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {

    <Grid alignItems="center" justify="space-around">

      <IconButton> <ArrowBackIosIcon /> </IconButton>

        <Card className={classes.root}>

          <Grid item container direction="row">
            <Grid item> //TODO: set this to be 2/3 of the card width
              //image 1
              <CardMedia
                className={classes.cover}
                image="" //TODO: insert image here
                title="" //TODO:: alt photo title
              />
            </Grid>

            <Grid container direction="column">
              //image 2
              <CardMedia
                className={classes.cover}
                image="" //TODO: insert image here
                title="" //TODO:: alt photo title
              />

              //image 3
              <CardMedia
                className={classes.cover}
                image="" //TODO: insert image here
                title="" //TODO:: alt photo title
              />

            </Grid>
          </Grid>


          <div className={classes.details}> //TODO: change font/sizes as need be
            <CardContent className={classes.content}>

              <Grid container direction="row">

                <Grid item container direction="column" alignItems="flex-start">
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


                </Grid>

                <Grid item container direction="column" alignItems="flex-end">

                  <img> //TODO: insert seller's image

                  <Typography variant="subtitle1" color="textSecondary">
                    Seller's Name
                  </Typography>


                </Grid>

              </Grid>


              <Typography variant="subtitle1" color="textSecondary"> //TODO: ensure this stretches the width of the card
                Description of product
              </Typography>

              <Typography variant="subtitle1" color="textSecondary"> //TODO: make this dimmer
                Date posted
              </Typography>


            </CardContent>
          </div>
      </Card>


      <IconButton> <ArrowForwardIosIcon /> </IconButton> //TODO: route this to Product2


    </Grid>

  }

}


ReactDOM.render(
  <Product1 />,
  document.getElementById('chromeExtension'),
);
