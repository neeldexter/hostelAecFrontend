import { Typography, Grid, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { careerContent, candidateAd } from "./contents";
import { useStyles } from "./styles";
import Footer from "../../components/Footer/index.js";
import DialogForm from "../../components/Dialog";
import Home from "../HomePage";

function Career() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState("");

  const handleClickOpen = title => {
    setRole(title);
    setOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <Grid container>
    //   <Grid item xs={12} lg={12} xl={12} className={classes.image} />

    //   <Grid item xs={12}>
    //     <Typography variant="h3" className={classes.paragraph}>
    //       We are looking for innovative minds to energize our next-gen
    //       healthcare solutions.
    //     </Typography>
    //   </Grid>
    //   <Grid container item xs={12} className={classes.jobContainerMain}>
    //     {careerContent.map((item, key) => (
    //       <Grid
    //         item
    //         xs={12}
    //         lg={6}
    //         xl={6}
    //         className={
    //           key % 2 == 0 ? classes.contentBox : classes.contentBoxTwo
    //         }
    //       >
    //         <div className={classes.container}>
    //           <Typography variant="h6" className={classes.title}>
    //             {item.title}
    //           </Typography>
    //           <Typography variant="h6" className={classes.role}>
    //             {item.role}
    //           </Typography>
    //           <Button
    //             variant="contained"
    //             color="primary"
    //             className={classes.startButn}
    //             onClick={() => handleClickOpen(item.title)}
    //             value="Button"
    //           >
    //             {" "}
    //             Apply now{" "}
    //           </Button>
    //         </div>{" "}
    //       </Grid>
    //     ))}
    //   </Grid>

    //   <Grid container item xs={12} className={classes.jobContainer}>
    //     <Typography variant="h4" className={classes.headline}>
    //       Didn't find a match
    //     </Typography>

    //     <div>
    //       <Typography variant="h3" className={classes.profile}>
    //         EXPERIENCED
    //       </Typography>

    //       <Typography variant="h6" className={classes.description}>
    //         Candidates with a proven track record in the fields of Software
    //         engineering, Pre-sales and Testing are invited to apply for current
    //         openings at ICT HEALTH. The openings will be based out of different
    //         locations depending upon the job requirement. ICT HEALTH follows a
    //         linear organizational structure and strives to maximize an
    //         employee’s potential. Interested candidates are requested to send in
    //         their application outlining their years of experience and
    //         responsibilities{" "}
    //         <a href="" className={classes.link}>
    //           careers@icthealth.com
    //         </a>
    //       </Typography>
    //     </div>

    //     <div>
    //       <Typography variant="h3" className={classes.profile}>
    //         FRESHERS
    //       </Typography>

    //       <Typography variant="h6" className={classes.description}>
    //         Fresh out of college and embarking into the corporate world?
    //         Graduates from fields of engineering, sales, technical and marketing
    //         combined with zeal to create new standards in the category of the
    //         Healthcare Information technology are invited to join us in this
    //         endeavor. We don’t do CV’s and will prefer a detailed covering
    //         letter of your personality and ambition in years to come. Please
    //         send in your educational background with the covering letter to the
    //         below email ID{" "}
    //         <a href="careers@icthealth.com" className={classes.link}>
    //           careers@icthealth.com
    //         </a>{" "}
    //         and complete the test following below link <br />
    //         <a href="http://hr.gs/freshers-testlink" className={classes.link}>
    //           http://hr.gs/freshers-testlink
    //         </a>
    //       </Typography>
    //     </div>

    //     <div>
    //       <Typography variant="h3" className={classes.profile}>
    //         INTERNSHIPS
    //       </Typography>

    //       <Typography variant="h6" className={classes.description}>
    //         A young mind’s imagination is a key to turning some great business
    //         ideas into reality. Being cognizant of the fact, ICT Health launched
    //         its flagship program iDream to provide college students with an
    //         incubator to research and contribute directly towards the
    //         organization. Read more on iDream program.
    //         <br />
    //         <b>
    //           {" "}
    //           For further information, please write to idream@icthealth.com
    //         </b>
    //       </Typography>
    //     </div>
    //     {/* {candidateAd.map((item, key) => (
		// 			<div>
		// 				<Typography variant="h3" className={classes.profile} key={key.profile}>
		// 					{item.profile}
		// 				</Typography>

		// 				<Typography variant="h6" className={classes.description} key={key.description}>
		// 					{item.description}
		// 					<span>
		// 						<a href="">careers@icthealth.com</a>
		// 					</span>
		// 				</Typography>
		// 			</div>
		// 		))} */}
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       className={classes.endButn}
    //       onClick={() => handleClickOpen("")}
    //     >
    //       {" "}
    //       Apply now{" "}
    //     </Button>

    //     <Grid item xs={12} className={classes.footer}>
    //       <Footer />
    //     </Grid>
    //     <DialogForm
    //       open={open}
    //       setOpen={setOpen}
    //       role={role}
    //       formType="careerForm"
    //     />
    //   </Grid>
    // </Grid>
    <div><Home/></div>
  );
}

export default Career;
