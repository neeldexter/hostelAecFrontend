import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./styles.js";
import { urls, siteIcons, sites } from "./contents.js";

function Footer() {
	const classes = useStyles();

	const handleClick = (event) => {
		// let site = event.target.getAttribute("id");
		// window.open(urls[site], "_blank");
	};

	return (
		<div className={classes.container}>
			<div className={classes.textPortion}>
				<Typography variant="h6" className={classes.textPortion}>
					Copyright 2023 HOSTEL 1 | Assam Engineering College
				</Typography>
			</div>
			<div className={classes.socialIcons}>
				{siteIcons.map((item, index) => {
					return (
						<div className={classes.box}>
							<img src={item} id={sites[index]} alt={sites[index]} onClick={(event) => handleClick(event)} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Footer;
