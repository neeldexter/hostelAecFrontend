import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import logo from "../../images/aec/logo.jpg"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userNameState } from '../../recoil';
import { useRecoilState } from 'recoil';

const useStyles = makeStyles((theme) => ({
    loginBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "4em"
        // minHeight: '58vh',
    },
    formBox: {
        padding: '16px',
        border: '5px solid #065a62',
        backgroundColor: 'white',
        width: '40%',
        boxShadow: "7px 7px 4px -2px #10727c",
        borderRadius: "8px"
    },
    logo: {
        // width: '100px', // Adjust as needed
        // margin: '0 auto', // Center the logo
        border: "2px solid #065a62",
        borderRadius: "50%",
        height: "90px",
        width: "95px",
        boxShadow: "5px 2px 2px -1px #065a62"
    },
    formField: {
        marginBottom: '1em',
    },
    submitButton: {
        background: "#065a62",
        color: "#ffffff",
        fontWeight: "bold",
        margin: "1em 0",
        "&:hover": {
            background: "#ffffff",
            color: "#524444",
            boxShadow: "5px 2px 2px -1px #065a62"
        }
    },
    boxImage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em",
        flexDirection: "column"
    },
    tagText: {
        color: "#065a62",
        fontWeight: "bold",
        marginTop: ".5em",
        textDecoration: "underline"
    },
    erText : {
        color:"red",
        fontStyle:"italic",
        textAlign:"center",
        fontSize:".9em",
        padding:".5em"
    }
}));

function LoginForm() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [userName, setUserName] = useRecoilState(userNameState)

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const [ isErr,setIsErr] = useState(false)
    const [ msg,setMsg] = useState("Fields can't be empty ..")
    const handleChange = (e) => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async () => {
            try {
                if(loginInfo.email=="" || loginInfo.password=="") {
                    
                    setIsErr(true)
                    setTimeout(()=>{
                        setIsErr(false)
                    },1000)
                }
                else {
                    let res = await axios.post("https://hostel-alumni-m957minwo-neelams-projects.vercel.app/api/alumni-login", loginInfo)
                    if(res.status){
                        setUserName("Login")
                        localStorage.setItem("isLogin","Login")
                        navigate("/alumni-list")
                    }
                    console.log({ res })
                }
            }
            catch (err) {
              console.log("error", err.response?.data?.error)
              setIsErr(true)
              
              setMsg(err.response?.data?.error)
              setTimeout(()=>{
                  setIsErr(false)
              },1000)
            }
    }

    return (
        <Box className={classes.loginBox}>
            <Box className={classes.formBox}>
                <Box className={classes.boxImage}>
                    <img src={logo} alt="Logo" className={classes.logo} width="50px" height="60px" />
                    <Typography variant='h5' className={classes.tagText}>Login to our portal</Typography>
                </Box>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name='email'
                    value={loginInfo.email}
                    onChange={handleChange}
                    className={classes.formField}
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    name='password'
                    value={loginInfo.password}
                    onChange={handleChange}
                    className={classes.formField}
                    required
                />
                  {isErr &&  <Typography variant='body1' className={classes.erText}>{msg}</Typography>}
                <Button
                    variant="outlined"
                    fullWidth
                    className={classes.submitButton}
                    onClick={handleSubmit}
                >
                    LOGIN
                </Button>
            </Box>
        </Box>
    );
}

export default LoginForm;
