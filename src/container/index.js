import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import TopBar from "../components/TopBar";
import TopBarMobile from "../components/TopBarMobileNav";
import Footer from "../components/Footer";

function HomeContainer(props) {
	const classes = useStyles();
	let screenResolution = window.innerWidth;
	return (
		<Grid container>
			<Grid item xs={12} className={classes.rootContainer}>
				{screenResolution > 1023 ? <TopBar /> : <TopBarMobile />}
			</Grid>
			<Grid item xs={12} className={classes.rootContainer}>
				{props.children}
			</Grid>
			<Grid item xs={12} className={classes.footer}>
				<Footer />
			</Grid>
		</Grid>
	);
}

export default HomeContainer;
