import { Box, Button } from "@mui/material";

type TComponentProps = {
  pages: string[];
};

export default function Navigation({ pages }: TComponentProps) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
          {page}
        </Button>
      ))}
    </Box>
  );
}
