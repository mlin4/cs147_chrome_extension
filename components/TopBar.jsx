import React from 'react';
import ReactDOM from 'react-dom';

import {
  AppBar, Toolbar, Typography, Button, IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


class TopBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <AppBar className="extension-appBar" position="absolute">
        <ToolBar style={{display:"flex", justifyContent: "space-between"}}>
          <img src="../images/pivot_logo48"></img>

          <Grid container direction="column">
            <Grid container>
              <Button> Filter </Button> //TODO: fix color of button
              //TODO: do we want to have the bar of filter options always there or do we want the user to push filter
              //and then get presented with the options for the filters?
            <Grid>
          </Grid>

          <Typography>
              Page Label Here
          </Typography>

          <div>
            <Button> Switch to other mode </Button>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>
        </ToolBar>
      </AppBar>

    );

  }

}

ReactDOM.render(
  <TopBar />,
  document.getElementById('chromeExtension'),
);
