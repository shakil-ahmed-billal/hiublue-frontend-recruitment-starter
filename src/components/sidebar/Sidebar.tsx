"use client";

import DashboardView from "@/sections/dashboard/views/dashboard-view";
import { Avatar, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

const drawerWidth = 200;

interface sidebarProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: sidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <Typography
            style={{
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            OVERVIEW
          </Typography>
          {["Dashboard", "Onboarding"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                href={`/${text === "Dashboard" ? "/" : "onboarding"}`}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? (
                      <img src="/item-icon.png" alt="" />
                    ) : (
                      <img src="/item-icon2.png" alt="" />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "white",
          padding: "10px 20px",
          borderBottom: "1px solid #e0e0e0",
        }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                style={{
                  color: "black",
                }}
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <>Menu</>
              </IconButton>
            )}
            <Image src="/logo-hiu.png" alt="logo" width={40} height={40} />
          </>
          <Avatar />
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
      {children}
    </Box>
  );
}
