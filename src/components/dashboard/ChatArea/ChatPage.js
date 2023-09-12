import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Messages";


const useStyles = makeStyles((Theme ) =>
  createStyles(
    {
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);

export default function ChatPage() {
    const classes = useStyles();
  
    // Define an array of Harry Potter-related messages
    const messages = [
      {
        type: "left",
        message: "Have you read 'The Tales of Beedle the Bard'?",
        timestamp: "MM/DD 00:00",
      },
      {
        type: "right",
        message: "Yes, I love the story of 'The Three Brothers.'",
        timestamp: "MM/DD 00:01",
      },
      {
        type: "left",
        message: "I wish I could visit Diagon Alley someday!",
        timestamp: "MM/DD 00:02",
      },
      {
        type: "right",
        message: "Diagon Alley is amazing! So much magic!",
        timestamp: "MM/DD 00:03",
      },
    ];
  
    return (
      <div className={classes.container}>
        <Paper className={classes.paper} zDepth={2}>
          <Paper id="style-1" className={classes.messagesBody}>
            {messages.map((message, index) => {
              if (message.type === "left") {
                return (
                  <MessageLeft
                    key={index}
                    message={message.message}
                    timestamp={message.timestamp}
                    // Add other properties as needed
                  />
                );
              } else if (message.type === "right") {
                return (
                  <MessageRight
                    key={index}
                    message={message.message}
                    timestamp={message.timestamp}
                    // Add other properties as needed
                  />
                );
              }
              return null;
            })}
          </Paper>
          <TextInput />
        </Paper>
      </div>
    );
  }