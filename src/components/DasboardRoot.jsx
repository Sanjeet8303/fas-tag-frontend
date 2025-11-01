import React from 'react'

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

export default function F() {

  const viewportWidth = window.innerWidth;
  console.log("Viewport width:", viewportWidth);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };


  return (
    <>
      <div className="dashboard-container d-flex">
        <div className="dashboard-container" style={{ display: 'flex', height: '100vh' }}>
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
                <Dashboard />
              </div>
            </>
          ) : (
            <>
              {/* Sidebar always visible */}
              <Sidebar />

              {/* Dashboard */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
                <Dashboard />
              </div>
            </>
          )}
        </div>

      </div >

    </>
  )
}
