import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyles } from "./styles";
import cardIcon1 from "../../images/cardIcon1.png";

import "./index.css";
import { Typography } from "@material-ui/core";
import { services } from "./services";
const SliderCard = ({ handleServices }) => {
	const classes = useStyles();

	let settings = {
		dots: false,
		// slidesToShow: window.innerWidth>767? 2:1,
		slidesToShow: 1,
	};
	return (
		<div className={classes.container}>
			<Slider {...settings}>
				{services.map((item, key) => (
					<>
						<div className={classes.backgroundBox}>
							<div className={classes.insideBox}>
								<div className={classes.imgBox}>
									<img src={cardIcon1} alt="icon" className={classes.imgSize} />
								</div>
								<Typography variant="h6" align="center" className={classes.title}>
									{" "}
									<b>{item.title}</b>
								</Typography>
								<div className={classes.contentBox}>
									<Typography variant="body1" className={classes.contents}>
										{item.desc}
									</Typography>
								</div>
								<div className={classes.bookTab}>
									<Typography variant="h6" align="center" className={classes.bookText} onClick={() => handleServices(`Book a call for ${item.msg}`)}>
										<b> Book a Call</b>
									</Typography>
								</div>
							</div>
						</div>
					</>
				))}
			</Slider>
		</div>
	);
};

export default SliderCard;
