// import React, { useState, useEffect } from "react";
// import moment from "moment";
// import { useStyles } from "./styles";
// import { Typography } from "@material-ui/core";
// import chatArrow from "../../images/chatArrow.png";
// import InputField from "./inputField";
// import { WEBSOCKET_URL } from "../../config";
// import earphone from "../../images/earphone.svg";
// import eartwo from "../../images/eartwo.svg";
// import typing from "../../images/typing.gif";
// import SliderCard from "../Card";
// import { v4 as uuidv4 } from "uuid";
// import TimeChips from "./timeChips";
// import { startTimer } from "../../util/timer";
// import CountDownTimer from "./countDown";
// import { useRecoilState } from "recoil";
// import { timerSet } from "../../recoilGlobal/timertracker";

// const uniqueConnectSeparator = uuidv4();
// const client = new WebSocket(
//   `${WEBSOCKET_URL}/dialogflow/${uniqueConnectSeparator}/`
// );
// let DefaultTime = moment().format("LT");

// function ChatBot() {
//   const classes = useStyles();
//   const [convo, setConvo] = useState([]);
//   const [divOffset, setDivOffset] = useState(384);
//   const [textInput, setTextInput] = useState("");
//   const [isTyping, setTyping] = useState(false);
//   const [timeChip, setTimeChip] = useState([]);
//   const [timerClock, settimerClock] = useState(true);
//   const [timer, setTimer] = useRecoilState(timerSet);

//   client.onopen = () => {
//     console.log("WebSocket Client Connected");
//   };

//   const handleChange = e => {
//     // settimerClock(false);
//     setTextInput(e.target.value);
//   };

//   const handleKeypress = e => {
//     let isEnter = e.key === "Enter";
//     if (isEnter) {
//       handleChatList(e.target.value);

//       setTextInput("");
//     }
//   };

//   const handleReply = msg => {
//     handleChatList(msg);
//   };

//   useEffect(() => {
//     console.log("timer", timer);
//     if (convo?.length > 0) {
//       convo[convo.length - 1].sender == "user"
//         ? setTyping(true)
//         : setTyping(false);

//       setTimeout(() => {
//         setTyping(false);
//       }, 7000);

//       if (timer == false) {
//         setTimeout(() => {
//           setTimer(true);
//         }, 7000);
//       }
//     }

//     let handler = function (event) {
//       let msg;
//       let parsedata;
//       let arrayMsg = convo;
//       console.log("Message from server ", event.data);

//       parsedata = JSON.parse(event.data);
//       console.log("JSON", parsedata);
//       if (parsedata.type == "text") {
//         msg = parsedata.message;
//         arrayMsg.push({
//           sender: "client",
//           msg: msg,
//           delivery_time: moment().format("LT"),
//         });
//         setConvo([...arrayMsg]);
//         setTextInput("");
//       } else if (parsedata.type == "card") {
//         setTextInput("");
//         arrayMsg.push({
//           sender: "client",
//           msg: "cards",
//           delivery_time: moment().format("LT"),
//         });
//         setConvo([...arrayMsg]);
//       } else if (parsedata.type == "time") {
//         setTimeChip(parsedata.message);
//         //setMeetingDate(parsedata.date);
//         setTextInput("");
//         settimerClock(true);
//         arrayMsg.push({
//           sender: "client",
//           msg: "chips",
//           delivery_time: moment().format("LT"),
//         });
//         setConvo([...arrayMsg]);
//       } else if (parsedata.type == "meetingTime") {
//         let DateVal = new Date(parsedata.datetime);
//         console.log("dateVasl", parsedata.datetime);
//         arrayMsg.push({
//           sender: "client",
//           // msg: `meeting set at ${DateVal.toLocaleDateString()} and time ${DateVal.toLocaleTimeString(
//           //   [],
//           //   { hour: "2-digit", minute: "2-digit" }
//           // )} `,
//           msg: `meeting set at ${DateVal.toLocaleDateString()} and time ${moment(
//             DateVal
//           ).format("hh:mm A")} `,
//           delivery_time: moment().format("LT"),
//         });
//         setConvo([...arrayMsg]);
//       }
//     };
//     client.addEventListener("message", handler);
//     scrollScreen();
//     console.log("time", startTimer(120));
//     return () => client.removeEventListener("message", handler);
//   }, [convo]);

//   const handleMessage = msg => {
//     let array = convo;
//     if (msg !== "") {
//       array.push({
//         sender: "user",
//         msg: msg,
//         delivery_time: moment().format("LT"),
//       });
//       setConvo([...array]);
//       setTextInput("");
//       client.send(msg);
//       scrollScreen();
//     }
//   };

//   const handleServices = msgFromCards => {
//     let array = convo;
//     array.push({
//       sender: "user",
//       msg: msgFromCards,
//       delivery_time: moment().format("LT"),
//     });
//     setConvo([...array]);
//     setTextInput("");
//     client.send(msgFromCards);

//     scrollScreen();
//   };

//   const scrollScreen = () => {
//     let objDiv = document.getElementById("chatBoxDiv");
//     objDiv.scrollTop = divOffset;
//     setDivOffset(divOffset + 200);
//   };

//   const handleChatList = msg => {
//     let array = convo;
//     if (msg !== "") {
//       array.push({
//         sender: "user",
//         msg: msg,
//         delivery_time: moment().format("LT"),
//       });
//       setConvo([...array]);
//       client.send(msg);
//     }
//   };

//   const handleTime = (msgFromChips, orginalTime) => {
//     let array = convo;
//     array.push({
//       sender: "user",
//       msg: orginalTime,
//       delivery_time: moment().format("LT"),
//     });
//     setConvo([...array]);
//     setTextInput("");

//     client.send(msgFromChips);
//   };

//   const DefaultConversation = () => {
//     return (
//       <>
//         <div className={classes.userMsg}>
//           <img src={eartwo} alt="chat" />
//           <Typography variant="h6" align="left" className={classes.clientText}>
//             <b> ICT Health Support</b>
//           </Typography>
//         </div>

//         <div className={classes.firstText}>
//           <div className={classes.whiteBox}>
//             <Typography
//               variant="body1"
//               align="left"
//               className={classes.clientText}
//             >
//               <span className={classes.replyBoxChat}>
//                 Hi!! How can I help you today?
//               </span>
//             </Typography>
//           </div>
//         </div>
//         <div className={classes.tagBox}>
//           <div
//             className={classes.tagsIn}
//             onClick={() => handleReply("Services")}
//           >
//             Services
//           </div>
//           <div
//             className={classes.tagsIn}
//             onClick={() => handleReply("Leave a message")}
//           >
//             Leave a message
//           </div>
//         </div>
//         <div className={classes.timeShow}>
//           <Typography className={classes.timeDes} variant="body1">
//             {DefaultTime}
//           </Typography>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div className={classes.container}>
//       {console.log("timerClock", timerClock)}
//       <div className={classes.topBar}>
//         <div>
//           <img src={earphone} alt="ear" />
//         </div>
//         <div style={{ paddingLeft: "1em" }}>
//           <Typography variant="h5" align="left" className={classes.topText}>
//             ICT Health Support
//           </Typography>
//           <Typography variant="h6" align="left" className={classes.onlineText}>
//             Online
//           </Typography>
//         </div>
//       </div>
//       <div className={classes.chatBox} id="chatBoxDiv">
//         {<DefaultConversation />}

//         {/* ||------UserSide Header  and content------||*/}

//         {convo?.map((item, key) => (
//           <>
//             {item.sender == "user" && (
//               <>
//                 <div className={classes.userHeader}>
//                   <Typography
//                     variant="h5"
//                     align="left"
//                     className={classes.topTextUser}
//                   >
//                     <b>User</b>
//                   </Typography>
//                 </div>
//                 <Typography
//                   variant="body1"
//                   align="right"
//                   className={classes.replyBoxParent}
//                   onClick={() => console.log("keyVal")}
//                 >
//                   <span className={classes.replyBoxChatUser}>{item.msg}</span>
//                 </Typography>
//                 <div className={classes.timeShowUser}>
//                   <Typography className={classes.timeDes} variant="body1">
//                     {item.delivery_time}
//                   </Typography>
//                 </div>
//               </>
//             )}
//             {/*||------ ClientSide Header  and content-----||*/}
//             {item.sender == "client" && (
//               <>
//                 {" "}
//                 <div className={classes.userMsg}>
//                   <img src={eartwo} alt="chat" />
//                   <Typography
//                     variant="h6"
//                     align="left"
//                     className={classes.clientText}
//                   >
//                     ICT Health Support
//                   </Typography>
//                 </div>
//                 <div className={classes.firstText}>
//                   {item.msg == "cards" ? (
//                     <SliderCard handleServices={handleServices} />
//                   ) : item.msg == "chips" ? (
//                     <>
//                       <div className={classes.whiteBox}>
//                         <Typography
//                           variant="body1"
//                           align="left"
//                           className={classes.clientText}
//                         >
//                           <b>Please select a prefered time for meeting</b>
//                         </Typography>
//                         <TimeChips
//                           times={timeChip}
//                           handleTime={handleTime}
//                           // timerClock={timerClock}
//                           timer={timer}
//                         />
//                       </div>
//                       <div
//                         style={{ display: "flex", justifyContent: "center" }}
//                       >
//                         {convo[convo.length - 1].msg == "chips" && (
//                           <CountDownTimer />
//                         )}
//                       </div>
//                     </>
//                   ) : (
//                     <div className={classes.whiteBox}>
//                       <Typography
//                         variant="body1"
//                         align="left"
//                         className={classes.clientText}
//                       >
//                         <span className={classes.replyBoxChat}>{item.msg}</span>
//                       </Typography>
//                     </div>
//                   )}
//                 </div>
//                 <div className={classes.timeShow}>
//                   <Typography className={classes.timeDes} variant="body1">
//                     {" "}
//                     {item.delivery_time}
//                   </Typography>
//                 </div>
//               </>
//             )}
//           </>
//         ))}
//         {isTyping && (
//           <div className={classes.typingSign}>
//             <img src={typing} alt="type" className={classes.typeImg} />
//           </div>
//         )}
//       </div>
//       <div className={classes.inputFieldContainer}>
//         <InputField
//           textInput={textInput}
//           handleChange={handleChange}
//           onKeyDown={handleKeypress}
//         />
//         <div className={classes.chatArrowDiv}>
//           <img
//             className={classes.chatArrowImg}
//             src={chatArrow}
//             alt="chatArrow"
//             onClick={() => handleMessage(textInput)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatBot;
