import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	imageContainer: {
		display: "flex",
		alignItems: "center",
		cursor: "pointer",
		borderRadius: "10px",
		"&:hover": {
			boxShadow:
				"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);",
		},
	},
	imgService: {
		width: "55%",
		// width: "70%",
		display: "block",
		margin: "auto",
		padding: "1em",
	},
	imgServiceLast: {
		width: "35%",
		// width: "50%",
		display: "block",
		margin: "auto",
		padding: "1em",
	},
}));
