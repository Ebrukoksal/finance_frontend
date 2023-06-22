import TextField from "@mui/material/TextField";
import data from "../api/q&a.json";
import response from "../api/chatBox.json";
import { useState } from "react";

function QA() {
  const responses = response.chat;
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const messageLengthThresHold = 10;
  const longMessageWidth = "200px";
  const shortMessageWidth = "80px";

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
    // setMessages((messages) => [...messages, prompt]);
    handleQuestions(index);
  };
  // const Messages

  const questions = data.sampleQuestions;
  return (
    <div>
      <div className="bakim">
        <div>
          {/* {Messages()} */}
          {messages.map((message, index) => (
            <p key={index} className="userMessage">
              {message.direction == "right" ? (
                <div className="right" style={{}}>
                  {message.content}
                </div>
              ) : (
                <div className="left">{message.content}</div>
              )}
            </p>
          ))}
        </div>
        <div>
          {questions.map((value, index) => {
            return (
              <div key={index}>
                <button
                  className="sampleQuestions"
                  onClick={() => {
                    sampleQuestion(index);
                  }}
                >
                  {value}
                </button>
              </div>
            );
          })}
        </div>
        <div className="textField">
          <TextField
            className="textField"
            hiddenLabel
            id="filled-hidden-label-small"
            placeholder="Type your question here"
            variant="filled"
            size="small"
            color="secondary"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => sendMessage(e.keyCode)}
            style={{"position": "fixed", "width":"" }}
            //burda textareayı aşşaya sabitlemeye çalıştım başaramadm..
          />
          <button onClick={() => sendMessage(13)}>send</button>
        </div>
      </div>
    </div>
  );
}
export default QA;
