import { useStyles } from "./styles";

function SliderButton(props) {
	const classes = useStyles();
	return (
		<button onClick={props.onClick} className={classes.sliderBtn}>
			<img src={props.way} alt="direction"></img>
		</button>
	);
}

export default SliderButton;
