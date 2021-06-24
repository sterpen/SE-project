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

  
  const [student, setStudent]= useState({
      IdNo: '', 
      studentName: '', 
      tutorialGroup: ''
      }); 

   const createStudent = () => {
     console.log(student)
       axios.post('http://localhost:5000/students', student).then( () =>{
           window.location.reload(false);
       })

   }

  return (
      <>
      <h2> Create Schedule</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Id number" variant="outlined" value = {student.IdNo} onChange= {(event) => {
          setStudent({ ...student, IdNo :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Name" variant="outlined" value = {student.studentName} onChange= {(event) => {
          setStudent({ ...student, studentName :event.target.value}) 
          }}/>
      <TextField id="outlined-basic" label="Tutorial Group" variant="outlined" value = {student.tutorialGroup} onChange= {(event) => {
          setStudent({ ...student, tutorialGroup :event.target.value}) 
          }}/>
      <Button variant="contained" color="primary" onClick ={createStudent}> 
        Create 
      </Button>
    </form>
    </>
  );
}