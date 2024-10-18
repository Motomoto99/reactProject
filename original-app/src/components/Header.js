import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { Home, Mail, Info, AccounTree } from '@mui/icons-material'
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const program = [
    { title: 'ホーム', href: '/', icon: Home },
    { title: '寿命計算機', href: '/lifespan', icon: Info },
]

export default function Header() {
    const [show, setShow] = useState(false)
    const handleDraw = () => setShow(!show)

    return (
        <>
            <Button onClick={handleDraw}>ドロワー</Button>
            <Drawer anchor='left' open={show}>
                <Box sx={{ height: '100vh' }} onClick={handleDraw}>
                    <List>
                        {program.map(obj => {
                            const Icon = obj.icon
                            return(
                                <ListItem key={obj.title}>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon/></ListItemIcon>
                                        <ListItemText primary={obj.title} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    )
}
