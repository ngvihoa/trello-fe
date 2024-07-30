import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Profile from './Menus/Profile'
import AppLogo from './AppLogo'
import Menus from './Menus'
import ButtonCreate from './Menus/ButtonCreate'

function AppBar() {
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
				paddingX: 1
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center', minWidth: '12.5rem' }}>
				<IconButton sx={{ borderRadius: 2, padding: 0.75 }}>
					<AppsIcon sx={{ color: 'primary.main' }} />
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
					type="search"
					label="Search..."
					size="small"
					sx={{
						minWidth: '7.5rem'
					}}
				/>
				<ModeSelect />
				<IconButton sx={{ padding: 0.75 }}>
					<Tooltip title="Notifications">
						<Badge
							color="secondary"
							variant="dot"
							invisible={false}
							sx={{ cursor: 'pointer' }}
						>
							<NotificationsNoneIcon sx={{ color: 'primary.main' }} />
						</Badge>
					</Tooltip>
				</IconButton>
				<IconButton sx={{ padding: 0.75 }}>
					<Tooltip title="Notification">
						<HelpOutlineIcon sx={{ color: 'primary.main' }} />
					</Tooltip>
				</IconButton>
				<Profile />
			</Box>
		</Box>
	)
}

export default AppBar
