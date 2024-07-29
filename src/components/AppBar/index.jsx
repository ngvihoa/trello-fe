import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import trelloLogo from '~/assets/trello.svg?react'
import trelloText from '~/assets/trello-text.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import IconButton from '@mui/material/IconButton'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import Profile from './Menus/Profile'

function AppBar() {
	return (
		<Box
			px={1}
			sx={{
				width: '100%',
				height: (theme) => theme.trello.appBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				{/* menu icon */}
				<IconButton sx={{ borderRadius: 2, padding: 0.75 }}>
					<AppsIcon sx={{ color: 'primary.main' }} />
				</IconButton>
				{/* logo */}
				<Box
					px={0.75}
					sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
				>
					<SvgIcon
						component={trelloLogo}
						inheritViewBox
						sx={{ color: 'primary.main' }}
					/>
					<SvgIcon
						component={trelloText}
						viewBox="-5 -5 232 80"
						sx={{
							color: 'primary.main',
							width: 'auto'
						}}
					/>
				</Box>
				<Box mx={0.5} sx={{ display: 'flex', alignItems: 'center' }}>
					{/* workspaces */}
					<Workspaces />
					{/* recent */}
					<Recent />
					{/* starred */}
					<Starred />
					{/* templates */}
					<Templates />
				</Box>
				{/* Create */}
				<Button
					variant="contained"
					sx={{
						boxShadow: 'none',
						backgroundColor: 'rgba(0, 0, 0, 0.05)',
						backdropFilter: 'blur(10px)',
						color: 'primary.main',
						'&:hover': {
							backgroundColor: 'rgba(0, 0, 0, 0.1)',
							boxShadow: 'inherit'
						}
					}}
				>
					Create
				</Button>
			</Box>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
				<TextField
					id="outlined-search"
					type="search"
					placeholder="Search"
					size="small"
				/>
				<ModeSelect />
				<IconButton sx={{ padding: 0.75 }}>
					<Tooltip title="Notification">
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
						<Badge
							color="secondary"
							variant="dot"
							invisible={false}
							sx={{ cursor: 'pointer' }}
						>
							<HelpOutlineIcon sx={{ color: 'primary.main' }} />
						</Badge>
					</Tooltip>
				</IconButton>
				<Profile />
			</Box>
		</Box>
	)
}

export default AppBar
