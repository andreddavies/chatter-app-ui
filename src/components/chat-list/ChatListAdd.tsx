import { useState } from "react";
import {
  Box,
  Modal,
  Stack,
  Paper,
  Button,
  Switch,
  InputBase,
  FormGroup,
  TextField,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type TComponentProps = {
  open: boolean;
  handleClose: VoidFunction;
};

export default function ChatListAdd({ open, handleClose }: TComponentProps) {
  const [isPrivate, setIsPrivate] = useState(true);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          p: 4,
          top: "50%",
          width: 400,
          left: "50%",
          boxShadow: 24,
          border: "2px solid #000",
          bgcolor: "background.paper",
          transform: "translate(-50%, -50%)",
          position: "absolute" as const,
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h6" component="h2">
            Add Chat
          </Typography>

          <FormGroup>
            <FormControlLabel
              label="Private"
              style={{ width: 0 }}
              control={
                <Switch
                  defaultChecked
                  value={isPrivate}
                  onChange={(event) => setIsPrivate(event.target.checked)}
                />
              }
            />
          </FormGroup>

          {isPrivate ? (
            <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Users" />
              <IconButton sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          ) : (
            <TextField label="Name" />
          )}

          <Button variant="outlined">Save</Button>
        </Stack>
      </Box>
    </Modal>
  );
}
