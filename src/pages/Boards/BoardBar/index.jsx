import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Chip from '@mui/material/Chip'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import AvatarImg1 from '~/assets/avatar1.jpg'
import AvatarImg2 from '~/assets/avatar2.jpg'
import AvatarImg3 from '~/assets/avatar3.jpg'
import AvatarImg4 from '~/assets/avatar4.jpg'
import AvatarImg5 from '~/assets/avatar5.jpg'
import AvatarImg6 from '~/assets/avatar6.jpg'
import AvatarImg7 from '~/assets/avatar7.jpg'
import AvatarImg8 from '~/assets/avatar8.jpg'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const chipStyle = {
	color: 'white',
	backgroundColor: 'transparent',
	border: 'none',
	paddingX: 0.5,
	borderRadius: 1,
	'.MuiSvgIcon-root': {
		color: 'white',
		'.MuiChip-label': {
			fontSize: '0.875rem'
		}
	},
	'&:hover': {
		backgroundColor: 'primary.50',
		boxShadow: 'none'
	}
}

const avatarGroupStyle = {
	'& .MuiAvatar-root': {
		width: 34,
		height: 34,
		fontSize: 'small'
	}
}

function BoardBar() {
	return (
		<Box
			sx={{
				width: '100%',
				height: (theme) => theme.trello.boardBarHeight,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: 2,
				overflowX: 'auto',
				borderBottom: '1px solid white',
				paddingX: 1,
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					minWidth: 'fit-content'
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
					<Chip
						clickable
						sx={chipStyle}
						icon={<DashboardIcon />}
						label="Nevi Hoa Fullstack"
					/>
					<Chip
						clickable
						sx={chipStyle}
						icon={<VpnLockIcon />}
						label="Public/Private Workspace"
					/>
					<Chip
						clickable
						sx={chipStyle}
						icon={<AddToDriveIcon />}
						label="Add to Drive"
					/>
					<Chip
						clickable
						sx={chipStyle}
						icon={<AutoAwesomeIcon />}
						label="Automation"
					/>
					<Chip
						clickable
						sx={chipStyle}
						icon={<FilterListIcon />}
						label="Filters"
					/>
				</Box>
			</Box>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 0.75
				}}
			>
				<AvatarGroup max={6} sx={avatarGroupStyle}>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg1} />
					</Tooltip>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg2} />
					</Tooltip>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg3} />
					</Tooltip>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg4} />
					</Tooltip>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg5} />
					</Tooltip>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg6} />
					</Tooltip>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg7} />
					</Tooltip>
					<Tooltip title="Nevi Hoa">
						<Avatar alt="Remy Sharp" src={AvatarImg8} />
					</Tooltip>
				</AvatarGroup>
				<Button
					variant="outlined"
					sx={{
						boxShadow: 'none',
						backdropFilter: 'blur(10px)',
						color: 'white',
						marginLeft: 0.5,
						minWidth: 'fit-content',
						borderColor: 'white',
						'&:hover': {
							borderColor: 'white'
						}
					}}
					startIcon={<PersonAddIcon fontSize="small" />}
				>
					Share
				</Button>
			</Box>
		</Box>
	)
}

export default BoardBar
