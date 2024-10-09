'use client'

import * as React from 'react'
import { Box, Stack, TextField, InputAdornment, Typography, Button, Divider, Link, Grid } from '@mui/material'
import { SensorOccupied, AccountCircle, Lock } from '@mui/icons-material'
import { grey } from '@mui/material/colors'

export default function Page() {
    return (
        <Box
            component={Stack}
            alignItems='center'
            bgcolor='grey.200'
            sx={{ height: '100vh' }}>
                
                <Box sx={{ m: 4, marginTop: 12 }}>
                    <SensorOccupied sx={{ fontSize: 96, color: grey[600]}} />
                </Box>
                <Box
                    component={Stack}
                    alignItems='center'
                    width='480px'
                    bgcolor='white'
                    sx={{
                        border: '1px solid lightGrey',
                        borderRadius: 2,
                    }}>
                        <Box component={Stack} alignItems='center' sx={{ p: 4, width: '100%' }}>
                            <Typography sx={{ m: 1, fontSize: 24, fontWeight: 'light', color: grey[600] }}>Log in to your account</Typography>
                            <TextField
                                label='Email address *'
                                fullWidth
                                sx={{ m: 3 }}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    },
                                }} />
                            <TextField
                                label='Password *'
                                fullWidth
                                sx={{ m: 3 }}
                                slotProps={{
                                    input: {
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                    },
                                }} />
                            <Button variant='contained' fullWidth size='large' sx={{ m: 2 }}>Log In</Button>

                        </Box>

                        <Divider orientation="horizontal" flexItem />

                        <Box display='flex' bgcolor='grey.100' justifyContent='center' sx={{ width: '100%', borderBottomLeftRadius: 8, borderBottomRightRadius: 8, '& a': { m: 3 } }}>
                            <Link href='/'>Are you a new user?</Link>
                            <Link href='#'>Forgot your password?</Link>
                        </Box>
                    
                </Box>

        </Box>
    )
}
