import { IFooterProp } from "./type";

export default function ChatFooter(props: IFooterProp) {
  return (
    <div className="box-footer">
        <form action="#" method="post">
            <div className="input-group">
                <input type="text" 
                  name="message" 
                  placeholder="Type Message ..." 
                  className="form-control" 
                  value={props.message}
                  onChange={(e) => {props.onChange && props.onChange(e.target.value); }} />
                <span className="input-group-btn">
                <button type="button" className="btn btn-warning btn-flat" onClick={() => {props.sendMessage && props.sendMessage();}}>Send</button>
                </span>
            </div>
        </form>
    </div>
  )
}
