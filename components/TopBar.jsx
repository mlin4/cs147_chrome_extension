import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


class Topbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <AppBar className="extension-appBar" position="absolute">
        <ToolBar style={{display:"flex", justifyContent: "space-between"}}>
          <img src="../images/pivot_logo48"></img>
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
