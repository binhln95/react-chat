import { useContext, useState } from "react";
import IUseLogin from "./type";
import ChatInfoContext from "../context/ChatInfoContext";

export default function useLogin() : IUseLogin {
  const chatContext = useContext(ChatInfoContext);
  const [name, setName] = useState('');
  const SubmitForm = () => {
    if (name != '') {
        chatContext.setName && chatContext.setName(name);
    }
  }
  const data : IUseLogin = {
    SubmitForm: SubmitForm,
    setName: setName
  }
  return data;
}
