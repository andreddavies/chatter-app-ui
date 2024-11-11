import { AppBar, IconButton, Toolbar } from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

export default function ChatListHeader() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton size="large" edge="start">
          <AddCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
