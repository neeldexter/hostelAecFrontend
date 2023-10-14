import React, { useEffect, useState } from 'react'
import { Typography, Grid, Button, TextField, MenuItem, FormControl, InputLabel, Select, Box } from "@material-ui/core";
import { useStyles } from "./styles";
import alumniPic from "../../images/KOLicon.jpg"
import humanLogo from "../../images/humanLogo.png"
import Modal from '@mui/material/Modal';
import Loader from '../../components/Loader';
import axios from 'axios';



const Alumni = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [search, setSearch] = useState("");
    const [alumniList, setAlumniList] = useState([])


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const getData = async () => {
        try {
            setLoading(true)
            let data = await axios.get("https://hostel-alumni-m957minwo-neelams-projects.vercel.app/api/alumni-list")
            console.log("values", data?.data)
            setAlumniList(data?.data)
            setLoading(false)
        }
        catch (err) {
            console.log({ err })
        }
    }

    const searchAlumni = async () => {
        if (search.length) {
            try {
                setLoading(true)
                let data = await axios.get(`https://hostel-alumni-m957minwo-neelams-projects.vercel.app/api/alumni-search?name=${search}`)
                //   console.log("valuesSearch",data?.data)
                setAlumniList(data?.data)
                setLoading(false)
            }
            catch (err) {
                console.log({ err })
            }
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        e.target.value == 0 && getData()
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <Grid container>
            {isLoading ? <Loader /> : <>
                <Grid container item xs={12}>

                    <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between", gap: ".5em", padding: "1em", boxShadow: "2px 6px 9px 0px #d4d4d4", marginBottom: "1em" }}>
                        <div style={{ width: "100%" }}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Search by Name | Batch Year | Branch "
                                name="search"
                                type="text"
                                onChange={(e) => handleSearch(e)}
                                value={search}
                            // error={touched.password && Boolean(errors.password)}
                            // helperText={touched.password && errors.password}
                            />
                        </div>
                        <div>
                            <Button variant="contained" style={{ padding: ".7em 1.5em", fontWeight: "bold", background: "#428F9C", color: "#ffffff", fontSize: "1.1em" }}
                                onClick={searchAlumni}>SEARCH</Button>
                        </div>
                    </Grid>
                    {alumniList?.length == 0 ?
                        <Grid item xs={12} style={{ padding: "9em 1em" }}>
                            <Typography variant='h6' style={{ color: "red", fontStyle: "italic", textAlign: "center" }}>Sorry , couldn't find any match !!! </Typography>
                        </Grid>
                        : <>
                            {alumniList?.map((item, key) => <Grid item xs={12} md={6} lg={3} xl={3} className={classes.parentGrid}>
                                <div className={classes.parentContactImg}>
                                    <img className={classes.contactImg} src={alumniPic} alt="alumniPic" />
                                </div>
                                <div className={classes.parentCard}>
                                    <Typography className={classes.textInside}>Name : <span>{item?.firstName} {item?.lastName}</span>  </Typography>
                                    <Typography className={classes.textInside}>Batch : {item?.batchYear}   </Typography>
                                    <Typography className={classes.textInside}>Department : {item?.department}   </Typography>
                                    <Typography className={classes.textInside}>Email :  {item?.email}   </Typography>
                                    <Typography className={classes.textInside}>Contact No. :   {item?.phone}   </Typography>
                                    <div className={classes.seeMore}>
                                        <Button variant="contained" color="primary" fullWidth className={classes.seeButn} onClick={handleOpen}>VIEW DETAILS</Button>
                                    </div>
                                </div>
                            </Grid>)}
                        </>}

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Grid container style={{ padding: "2em" }}>
                            <Grid container item xs={12} className={classes.modalDes}>
                                <Grid item xs={12}>

                                    <Typography varaint="h5" className={classes.modHead}>Alumni Details   </Typography>
                                </Grid>
                                <Grid item xs={12} md={12} lg={4} xl={4} className={classes.modPicSection}>
                                    <img className={classes.contactImgModal} src={alumniPic} alt="alumniPicMod" />
                                    <div className={classes.parentCardMod}>
                                        <Typography className={classes.textInsideMod}>Name : <span> Neelam Das</span>  </Typography>
                                        <Typography className={classes.textInsideMod}>Batch : 2018   </Typography>
                                        <Typography className={classes.textInsideMod}>Department : Computer Science   </Typography>
                                        <Typography className={classes.textInsideMod}>Email : neelam123@gmail.com   </Typography>
                                        <Typography className={classes.textInsideMod}>Contact No. : 9876543210  </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={4} xl={4} className={classes.modPicSection}>
                                    <div style={{ padding: ".5em", marginTop: "1em" }}>
                                        <div className={classes.addresParent}>
                                            <div className={classes.addressTitle}>
                                                Work Information
                                            </div>
                                        </div>
                                        <div className={classes.workAdd}>

                                            <Typography className={classes.textInsideMod}>Organisation  : Tata Constultancy Services [TCS] </Typography>
                                            <Typography className={classes.textInsideMod}>From : 2020  </Typography>
                                            <Typography className={classes.textInsideMod}>Designation : Technical Lead   </Typography>
                                            <Typography className={classes.textInsideMod}>Location : Bengaluru , India  </Typography>

                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={4} xl={4} className={""}>
                                    <div style={{ padding: ".5em", marginTop: "1em" }}>
                                        <div className={classes.addresParent}>
                                            <div className={classes.addressTitle}>
                                                Present Address
                                            </div>
                                        </div>
                                        <div className={classes.workAdd}>
                                            <div>
                                                <div>
                                                    <Typography className={classes.textInsideMod}>District : Kamrup </Typography>
                                                    <Typography className={classes.textInsideMod}>PIN : 781002  </Typography>
                                                    <Typography className={classes.textInsideMod}>P.O. : Chandmari   </Typography>
                                                    <Typography className={classes.textInsideMod}>State : Assam , India  </Typography>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={4} xl={4} style={{ marginTop: "2em" }}>
                                    <div style={{ padding: ".5em", marginTop: "1em" }}>
                                        <div className={classes.addresParent}>
                                            <div className={classes.addressTitle}>
                                                Present Addssress
                                            </div>
                                        </div>
                                        <div className={classes.workAdd}>
                                            <div>
                                                <div>
                                                    <Typography className={classes.textInsideMod}>District : Kamrup </Typography>
                                                    <Typography className={classes.textInsideMod}>PIN : 781002  </Typography>
                                                    <Typography className={classes.textInsideMod}>P.O. : Chandmari   </Typography>
                                                    <Typography className={classes.textInsideMod}>State : Assam , India  </Typography>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    {!isEditable && <Button variant="contained" fullWidth style={{ marginTop: "1em" }}>EDIT</Button>}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Modal>

                </Grid></>}
        </Grid>
    )
}

export default Alumni
