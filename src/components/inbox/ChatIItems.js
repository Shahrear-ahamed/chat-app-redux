import ChatItem from "./ChatItem";
import {useGetConversationsQuery} from "../../features/conversations/conversationsApi";
import {useSelector} from "react-redux";

export default function ChatItems() {
    const {user} = useSelector(state => state.auth) || {}
    const {email} = user || {};
    console.log(email)
    const {data: conversations, isLoading, isError, error} = useGetConversationsQuery(email)
    console.log(conversations)
    return (
        <ul>
            <li>
                <ChatItem
                    avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    name="Saad Hasan"
                    lastMessage="bye"
                    lastTime="25 minutes"
                />
            </li>
        </ul>
    );
}
