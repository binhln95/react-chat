import { useContext } from 'react'
import '../../assets/chat.css'
import ChatBody from './ChatBody'
import ChatContext, { ChatContextData, useChatContext } from './ChatContext'
import ChatFooter from './ChatFooter'
import ChatHeader from './ChatHeader'
import useChat from './useChat'
import ChatInfoContext from '../context/ChatInfoContext'
export default function Chat() {
  const info = useContext(ChatInfoContext);
  const value: ChatContextData = useChatContext();
  const data = useChat(info, value);
  return (
    <>
      <ChatContext.Provider value={value}>
        <div className="page-content page-container" id="page-content">
          <div className="padding">
              <div className="row container d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="box box-warning direct-chat direct-chat-warning">
                      <ChatHeader />
                      <ChatBody />
                      <ChatFooter sendMessage={data.sendMessage} onChange={data.onChange} />
                    </div>
                </div>
              </div>
          </div>
        </div>
      </ChatContext.Provider>
    </>
  )
}
