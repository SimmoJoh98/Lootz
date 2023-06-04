import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './login.css';

export default function Login(props: any){
    return(
        <Box className='login-container' >
            <div className='purple-rect'>
                <div className='chest-top'>
                    <div className='chest-top-vert' >
                        <div className='vert-gold' />
                        <div className='vert-gold' />
                        <div className='vert-gold' />
                        <div className='vert-gold' />
                    </div>
                    <div className='hor-gold' />
                </div>
            </div>
        </Box>
    )
}