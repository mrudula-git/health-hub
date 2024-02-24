import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const HoverableDrawerMenu = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const dummyData = [
    { id: 1, label: 'SubMenu 1', content: 'Content for SubMenu 1' },
    { id: 2, label: 'SubMenu 2', content: 'Content for SubMenu 2' },
    // Add more items as needed
  ];

  return (
    <>
      <div onClick={toggleDrawer}> {/* Use onClick for menu items */}
        Click me for submenu
      </div>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {dummyData.map((item) => (
            <ListItem key={item.id} button onClick={() => console.log(`Clicked: ${item.label}`)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HoverableDrawerMenu;
