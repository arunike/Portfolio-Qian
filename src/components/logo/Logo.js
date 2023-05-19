import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LogoSVG from "../../assets/favicon.png";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    height: "40px",
    width: "40px",
    margin: "0 5px",
    marginTop: "5px",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <a href="/"> <img src={LogoSVG} alt="logo" className={classes.svgHover} /> </a>
    );
};