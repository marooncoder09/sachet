import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  Typography,
} from '@material-ui/core';
import { Button } from '@mui/material';
// import {
//   AccountCircle,
//   Explore,
//   Create,
//   Bookmark,
//   Person,
//   Settings,
//   ExitToApp,
// } from '@material-ui/icons';

function App() {

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Drawer variant="permanent" anchor="left">
        <div style={{ padding: '16px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              backgroundColor: '#f0f0f0',
              fontSize: '24px',
              color: '#777',
              marginBottom: '16px',
            }}
          >
            <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              F&AI
            </div>
            <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/FAI_logo.png"
                alt="FAI Logo"
                style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }}
              />
            </div>
          </div>
          <div>
            <ListItem button component="a" href="/explore-bots">
              <ListItemIcon>
                {/* <Explore /> */}
              </ListItemIcon>
              <ListItemText  primary="Explore Bots"/>
            </ListItem>
            <ListItem button component="a" href="/create-bot">
              <ListItemIcon>
                {/* <Create /> */}
              </ListItemIcon>
              <ListItemText primary="Create Bot" />
             
            </ListItem>
          </div>
        </div>
        <Divider />
        <List>
          <ListItem button component="a"  href="/chat/23084328094">
            <ListItemIcon>
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/3/30/Midjourney_Emblem_—_June.png" />
            </ListItemIcon>
            <ListItemText primary="MidJourney" secondary="/imagine prompt" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar src="https://static.vecteezy.com/system/resources/previews/021/059/825/original/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg" />
            </ListItemIcon>
            <ListItemText primary="ChatGPT" secondary="Top 5 ideas for ed-Tech videos" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar src="https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1675531888/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/anthropic-logo_fb47aaa7-9725-42fb-9aeb-889c99cdccf0_r4xcuu.png" />
            </ListItemIcon>
            <ListItemText primary="Claude" secondary="Give YouTube recommendation" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar src="https://img.freepik.com/premium-vector/cute-smiley-robot-illustration-vector-icon-mascotflat-cartoon-design-style_461200-205.jpg" />
            </ListItemIcon>
            <ListItemText primary="Custom Bot" secondary="Newsletter Headlines recommend" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              {/* <Bookmark /> */}
            </ListItemIcon>
            <ListItemText primary="Your Bots" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* <Person /> */}
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* <Settings /> */}
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* <AccountCircle /> */}
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              {/* <ExitToApp /> */}
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default App;
