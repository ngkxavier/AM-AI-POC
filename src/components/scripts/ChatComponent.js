import { useState, useEffect }  from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import '../css/ChatComponent.css';

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react';

const API_KEY = process.env.REACT_APP_API_KEY;

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm the Teaching Assistant for the Cyber Security Module",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => { 

    let tmpMessage = message 

    const newMessage = {
        message : tmpMessage,
        direction: 'outgoing',
        sender: "user",
      };

      console.log(newMessage); 
      console.log(newMessage.message);
  
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;

      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.error("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    let Testcontent = `
      I am a AI Teaching Assistant for Cyber Security.
    `
    const apiMessages = chatMessages.map((messageObject) => {
        const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
        return { role, content: messageObject.message };
      });
  
      const apiRequestBody = {
        "model": "ft:gpt-3.5-turbo-0613:personal::8nHpbh5t",
        "messages": [
          { role: "system", content: Testcontent },
          ...apiMessages,
        ],
      };
  
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiRequestBody),
      });
  
      return response.json();
  
  }

  return (
    <div style={{ position:"relative", height: "800px", width: "700px"  }}>
      <MainContainer>
        <ChatContainer>       
          <MessageList 
            scrollBehavior="smooth" 
            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
          >
            {messages.map((message, i) => {
              //console.log(message)
              return <Message key={i} model={message} />
            })}
          </MessageList>
          <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatComponent;
