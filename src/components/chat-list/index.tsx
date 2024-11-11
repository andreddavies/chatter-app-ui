import { Divider, List, Stack } from "@mui/material";

import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";

export default function ChatList() {
  return (
    <Stack>
      <ChatListHeader />

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
      </List>
    </Stack>
  );
}
