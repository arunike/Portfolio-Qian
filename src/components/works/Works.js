/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import a from '../../assets/work/about.png';

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

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Agency Sales Assistant',
      name: "Haitong Securities",
      location: "Shenzhen, China",
      description: `Assisted sales manager in maintaining fund clients and conducting routine research services, as well as handling administrative tasks. Collaborated with sales manager in planning and organizing various marketing activities for fund clients.`,
      alter: 'Intern 1',
      image: `${a}`,
    },
    { 
      id: 2,
      title: 'Securities Intern', 
      name: "Zhongtai Securitie",
      location: "Jinan, China",
      description: `Conducted research using Wind and Ifind databases to gather industry market size information and company data. Utilized SQL for data integration and analysis, supporting the creation of informative charts and graphs. Performed valuation analysis on companies using DCF model and PE valuation method. Independently completed five research reports on listed companies.`,
      alter: 'Intern 1',
      image: `${a}`,
    },
    { 
      id: 3, 
      title: 'Securities Intern', 
      name: "Orient Securities Investment Banking",
      location: "Shanghai, China",
      description: `Assisted in financial verification projects, independently responsible for verifying personal bank transactions of over 50 executives and key personnel. Conducted comprehensive checks on company and peripheral bank transactions, meticulously recording each transaction in Excel. Compiled and organized thousands of transactions to ensure accuracy and completeness.`,
      alter: 'Intern 3',
      image: `${a}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        <h1 style={{ fontSize: '3.0em' }}>Recent Experiences</h1>
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <h3 className="name">
                <TextDecrypt text={ project.name } />
              </h3>
              <h3 className="location">
                <TextDecrypt text={ project.location } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
