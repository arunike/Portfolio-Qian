import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LogoSVG from "../../assets/favicon.png";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
        <img src={LogoSVG} alt="Logo" className={classes.svgHover} />
    );
};
