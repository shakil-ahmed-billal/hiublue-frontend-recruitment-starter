import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 200;

const DashboardView = async () => {

  
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Box>
        <Typography variant="h5">Dashboard</Typography>
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
          }}
        >
          <Card
            style={{
              padding: "20px",
            }}
          >
            <Typography>Total active users</Typography>
            <Typography>8.2k</Typography>
            <Typography>8.2k preview month</Typography>
          </Card>
          <Card
            style={{
              padding: "20px",
            }}
          >
            <Typography>Total active users</Typography>
            <Typography>8.2k</Typography>
            <Typography>8.2k preview month</Typography>
          </Card>
          <Card
            style={{
              padding: "20px",
            }}
          >
            <Typography>Total active users</Typography>
            <Typography>8.2k</Typography>
            <Typography>8.2k preview month</Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardView;
