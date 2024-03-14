import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


export default function Test() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box className="bg-red-400"   sx={{ width: 560 }} role="presentation" onClick={toggleDrawer(false)}>
      Hello
    </Box>
  );

  return (
    <div>
     
      <Drawer className='' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}