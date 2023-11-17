import React, { useEffect} from "react";
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
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function Time() {
  
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  const classes = useStyles();

  return (
    <Timeline align="left">
      <TimelineItem>
        <TimelineOppositeContent> 
          <Typography variant="body2" color="textSecondary">
          Nov 30th, 2023
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <CalendarTodayIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="2500">
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Paper Submission Deadline
            </Typography>
            <Typography> </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          Nov 30th, 2023
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="black">
            <EditCalendarIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="2500">
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Acceptance Notification
            </Typography>
            <Typography> </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          Dec 10th, 2023
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <EventIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="2500">
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Registration Deadline
            </Typography>
            <Typography> </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          Dec 15th, 2023
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <EventNoteIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="2500">
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Conference Dates
            </Typography>
            <Typography> </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
