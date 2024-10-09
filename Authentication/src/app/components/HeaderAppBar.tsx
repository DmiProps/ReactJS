import * as React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

export default function HeaderAppBar(props) {
    return (
        <AppBar position='fixed'>
          <Toolbar sx={{ '& button': { m: 1 } }}>
            <Typography sx={{ flexGrow: 1 }} />
            <Button color='inherit'>Log In</Button>
            <Button color='inherit'>Sign Up</Button>
          </Toolbar>
        </AppBar>
    );
  }