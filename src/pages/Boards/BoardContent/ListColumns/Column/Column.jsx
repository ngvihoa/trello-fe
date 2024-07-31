import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import { useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { IconButton } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './ListCards/ListCards'

function Column() {
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
				minWidth: '17rem',
				maxWidth: '17rem',
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
				borderRadius: 4,
				height: 'fit-content',
				maxHeight: (theme) =>
					`calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
			}}
		>
			{/* column header */}
			<Box
				sx={{
					height: (theme) => theme.trello.columnHeaderHeight,
					p: 1,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Typography
					variant="h6"
					sx={{ fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
				>
					Column Header
				</Typography>
				<Box>
					<Tooltip title="More options">
						<IconButton
							id="button-column"
							aria-controls={open ? 'menu-column' : undefined}
							aria-haspopup="true"
							aria-expanded={open ? 'true' : undefined}
							onClick={handleClick}
							sx={{
								borderRadius: 2,
								aspectRatio: '1/1',
								color: 'text.primary'
							}}
						>
							<MoreHorizIcon />
						</IconButton>
					</Tooltip>
					<Menu
						id="menu-column"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'button-column'
						}}
					>
						<MenuItem>
							<ListItemIcon>
								<AddCardIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Add new card</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<ContentCut fontSize="small" />
							</ListItemIcon>
							<ListItemText>Cut</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<ContentCopy fontSize="small" />
							</ListItemIcon>
							<ListItemText>Copy</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<ContentPaste fontSize="small" />
							</ListItemIcon>
							<ListItemText>Patse</ListItemText>
						</MenuItem>
						<Divider />
						<MenuItem>
							<ListItemIcon>
								<DeleteForeverIcon fontSize="small" />
							</ListItemIcon>
							<ListItemText>Remove this column</ListItemText>
						</MenuItem>
						<MenuItem>
							<ListItemIcon>
								<Cloud fontSize="small" />
							</ListItemIcon>
							<ListItemText>Archive this column</ListItemText>
						</MenuItem>
					</Menu>
				</Box>
			</Box>
			<ListCards />
			{/* Column footer */}
			<Box
				sx={{
					height: (theme) => theme.trello.columnFooterHeight,
					p: 1,
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<Button
					sx={{
						color: 'text.primary',
						flex: 1,
						borderRadius: 2,
						justifyContent: 'start',
						px: 1.5,
						height: '2.5rem'
					}}
					startIcon={<AddCardIcon />}
				>
					Add new card
				</Button>
				<Tooltip title="Drag to move">
					<IconButton sx={{ borderRadius: 2, height: '2.5rem' }}>
						<DragHandleIcon />
					</IconButton>
				</Tooltip>
			</Box>
		</Box>
	)
}

export default Column
