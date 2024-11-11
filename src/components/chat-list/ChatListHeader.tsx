import { AppBar, IconButton, Toolbar } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

type TComponentProps = {
  handleAddChat: VoidFunction;
};

export default function ChatListHeader({ handleAddChat }: TComponentProps) {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={handleAddChat}>
          <AddCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
