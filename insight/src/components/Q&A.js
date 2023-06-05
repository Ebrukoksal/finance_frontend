import TextField from "@mui/material/TextField";
import data from "../api/q&a.json";
import response from "../api/chatBox.json";
import { useState } from "react";
import { bottomNavigationClasses } from "@mui/material";
import daisy from "../components/images/background_papatya.jpg";

function QA() {
  const responses = response.chat;
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);

  const ChatbotResponse = () => {
    <div>
      {responses.map((value, index) => {
        return (
          <div key={index} className="response">
            <p>{value}</p>
          </div>
        );
      })}
    </div>;
  };

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

  const handleQuestions = () => {
    {
      setMessages([
        ...messages,
        questions.map((value, index) => {
          return (
            <div key={index} className="userMessage">
              {value}
            </div>
          );
        }),
      ]);
      setMessages((messages) => [
        ...messages,
        responses[messages.length % responses.length],
      ]);
      setPrompt("");
    }
  };

  const sampleQuestion = () => {
    setMessages((messages) => [...messages, prompt]);
    setPrompt(handleQuestions());
  };

  const questions = data.sampleQuestions;
  return (
    <div>
      <div className="bakim">
        <div>
          {messages.map((message) => (
            <p className="userMessage">{message}</p>
          ))}
        </div>
        <div>
          {questions.map((value, index) => {
            return (
              <div key={index}>
                <button
                  className="sampleQuestions"
                  onClick={() => {
                    sampleQuestion();
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
