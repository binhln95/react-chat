import React, { useState } from "react";

const ChatInfoContext = React.createContext<ChatInfoContextData>({});
export default ChatInfoContext;

export interface ChatInfoContextData {
  name?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useChatInfoContext = () : ChatInfoContextData => {
  const [name, setName] = useState<string>('');
  const data: ChatInfoContextData = {
    name: name,
    setName: setName
  }
  return data;
}