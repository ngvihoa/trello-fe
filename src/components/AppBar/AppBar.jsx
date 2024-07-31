import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Profile from './Menus/Profile'
import AppLogo from './AppLogo/AppLogo'
import Menus from './Menus/Menus'
import ButtonCreate from './Menus/ButtonCreate'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

function AppBar() {
	const [searchValue, setSearchValue] = useState('')
	return (
		<Box
			sx={{
				width: '100%',
				height: (theme) => theme.trello.appBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 2,
				overflowX: 'auto',
				paddingX: 1,
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', minWidth: '12.5rem' }}>
				<IconButton sx={{ borderRadius: 2, padding: 0.75 }}>
					<AppsIcon sx={{ color: 'white' }} />
				</IconButton>
				<AppLogo />
				<Menus />
				<ButtonCreate />
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 0.75
				}}
			>
				<TextField
					id="outlined-search"
					type="text"
					label="Search"
					size="small"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon sx={{ color: 'white' }} />
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<CloseIcon
									fontSize="small"
									onClick={() => {
										setSearchValue('')
									}}
									sx={{
										color: searchValue ? 'white' : 'transparent',
										cursor: 'pointer'
									}}
								/>
							</InputAdornment>
						)
					}}
					sx={{
						minWidth: '7.5rem',
						maxWidth: '10.625rem',
						color: 'white',
						'& label': {
							color: 'white'
						},
						'& input': {
							color: 'white'
						},
						'& label.Mui-focused': {
							color: 'white'
						},
						'& .MuiOutlinedInput-root': {
							'& fieldset': { borderColor: 'white' },
							'&:hover fieldset': { borderColor: 'white' },
							'&.Mui-focused fieldset': { borderColor: 'white' }
						}
					}}
				/>
				<ModeSelect />
				<IconButton sx={{ padding: 0.75 }}>
					<Tooltip title="Notifications">
						<Badge
							color="warning"
							variant="dot"
							invisible={false}
							sx={{ cursor: 'pointer' }}
						>
							<NotificationsNoneIcon sx={{ color: 'white' }} />
						</Badge>
					</Tooltip>
				</IconButton>
				<IconButton sx={{ padding: 0.75 }}>
					<Tooltip title="Notification">
						<HelpOutlineIcon sx={{ color: 'white' }} />
					</Tooltip>
				</IconButton>
				<Profile />
			</Box>
		</Box>
	)
}

export default AppBar
