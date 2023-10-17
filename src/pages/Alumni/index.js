import React, { useEffect, useState } from 'react'
import { Typography, Grid, Button, TextField, MenuItem, FormControl, InputLabel, Select, Box } from "@material-ui/core";
import { useStyles } from "./styles";
import alumniPic from "../../images/KOLicon.jpg"
import alumniPicSec from "../../images/aec/alumnfive.jpg"
import humanLogo from "../../images/humanLogo.png"
import Modal from '@mui/material/Modal';
import Loader from '../../components/Loader';
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';



const Alumni = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [search, setSearch] = useState("");
    const [alumniList, setAlumniList] = useState([])
    const [alumniModalData, setAlumniModalData] = useState({})


    const handleOpen = (item) => {
        setAlumniModalData(item)
        setOpen(true);
    }
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

                    <Grid item xs={12} className={classes.searchBox} style={{}}>
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
                                    <img className={classes.contactImg} src={alumniPicSec} alt="alumniPic" />
                                </div>
                                <div className={classes.parentCard}>
                                    <Typography className={classes.textInside}>Name : <span>{item?.firstName} {item?.lastName}</span>  </Typography>
                                    <Typography className={classes.textInside}>Batch : {item?.batchYear}   </Typography>
                                    <Typography className={classes.textInside}>Department : {item?.department}   </Typography>
                                    <Typography className={classes.textInside}>Email :  {item?.email}   </Typography>
                                    <Typography className={classes.textInside}>Contact No. :   {item?.phone}   </Typography>
                                    <div className={classes.seeMore}>
                                        <Button variant="contained" color="primary" fullWidth className={classes.seeButn} onClick={() => handleOpen(item)}>VIEW DETAILS</Button>
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
                            <Box className={classes.modalDes}>
                                <Grid container item xs={12} >
                                    <Grid item xs={12}>
                                        <div style={{ textAlign: "right", cursor: "pointer" }} onClick={handleClose}>
                                            <ClearIcon />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>

                                        <Typography varaint="h5" className={classes.modHead}>Alumni Details   </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={9} xl={9} className={classes.modPicSection}>
                                        <img className={classes.contactImgModal} src={alumniPic} alt="alumniPicMod" />
                                        <div className={classes.parentCardMod}>
                                            <Typography className={classes.textInsideMod}>Name : <span>{alumniModalData?.firstName} {alumniModalData?.lastName}</span>  </Typography>
                                            <Typography className={classes.textInsideMod}>Batch : {alumniModalData?.batchYear}   </Typography>
                                            <Typography className={classes.textInsideMod}>Department : {alumniModalData?.department}   </Typography>
                                            <Typography className={classes.textInsideMod}>Email : {alumniModalData?.email}   </Typography>
                                            <Typography className={classes.textInsideMod}>Contact No. : {alumniModalData?.phone}  </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={6} xl={6} className={classes.modPicSection}>
                                        <div style={{ padding: ".5em", marginTop: "2em" }}>
                                            <div className={classes.addresParent}>
                                                <div className={classes.addressTitle}>
                                                    Work Information
                                                </div>
                                            </div>
                                            <div className={classes.workAdd}>

                                                <Typography className={classes.textInsideMod}>Organisation  :{alumniModalData?.workInfo?.orgName} </Typography>
                                                <Typography className={classes.textInsideMod}>From : {alumniModalData?.workInfo?.joinedYear}  </Typography>
                                                <Typography className={classes.textInsideMod}>Designation : {alumniModalData?.workInfo?.designation}   </Typography>
                                                <Typography className={classes.textInsideMod}>Location : {alumniModalData?.workInfo?.location}  </Typography>

                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={5} xl={5}>
                                        <div style={{ padding: ".5em", marginTop: "2em" }}>
                                            <div className={classes.addresParent}>
                                                <div className={classes.addressTitle}>
                                                    Present Address
                                                </div>
                                            </div>
                                            <div className={classes.workAdd}>
                                                <div>
                                                    <div>
                                                        <Typography className={classes.textInsideMod}>PIN : {alumniModalData?.currentAddress?.pin}  </Typography>
                                                        <Typography className={classes.textInsideMod}>P.O. : {alumniModalData?.currentAddress?.postOffice}   </Typography>
                                                        <Typography className={classes.textInsideMod}>State : {alumniModalData?.currentAddress?.state} </Typography>
                                                        <Typography className={classes.textInsideMod}>Country : {alumniModalData?.currentAddress?.country} </Typography>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={12} lg={5} xl={5}  className={classes.addressMain}>
                                        <div style={{ padding: ".5em", marginTop: "1em" }}>
                                            <div className={classes.addresParent}>
                                                <div className={classes.addressTitle}>
                                                    Permanent Address
                                                </div>
                                            </div>
                                            <div className={classes.workAdd}>
                                                <div>
                                                    <div>
                                                        <Typography className={classes.textInsideMod}>PIN : {alumniModalData?.permanentAddress?.pin}  </Typography>
                                                        <Typography className={classes.textInsideMod}>P.O. : {alumniModalData?.permanentAddress?.postOffice}   </Typography>
                                                        <Typography className={classes.textInsideMod}>State : {alumniModalData?.permanentAddress?.state} </Typography>
                                                        <Typography className={classes.textInsideMod}>Country : {alumniModalData?.permanentAddress?.country} </Typography>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        {/* {!isEditable && <Button variant="contained" fullWidth style={{ marginTop: "1em" }}>EDIT</Button>} */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Modal>

                </Grid></>}
        </Grid>
    )
}

export default Alumni
