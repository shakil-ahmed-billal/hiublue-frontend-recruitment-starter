

import { Box, Toolbar, Typography } from "@mui/material";

export default function OnboardingView() {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        // width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Box>
        <Typography variant="h5">Dashboard</Typography>
      </Box>
    </Box>
  );
}
