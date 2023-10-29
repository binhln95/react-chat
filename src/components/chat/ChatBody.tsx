/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import ChatItem from "./ChatItem";
import ChatContext, { ChatData, GetAll } from "./ChatContext";
import { MESSAGE, SIZE } from "./type";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ChatBody() {
  const value = useContext(ChatContext);
  window.addEventListener('storage', () => {
    const data = GetAll();
    value.setData && value.setData(data);
  });

  const Reload = () => {
    const data = JSON.parse(localStorage.getItem(MESSAGE)!) as ChatData[];
    if (data.length < SIZE) {
        value.setData && value.setData(data);
    } else {
        const current : number = Math.floor(value.data!.length/SIZE);
        if (SIZE * (current + 1) > data.length) {
            value.setData && value.setData(data);
        } else {
            data.splice(0, data.length - SIZE * (current + 1));
            value.setData && value.setData(data);
        }
    }
    value.setData && value.setData(data);
  }
  
  return (
    <div className="box-body">
        <div className="direct-chat-messages">
        <button type="button" className="btn btn-box-tool" data-widget="collapse" onClick={Reload}>
            <i className="fa fa-rotate-right"></i>
                    </button>
            {value.data?.map((e, i) => {
                return <ChatItem data={e} key={i} />;
            })}
            {/* <div className="direct-chat-msg">
                <div className="direct-chat-info clearfix">
                <span className="direct-chat-name pull-left">Timona Siera</span>
                </div>
                <img className="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image" />
                <div className="direct-chat-text">
                For what reason would it be advisable for me to think about business content?
                </div>
            </div>
            <div className="direct-chat-msg right">
                <div className="direct-chat-info clearfix">
                <span className="direct-chat-name pull-right">Sarah Bullock</span>
                <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                </div>
                <img className="direct-chat-img" src="https://img.icons8.com/office/36/000000/person-female.png" alt="message user image" />
                <div className="direct-chat-text">
                Thank you for your believe in our supports
                </div>
            </div>
            <div className="direct-chat-msg">
                <div className="direct-chat-info clearfix">
                <span className="direct-chat-name pull-left">Timona Siera</span>
                <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                </div>
                <img className="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image" />
                <div className="direct-chat-text">
                For what reason would it be advisable for me to think about business content?
                </div>
            </div>
            <div className="direct-chat-msg right">
                <div className="direct-chat-info clearfix">
                <span className="direct-chat-name pull-right">Sarah Bullock</span>
                <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                </div>
                <img className="direct-chat-img" src="https://img.icons8.com/office/36/000000/person-female.png" alt="message user image" />
                <div className="direct-chat-text">
                I would love to.
                </div>
            </div> */}
        </div>
    </div>
  )
}

