//import logo from './logo.svg';
import {Container,AppBar,Typography, Grow, Grid  }from '@material-ui/core';
import Student from './components/editSchedule/editSchedule.js';
import Create from './components/createSchedule/createSchedule.js';
import './App.css';
import useStyles from './styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Schedule from './components/studentSchedule/studentSchedule';
function App() {
  const classes= useStyles();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/studentSchedule" component={Schedule} />
          <Route path='/editSchedule' render={props =>
            <div>
              <Create />
              <Student />
            </div>
          } />
        </Switch> 
        <Route path="mySchedule">
          
     <Container maxWidth= "lg">
       <AppBar className={classes.appBar} position="static" color="inherit" > 
       <Typography className={classes.heading} variant="h2" align="center" >Schedule</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify = "space-between" alignItems="stretch" >
              <Grid item xs ={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit" >
                  <Student />
                </AppBar>

              </Grid>
              <Grid item xs={12} sm={4} >
              <AppBar className={classes.appBar} position="static" color="inherit" >
              < Create Student />
                </AppBar>

              </Grid>

            </Grid>
          </Container>

        </Grow>
        </Container>
        </Route>
      </Router>
    </div>
  );
}

export default App;
