import React from 'react'
import { useState } from 'react'
import { Home, Mail, Info, AccounTree } from '@mui/icons-material'
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const program = [
    { title: 'ホーム', href: '/', icon: Home },
    { title: '寿命計算機', href: '/lifespan', icon: Info },
    { title: '投稿機能', href:'/posts', icon: Mail},
]

export default function Header() {
    const [show, setShow] = useState(false)
    const handleDraw = () => setShow(!show)

    return (
        <>
            <header className="text-gray-600 body-font bg-purple-300">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <h2 className='text-2xl p-3 font-serif'>ORIGINAL APPLICATION</h2>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full mr-3" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <Button variant="contained" color='secondary' onClick={handleDraw}>SELECT</Button>
                    </a>
                </div>
            </header>
            
            <Drawer anchor='left' open={show}>
                <Box sx={{ height: '100vh' }} onClick={handleDraw}>
                    <List>
                        {program.map(obj => {
                            const Icon = obj.icon
                            return (
                                <ListItem key={obj.title}>
                                    <ListItemButton href={obj.href}>
                                        <ListItemIcon><Icon /></ListItemIcon>
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
