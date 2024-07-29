import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Workspaces from './Workspaces'
import Recent from './Recent'
import Starred from './Starred'
import Templates from './Templates'

function MenuSet() {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box
			sx={{
				display: {
					xs: 'block',
					md: 'none'
				}
			}}
		>
			<IconButton
				id="basic-button-menuset"
				size="small"
				edge="start"
				aria-label="menu-list"
				sx={{ ml: 0.5, borderRadius: 1, padding: 0.75 }}
				onClick={handleClick}
				aria-controls={open ? 'basic-menu-menuset' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
			>
				<MenuIcon sx={{ color: 'primary.main' }} />
			</IconButton>
			<Menu
				id="basic-menu-menuset"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button-menuset'
				}}
			>
				<MenuItem>
					<Workspaces />
				</MenuItem>
				<MenuItem>
					<Recent />
				</MenuItem>
				<MenuItem>
					<Starred />
				</MenuItem>
				<MenuItem>
					<Templates />
				</MenuItem>
			</Menu>
		</Box>
	)
}

export default MenuSet
