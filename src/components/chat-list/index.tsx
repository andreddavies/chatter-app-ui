import { useState } from "react";
import { Divider, List, Stack } from "@mui/material";

import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";
import ChatListAdd from "./ChatListAdd";

export default function ChatList() {
  const [chatListAddVisible, setChatListAddVisible] = useState(false);

  const handleAddChat = () => setChatListAddVisible(true);

  return (
    <>
      <ChatListAdd
        open={chatListAddVisible}
        handleClose={() => setChatListAddVisible(false)}
      />

      <Stack>
        <ChatListHeader handleAddChat={handleAddChat} />

        <Divider />

        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            overflow: "auto",
            maxHeight: "80vh",
            bgcolor: "background.paper",
          }}
        >
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
        </List>
      </Stack>
    </>
  );
}
