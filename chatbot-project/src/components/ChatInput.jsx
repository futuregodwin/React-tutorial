import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css';
import dayjs from 'dayjs'



export function ChatInput({chatMessages, setChatMessages}) {
       const [inputText, setInputText] =  useState('');
       const [isLoading, setIsLoading] =  useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        function handleKeyDown(event) {
          if (event.key === 'Enter') {
            sendMessage();
          }else if (event.key === 'Escape' || event.key === 'Esc') {
            setInputText('');
          }
        }

        async function sendMessage() {
            const time = dayjs().valueOf();
          if (isLoading || inputText === '') {
            return;
          }

          setIsLoading(true);

          setInputText('');
          
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: 'user',
              id: crypto.randomUUID(),
              time: time
            }
          ];
          // setChatMessages (newChatMessages);

          setChatMessages ([
            ...newChatMessages,
            {
              message: <img src="loading-spinner.gif" className="loading-spinner"/>,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: time

            }
          ]);

          const response = await Chatbot.getResponseAsync(inputText);
          const responsetime = dayjs().valueOf();
          setChatMessages ([
            ...newChatMessages,
            {
              message: response,
              sender: 'robot',
              id: crypto.randomUUID(),
              time: responsetime
            }
          ]);

          setIsLoading(false);

        }

        return(
          <div className="chat-input-container">
            <input
              placeholder="Send a message to Chatbot" 
              size="30" 
              onChange={saveInputText}
              value={inputText}
              onKeyDown={handleKeyDown}
              className="chat-input"
            />
            <button
            onClick={sendMessage}
            className="send-button"
            >Send</button>
          </div>
        );
      }