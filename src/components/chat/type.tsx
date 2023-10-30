import { v4 as uuidv4 } from 'uuid';
import { ChatContextData, ChatData } from './ChatContext';
export const MESSAGE = 'message';
export const SIZE = 25;
export interface IFooterProp {
    message?: string
    sendMessage?: () => void;
    onChange?: (message: string) => void;
}

export interface IChat extends IFooterProp {
}

export interface IChatItem {
    id?: number
    data: ChatData
}

export interface IChatBody {
    data: ChatContextData
}

export function generateKey(useName?: string) {
    return useName + '-' + uuidv4();
}

export function FormatName(name: string) : string {
    return name.split('-')[0];
}
export function FormatMessage(name: string) : string {
    return name.split('-')[1];
}

export function AddMessage (message?: string, useName?: string, value?: ChatContextData) {
    const key: string = MESSAGE;
    if (message != null && value != null && value.setData != null) {
        let oldData = JSON.parse(localStorage.getItem(MESSAGE)!) as ChatData[];
        if (oldData == null)
        {
            oldData = [];
        }
        oldData.push({
            name: useName, message: message
        });
        localStorage.setItem(key, JSON.stringify(oldData));
        const storageEvent = new Event('storage');
        window.dispatchEvent(storageEvent);
    }
}
