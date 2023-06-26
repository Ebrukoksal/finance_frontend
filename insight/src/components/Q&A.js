import TextField from "@mui/material/TextField";
import data from "../api/q&a.json";
import response from "../api/chatBox.json";
import { useState } from "react";
import blur from "../components/images/background_blury.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThin} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";


function QA() {
  const responses = response.chat;
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [show, setShow] = useState(true);
  const messageLengthThresHold = 10;
  const longMessageWidth = "160px";
  const shortMessageWidth = "70px";

  const sendMessage = (keyCode) => {
    if (keyCode == 13) {
      handle(prompt, "right");
    }
  };

  const handleResponses = () => {
    setMessages((messages) => [
      ...messages,
      {
        content: responses[numOfQuestions % responses.length],
        direction: "left",
      },
    ]);
  };
  const handleQuestions = (index) => {
    handle(questions[index], "right");
  };
  const changeState = () => {
    setShow(!show);
    console.log(show);
  };
  const handle = (prompt, direction) => {
    if (prompt.length > 0) {
      setMessages((messages) => [
        ...messages,
        { content: prompt, direction: direction },
      ]);
      setNumOfQuestions(numOfQuestions + 1);
      handleResponses();
      setPrompt("");
    }
  };
  const sampleQuestion = (index) => {
    handleQuestions(index);
  };
  const showQuestions = ()=>{
    return(
      <div>
        {questions.map((value, index) => {
            return (
              <div key={index}>
                <button
                  className="sampleQuestions"
                  onClick={() => {
                    sampleQuestion(index);
                    changeState();
                  }}
                >
                  {value}
                </button>
                <div style={{height:"40px"}}></div>
              {/* Butonlar sağ tarafa yaslansın ama yan yana gelmesinler diye böyle geçici bi çözüm buldum */}

              </div>
            );
          })}
      </div>
    )
  }
  //Burda butona basıldıktan sonra hide ettirdim ama herhangi bir mesajdan sonrasını yapamadm.
  const Message = (props) => {
    return (
      <div>
        <div className={props.direction}>
          {props.content.length >= messageLengthThresHold ? (
            <div style={{ width: longMessageWidth }}>{props.content}</div>
          ) : (
            <div style={{ width: shortMessageWidth, textAlign: "center" }}>
              {props.content}
            </div>
          )}
        </div>
        <div style={{ height: "30px" }}></div>
      </div>
    );
    
  };
 

  const questions = data.sampleQuestions;
  return (
    <div className="background">
      <div className="chat" style={{backgroundImage: `url(${blur})`}}>

        <div>
          {messages.map((message, index) => (
            <div key={index}>{Message(message)}</div>
          ))}
        </div>
        
        <div>
          {show ? 
          showQuestions()
          :
          <></> }          
        </div>
        <div className="textField">
          <TextField
            className="textField"
            fullWidth
            id=""
            placeholder="Type your question here"
            variant="filled"
            size="small"
            color="secondary"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => sendMessage(e.keyCode)}
            //burda textareayı aşşaya sabitlemeye çalıştım başaramadm..
          />
          <button onClick={() => sendMessage(13)} >{<FontAwesomeIcon icon={faPaperPlane} />}</button>
        </div>
      </div>
    </div>
  );
}
export default QA;
