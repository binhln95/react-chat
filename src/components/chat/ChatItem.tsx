import { IChatItem } from "./type";

export default function ChatItem(props: IChatItem) {
  return (
    <div className="direct-chat-msg" key={props.id?.toString()}>
        <div className="direct-chat-info clearfix">
        <span className="direct-chat-name pull-left">{props.data.name!}</span>
        </div>
        <img className="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image" />
        <div className="direct-chat-text">
          {props.data.message!}
        </div>
    </div>
  )
}
