import { clientMsg } from "./contents.js";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import SliderButton from "./sliderButtons.js";
import next from "../../images/nextArrow.png";
import prev from "../../images/prevArrow.png";
import { useStyles } from "./styles.js";

const MsgCardSlider = () => {
	const [msgIndex, setMsgIndex] = useState(0);

	const classes = useStyles();

	const nextMsg = e => {
		e.preventDefault();
		msgIndex < clientMsg.length - 1 ? setMsgIndex(msgIndex + 1) : setMsgIndex(0);
	};

	const prevMsg = e => {
		e.preventDefault();
		msgIndex !== 0 ? setMsgIndex(msgIndex - 1) : setMsgIndex(clientMsg.length - 1);
	};

	return (
		<div className={classes.clientGrid}>
			<div className={classes.msgCard}>
				<Typography variant="h6" className={classes.msgCont}>
					{clientMsg[msgIndex].msg}
				</Typography>
				<div className={classes.quoterDiv}>
					<Typography variant="h6" className={classes.quoterName}>
						{clientMsg[msgIndex].name}
					</Typography>
					<Typography variant="h6" className={classes.quoterDesig}>
						{clientMsg[msgIndex].designation}
					</Typography>
				</div>
			</div>
			<div className={classes.sliderBtnDiv}>
				<SliderButton onClick={prevMsg} way={prev}></SliderButton>
				<SliderButton onClick={nextMsg} way={next}></SliderButton>
			</div>
		</div>
	);
};

export default MsgCardSlider;
