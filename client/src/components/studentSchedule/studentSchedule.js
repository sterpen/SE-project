import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ShowSchedule() {
  const classes = useStyles();

  const [studentsList, setStudentList] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:5000/students').then( (allStudents) => {
      setStudentList(allStudents.data); 
    })
  }, [])

  return (
      <>
      <h2>Schedule</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">First</TableCell>
            <TableCell align="right">Second</TableCell>
            <TableCell align="right">Third </TableCell>
            <TableCell align="right">Fourth </TableCell>
            <TableCell align="right">Fifth </TableCell>
            <TableCell align="right">Tutorial Group</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.Day}
              </TableCell>
              <TableCell align="right">{student.First}</TableCell>
              <TableCell align="right">{student.Second}</TableCell>
              <TableCell align="right">{student.Third}</TableCell>
              <TableCell align="right">{student.Fourth}</TableCell>
              <TableCell align="right">{student.Fifth}</TableCell>
              <TableCell align="right">{student.tutorialGroup}</TableCell>
              <TableCell align="right">
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </> 
  );
}