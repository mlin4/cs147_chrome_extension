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
import StarBorderIcon from '@material-ui/icons/StarBorder';

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


class BigGrid extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {

    //define grid for suggested item cards
    <Grid direction="column">

        <Grid direction="row">
              //suggested item card 1
              <Card className={classes.root}>
                <CardMedia
                  image="" //TODO: insert image here
                  title="" //TODO:: alt photo title
                />
                <div className={classes.details}> //TODO: change font/sizes as need be
                  <CardContent className={classes.content}>

                    <Grid item container justify="space-betwen">
                      <Typography component="h5" variant="h5">
                        Item Name
                      </Typography>
                      <IconButton> <StarBorderIcon/> </IconButton>
                    </Grid>

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

                    <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
                      Date Posted
                    </Typography>


                  </CardContent>
                </div>
            </Card>

            //suggested item card 2
            <Card className={classes.root}>
              <CardMedia
                image="" //TODO: insert image here
                title="" //TODO:: alt photo title
              />
              <div className={classes.details}> //TODO: change font/sizes as need be
                <CardContent className={classes.content}>

                  <Grid item container justify="space-betwen">
                    <Typography component="h5" variant="h5">
                      Item Name
                    </Typography>
                    <IconButton> <StarBorderIcon/> </IconButton>
                  </Grid>

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

                  <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
                    Date Posted
                  </Typography>


                </CardContent>
              </div>
          </Card>

          //suggested item card 3
          <Card className={classes.root}>
            <CardMedia
              image="" //TODO: insert image here
              title="" //TODO:: alt photo title
            />
            <div className={classes.details}> //TODO: change font/sizes as need be
              <CardContent className={classes.content}>

                <Grid item container justify="space-betwen">
                  <Typography component="h5" variant="h5">
                    Item Name
                  </Typography>
                  <IconButton> <StarBorderIcon/> </IconButton>
                </Grid>

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

                <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
                  Date Posted
                </Typography>


              </CardContent>
            </div>
        </Card>

        //suggested item card 4
        <Card className={classes.root}>
          <CardMedia
            image="" //TODO: insert image here
            title="" //TODO:: alt photo title
          />
          <div className={classes.details}> //TODO: change font/sizes as need be
            <CardContent className={classes.content}>

              <Grid item container justify="space-betwen">
                <Typography component="h5" variant="h5">
                  Item Name
                </Typography>
                <IconButton> <StarBorderIcon/> </IconButton>
              </Grid>

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

              <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
                Date Posted
              </Typography>


            </CardContent>
          </div>
      </Card>

      </Grid>

      <Grid direction="row">
            //suggested item card 5
            <Card className={classes.root}>
              <CardMedia
                image="" //TODO: insert image here
                title="" //TODO:: alt photo title
              />
              <div className={classes.details}> //TODO: change font/sizes as need be
                <CardContent className={classes.content}>

                  <Grid item container justify="space-betwen">
                    <Typography component="h5" variant="h5">
                      Item Name
                    </Typography>
                    <IconButton> <StarBorderIcon/> </IconButton>
                  </Grid>

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

                  <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
                    Date Posted
                  </Typography>


                </CardContent>
              </div>
          </Card>

          //suggested item card 6
          <Card className={classes.root}>
            <CardMedia
              image="" //TODO: insert image here
              title="" //TODO:: alt photo title
            />
            <div className={classes.details}> //TODO: change font/sizes as need be
              <CardContent className={classes.content}>

                <Grid item container justify="space-betwen">
                  <Typography component="h5" variant="h5">
                    Item Name
                  </Typography>
                  <IconButton> <StarBorderIcon/> </IconButton>
                </Grid>

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

                <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
                  Date Posted
                </Typography>


              </CardContent>
            </div>
        </Card>

        //suggested item card 7
        <Card className={classes.root}>
          <CardMedia
            image="" //TODO: insert image here
            title="" //TODO:: alt photo title
          />
          <div className={classes.details}> //TODO: change font/sizes as need be
            <CardContent className={classes.content}>

              <Grid item container justify="space-betwen">
                <Typography component="h5" variant="h5">
                  Item Name
                </Typography>
                <IconButton> <StarBorderIcon/> </IconButton>
              </Grid>

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

              <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
                Date Posted
              </Typography>


            </CardContent>
          </div>
      </Card>

      //suggested item card 8
      <Card className={classes.root}>
        <CardMedia
          image="" //TODO: insert image here
          title="" //TODO:: alt photo title
        />
        <div className={classes.details}> //TODO: change font/sizes as need be
          <CardContent className={classes.content}>

            <Grid item container justify="space-betwen">
              <Typography component="h5" variant="h5">
                Item Name
              </Typography>
              <IconButton> <StarBorderIcon/> </IconButton>
            </Grid>

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

            <Typography variant="subtitle1" color="textSecondary"> //TODO: make this one dimmer than the rest
              Date Posted
            </Typography>


          </CardContent>
        </div>
    </Card>

    </Grid>
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
  <BigGrid />,
  document.getElementById('chromeExtension'),
);
