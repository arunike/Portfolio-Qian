import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Email, LinkedIn } from "@material-ui/icons";

import '../../style.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const Contact = () => {
  const classes = useStyles();
    return (
      <section id="contact">
        <Container component="main" className={classes.main} maxWidth="md">
          <div>
            <h1 style={{ fontSize: '3.0em' }}>Contact Me</h1> 
          </div> <br /> <br />
          <div className="contact_form">
            <Email />
            <h4 style={{display: "inline-flex", fontSize: '1.6em'}}>
              <a href="mailto: ezrachen0403@163.com">ezrachen0403@163.com</a>
            </h4>
            <br />
            <LinkedIn />
            <h4 style={{display: "inline-flex", fontSize: '1.6em'}}>
              <a href="https://www.linkedin.com/in/richiezhou/">linkedin.com/in/richiezhou/</a>
            </h4>
          </div>
        </Container>
      </section>
  );
};