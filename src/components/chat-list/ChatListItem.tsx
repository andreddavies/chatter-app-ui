import {
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";

export default function ChatListItem() {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              >
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" />
    </>
  );
}
