import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';

import {
  Grid, Paper, Card, CardContent, CardMedia, CardActionArea, Typography
} from '@material-ui/core';
import './styles/main.css';
import TopBar from './components/TopBar';


class PopUp extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
       <HashRouter>
       <div>
        <Grid container spacing={8}>

          /* top panel of extension */
          <Grid item xs={12}>
            <TopBar />
          </Grid>

          /* body of panel with options  */
          <Grid item xs={12}>
            // <Switch>
            //   /* when the user first opens the extension */
            //   <Route exact path="/startingpopup"></Route>
            //
            //   /* when the user wants to see more options */
            //   <Route exact path="/seemore"></Route>
            //
            //   /* when the user wants to look into one of the options */
            //   <Route exact path="/option1"></Route>
            // <Switch>
          </Grid>

          /* bottom of panel with buttons  */
          <Grid item xs={12}>
            <BottomButtons />
          </Grid>


        </Grid>
       </div>
       </HashRouter>
    );
  }

  }



ReactDOM.render(
  <PopUp />,
  document.getElementById('chromeExtension'),
);
