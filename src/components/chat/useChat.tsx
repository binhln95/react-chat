import { useState } from 'react'
import { AddMessage, IChat } from './type'
import { ChatInfoContextData } from '../context/ChatInfoContext';
import { ChatContextData } from './ChatContext';

export default function useChat(info: ChatInfoContextData, value: ChatContextData) : IChat {
  const [message, setMessage] = useState('');
  const SendMessage = () => {
    AddMessage(message, info.name, value);
    setMessage('');
  }

  const OnChange = (message: string) => {
    setMessage(message);
  }
  const data : IChat = {
    message: message,
    sendMessage: SendMessage,
    onChange: OnChange
  }
  return data;
}
