import './App.css'
import Chat from './components/chat/Chat';
import ChatInfoContext, { ChatInfoContextData, useChatInfoContext } from './components/context/ChatInfoContext';
import Login from './components/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const value: ChatInfoContextData = useChatInfoContext();
  return (
    <>
      <ChatInfoContext.Provider value={value}>
        {value.name === '' ? <Login /> : <Chat />}
      </ChatInfoContext.Provider>
    </>
  )
}

export default App
