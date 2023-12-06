import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';

import Aos from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px"
  },
  completed: {
    textDecoration: "line-through"
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function Time() {
  const [deadlines, setDeadlines] = useState([
    { date: new Date("2023-11-30"), label: "Paper Submission Deadline", completed: false },
    { date: new Date("2023-11-30"), label: "Acceptance Notification", completed: false },
    { date: new Date("2023-12-10"), label: "Registration Deadline", completed: false },
    { date: new Date("2023-12-15"), label: "Conference Dates", completed: false }
  ]);

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const classes = useStyles();

  // Check if the deadline has passed and update the completed status
  useEffect(() => {
    const today = new Date();
    const updatedDeadlines = deadlines.map((deadline) => ({
      ...deadline,
      completed: deadline.date < today
    }));
    setDeadlines(updatedDeadlines);
  }, []);

  return (
    <Timeline align="left">
      {deadlines.map((deadline, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {deadline.date.toLocaleDateString()}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color={deadline.completed ? "grey" : "primary"} variant={deadline.completed ? "outlined" : "standard"}>
              {index === 0 ? <CalendarTodayIcon /> : index === 1 ? <EditCalendarIcon /> : index === 2 ? <EventIcon /> : <EventNoteIcon />}
            </TimelineDot>
            {index < deadlines.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent data-aos="fade-left" data-aos-duration="2500">
            <Paper elevation={3} className={`${classes.paper} ${deadline.completed ? classes.completed : ''}`}>
              <Typography variant="h6" component="h1">
                {deadline.label}
              </Typography>
              <Typography> </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
