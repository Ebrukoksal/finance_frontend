import TextField from "@mui/material/TextField";
import data from "../api/q&a.json";
import response from "../api/chatBox.json";
import { useState } from "react";
import { bottomNavigationClasses } from "@mui/material";

function QA() {
  const responses = response.chat;
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(0);

  const sendMessage = (keyCode) => {
    if (keyCode == 13) {
      if (prompt.length > 0) {
        // 1.update the messages state variable
        setMessages((messages) => [...messages, prompt]);
        setMessages((messages) => [
          ...messages,
          responses[messages.length % responses.length],
        ]);
        setPrompt("");
      }
    }
  };
  const handleResponses = () => {
    let new_messages = [];
    new_messages.push(responses[numOfQuestions % responses.length]);
    setMessages((messages) => [...messages, new_messages]);
  };
  const handleQuestions = (index) => {
    let new_messages = [];
    new_messages.push(questions[index]);

    setMessages((messages) => [...messages, new_messages]);
    setNumOfQuestions(numOfQuestions + 1);
    handleResponses();
    setPrompt("");
  };

  const sampleQuestion = (index) => {
    // setMessages((messages) => [...messages, prompt]);
    handleQuestions(index);
  };

  const questions = data.sampleQuestions;
  return (
    <div>
      <div className="bakim">
        <div>
          {messages.map((message, index) => (
            <p key={index} className="userMessage">
              {message}
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
          />
          <button onClick={() => sendMessage(13)}>send</button>
        </div>
      </div>
    </div>
  );
}
export default QA;
