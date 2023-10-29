import React, { useState } from "react";
import { MESSAGE, SIZE } from "./type";

const ChatContext = React.createContext<ChatContextData>({});
export default ChatContext;

export interface ChatData{
    name?: string;
    message?: string;
}

export interface ChatContextData {
    data?: ChatData[];
    setData?: React.Dispatch<React.SetStateAction<ChatData[]>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useChatContext = () : ChatContextData => {
    const [dataChat, setDataChat] = useState<ChatData[]>(GetAll);
    
    const data: ChatContextData = {
        data: dataChat,
        setData: setDataChat
    }
    return data;
}

export function GetAll() : ChatData[] {
    let data = JSON.parse(localStorage.getItem(MESSAGE)!) as ChatData[];
    if (data == null) {
        data = []
    }
    if (data.length <= SIZE ) {
        return data;
    } else {
        return data.splice(data.length - SIZE, data.length);
    }
}