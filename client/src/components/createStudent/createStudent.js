import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'; 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();

  //Update the states 
  const [student, setStudent]= useState({
    Day: '',
    First: '', 
    Second: '',
    Third: '', 
    Fourth: '', 
    Fifth: '',
    tutorialGroup: ''
      }); 

   const createStudent = () => {
       axios.post('http://localhost:5000/students', student).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Schedule</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="day of the week" variant="outlined" value = {student.Day} onChange= {(event) => {
          setStudent({ ...student, Day :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="first period" variant="outlined" value = {student.FirstP} onChange= {(event) => {
          setStudent({ ...student, First :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="second period" variant="outlined" value = {student.SecondP} onChange= {(event) => {
          setStudent({ ...student, Second :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="third period" variant="outlined" value = {student.ThirdP} onChange= {(event) => {
          setStudent({ ...student, Third :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="fourth period" variant="outlined" value = {student.FourthP} onChange= {(event) => {
          setStudent({ ...student, Fourth :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="fifth period" variant="outlined" value = {student.FifthP} onChange= {(event) => {
          setStudent({ ...student, Fifth :event.target.value}) 
          }}/>
          <TextField id="outlined-basic" label="tutorial group" variant="outlined" value = {student.tutorial} onChange= {(event) => {
          setStudent({ ...student, tutorialGroup :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={createStudent}> 
        Create 
      </Button>
    </form>
    </>
  );
}