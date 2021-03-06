import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton, Grid
} from '@material-ui/core';

class BottomButtons extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <AppBar className="extension-appBar" position="absolute">
        <ToolBar style={{display:"flex", justifyContent: "space-between"}}>
          <Grid direction="column">
            <Button> See more </Button>
            <Button> Starred Items </Button>

        </ToolBar>
      </AppBar>

    );

  }

}
