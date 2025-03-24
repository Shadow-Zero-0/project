import { InputBase, Stack, IconButton, Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Outlet } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import BackupIcon from "@mui/icons-material/Backup";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Searchcom from "./Searchcom";

const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  transition: " all 1s",
  "&:hover": {
    border: "1px solid #555",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  Width: "266px",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Header = () => {
  const drw = [
    {
      icon: (
        <HomeIcon
          sx={{
            fontSize: "30px",
          }}
        />
      ),
      name: "الصفحه الرئسيه",
      url: "/",
    },
    {
      icon: (
        <OfflineBoltIcon
          sx={{
            fontSize: "30px",
          }}
        />
      ),
      name: "sharts",
      url: "Sharts",
    },
    {
      icon: (
        <BackupIcon
          sx={{
            fontSize: "30px",
          }}
        />
      ),
      name: "الاشتراكات",
      url: "Subscriptions",
    },
    {
      icon: (
        <AccountCircleOutlinedIcon
          sx={{
            fontSize: "30px",
          }}
        />
      ),
      name: "انت",
      url: "Profile",
    },
  ];
  const mida = [
    {
      icon: <HomeIcon sx={{ color: "white" }} />,
      name: "الصفحه الرئسيه",
      url: "/",
    },
    {
      icon: <OfflineBoltIcon sx={{ color: "white" }} />,
      name: "sharts",
      url: "Sharts",
    },
    {
      icon: <BackupIcon sx={{ color: "white" }} />,
      name: "الاشتراكات",
      url: "Subscriptions",
    },
    {
      icon: <AccountCircleOutlinedIcon sx={{ color: "white" }} />,
      name: "انت",
      url: "Profile",
    },
  ];

  const nav = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{ width: 200, direction: "rtl" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {mida.map((item) => (
          <ListItem
            sx={{
              mt: "20px",
            }}
            onClick={() => {
              nav(item.url);
            }}
            key={item.name}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      sx={{
        flexDirection: "row",
      }}
    >
      <Stack sx={{ flexGrow: "1" }}>
        <Stack
          sx={{
            mt: 1,
            direction: "rtl",
            position: "fixed",
            right: "30px",
            left:"0",
            justifyContent: "space-around",
            flexDirection: "row",
            alignItems: "center",
            height: "50px",
          }}
        >
          <h1 style={{
                marginRight: '30px'
          }}>Shadow</h1>
          <Search
            className="search"
            sx={{
              border: "1px solid #999",
              borderRadius: "55px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "40px",
              width: "10%",
              color: "white",
            }}
          >
            <StyledInputBase
              sx={{
                width: "100%",
              }}
              placeholder="بحث"
              inputProps={{ "aria-label": "search" }}
            />
            <div>
              <Button
                component="nav"
                aria-label="Device settings"
                sx={{
                  p: "4px",
                  borderRadius: "55px 0   0 55px",
                  bgcolor: "hsla(0, 0%, 100%, .08)",
                  width: "65px",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <SearchIcon
                  sx={{
                    fontSize: "30px",
                    color: "black",
                  }}
                />
              </Button>
            </div>
          </Search>
          <div>
            <IconButton
              aria-label=""
              id="basic-button"
              aria-controls={open1 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick}
            >
              <SearchIcon
                sx={{
                  color: "white",
                }}
              />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open1}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                backgroundColor: "none",
              }}
            >
              <Searchcom />
            </Menu>
          </div>
          <Button
            variant="outlined"
            color="#E4EFE7"
            startIcon={
              <AccountCircleOutlinedIcon
                sx={{
                  marginLeft: "10px",
                }}
              />
            }
            sx={{
              borderRadius: "150px",
              opacity: "0.7",
            }}
          >
            تسجيل الدخول
          </Button>
        </Stack>
        <Box>
          <Outlet />
        </Box>
      </Stack>
      <div className="drawer" dir="rtl">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Box
            aria-label=""
            sx={{
              color: "white",
              mt: "19px",
              opacity: "0.9",
            }}
          >
            <DehazeIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {drw.map((item) => {
            return (
              <IconButton
                key={item.name}
                onClick={() => {
                  nav(item.url);
                }}
                sx={{
                  borderRadius: "10px",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "white",
                  mt: "15px",
                  opacity: "0.5",
                }}
              >
                {item.icon}
                {item.name}
              </IconButton>
            );
          })}
        </Box>
      </div>

      <div className="Shadow">
        <IconButton
          aria-label=""
          onClick={toggleDrawer(true)}
          sx={{
            color: "white",
            mt: "14px",
            opacity: "0.9",
          }}
        >
          <DehazeIcon
            sx={{
              fontSize: "30px",
            }}
          />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          {DrawerList}
        </Drawer>
      </div>
    </Stack>
  );
};

export default Header;
