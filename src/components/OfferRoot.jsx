import React from 'react'

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Sidebar from './Sidebar';


import "./Offers.css"
import Offers from './Offers';

export default function O() {

  const viewportWidth = window.innerWidth;
  console.log("Viewport width:", viewportWidth);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };


  return (
    <>


      {viewportWidth < 700 ? (
        <>

          {/* Hamburger Button */}
          <Button
            onClick={() => toggleDrawer(true)}
            style={{
              position: 'fixed',
              top: 10,
              left: 10,
              zIndex: 1200,
            }}
          >
            <i className="fa-solid fa-bars fa-2x"></i>
          </Button>

          {/* Drawer */}
          <Drawer
            anchor="left"
            open={open}
            onClose={() => toggleDrawer(false)}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar />
          </Drawer>

          {/* Dashboard */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', marginTop: '60px' }}>
            <Offers />
          </div>

        </>
      ) : (
        <>
          {/* Sidebar always visible */}
          <div style={{ width: "250px", flexShrink: 0 }}>
            <Sidebar />
          </div>

          {/* Dashboard */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
            <Offers />
          </div>
        </>
      )}




    </>
  )
}
