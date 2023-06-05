import { Box, FormControl, Switch, TextField } from '@mui/material';
import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import * as THREE from 'three';

import './login.css';

function Chest(props: any) {

    const chestRef = useRef<THREE.Mesh>(null!);
    const [hovered, hover] = useState(false);
    useFrame((state, delta) => (chestRef.current.rotation.y += delta))

    return (
        <mesh
            {...props}
            ref={chestRef}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            {/* <boxGeometry args={[4, 2, 2]} /> */}
            <sphereGeometry args={[2, 64]} />
            <meshStandardMaterial roughness={4} metalness={3} color={hovered ? 'teal' : 'purple'} />
        </mesh>
    );
}

export default function Login(props: any) {
    // Fancy mode refers to the render of the three-js chest login, rather than the flat, normal login.
    const [fancyMode, setFancyMode] = useState<boolean>(false);

    useEffect(() => {
        //
    }, [fancyMode]);

    return (
        <Box className='login-container'>
            {!fancyMode ?
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
                    <div className="chest-mid">
                        <div className="chest-mid-square">
                            <div className="chest-mid-circle" />
                            <div className="chest-mid-rect" />
                        </div>
                    </div>
                    <div className="chest-bottom">
                        <FormControl className='input-field'>
                            <TextField />
                        </FormControl>

                        <FormControl className='input-field'>
                            <TextField />
                        </FormControl>

                        {/* <Switch checked={fancyMode} onChange={() => setFancyMode(!fancyMode)} /> */}
                    </div>
                </div>
                :
                <Box className='login-container-fancy'>
                    {/* <Canvas>
                        <ambientLight />
                        <pointLight position={[35, 35, 30]} />
                        <Chest position={[0, 0, 0]} />
                    </Canvas> */}
                    {/* <Switch checked={fancyMode} onChange={() => setFancyMode(!fancyMode)} /> */}
                </Box>
            }
        </Box>
    )
}