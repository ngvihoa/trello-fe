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
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ChatIcon from '@mui/icons-material/Chat'
import AttachFileIcon from '@mui/icons-material/AttachFile'

const COLUMN_HEADER_HEIGHT = '3.125rem'
const COLUMN_FOOTER_HEIGHT = '3.5rem'

function BoardContent() {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => setAnchorEl(event.currentTarget)

	const handleClose = () => setAnchorEl(null)

	return (
		<Box
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
				width: '100%',
				height: (theme) => theme.trello.boardContentHeight,
				p: 1.25
			}}
		>
			<Box
				sx={{
					backgroundColor: 'inherit',
					display: 'flex',
					gap: 1.5,
					width: '100%',
					height: '100%',
					overflowX: 'auto',
					overflowY: 'none'
				}}
			>
				{/* column 01*/}
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
							height: COLUMN_HEADER_HEIGHT,
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
					{/* list card */}
					<Box
						sx={{
							px: 0.5,
							mx: 0.5,
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
							overflowY: 'auto',
							overflowX: 'hidden',
							maxHeight: (theme) =>
								`calc(
						${theme.trello.boardContentHeight} - 
						${theme.spacing(5)} - 
						${COLUMN_HEADER_HEIGHT} -
						${COLUMN_FOOTER_HEIGHT}
						)`,
							'&::-webkit-scrollbar': {
								width: '0.375rem',
								height: '0.375rem'
							},
							'&::-webkit-scrollbar-thumb': {
								borderRadius: '0.5rem',
								backgroundColor: '#ced0da'
							},
							'&::-webkit-scrollbar-thumb:hover': {
								backgroundColor: '#bfc2cf'
							}
						}}
					>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardMedia
								component="img"
								alt="green iguana"
								height="140"
								image="https://media.istockphoto.com/id/1227023176/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-tr%E1%BA%BB-ch%C3%A8o-thuy%E1%BB%81n-kayak-qua-h%E1%BB%93-n%C3%BAi-l%C3%BAc-b%C3%ACnh-minh.jpg?s=1024x1024&w=is&k=20&c=cPMpJWYlb0byDNdbHxzzKpQd01U--VTQrfpoeAiWkYc="
							/>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>Card media</Typography>
							</CardContent>
							<CardActions sx={{ p: '0 4px 8px 4px' }}>
								<Button size="small" startIcon={<GroupIcon />}>
									20
								</Button>
								<Button size="small" startIcon={<ChatIcon />}>
									5
								</Button>
								<Button size="small" startIcon={<AttachFileIcon />}>
									15
								</Button>
							</CardActions>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
					</Box>
					{/* Column footer */}
					<Box
						sx={{
							height: COLUMN_FOOTER_HEIGHT,
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

				{/* column 02*/}
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
							height: COLUMN_HEADER_HEIGHT,
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
					{/* list card */}
					<Box
						sx={{
							px: 0.5,
							mx: 0.5,
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
							overflowY: 'auto',
							overflowX: 'hidden',
							maxHeight: (theme) =>
								`calc(
						${theme.trello.boardContentHeight} - 
						${theme.spacing(5)} - 
						${COLUMN_HEADER_HEIGHT} -
						${COLUMN_FOOTER_HEIGHT}
						)`,
							'&::-webkit-scrollbar': {
								width: '0.375rem',
								height: '0.375rem'
							},
							'&::-webkit-scrollbar-thumb': {
								borderRadius: '0.5rem',
								backgroundColor: '#ced0da'
							},
							'&::-webkit-scrollbar-thumb:hover': {
								backgroundColor: '#bfc2cf'
							}
						}}
					>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardMedia
								component="img"
								alt="green iguana"
								height="140"
								image="https://media.istockphoto.com/id/1227023176/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-tr%E1%BA%BB-ch%C3%A8o-thuy%E1%BB%81n-kayak-qua-h%E1%BB%93-n%C3%BAi-l%C3%BAc-b%C3%ACnh-minh.jpg?s=1024x1024&w=is&k=20&c=cPMpJWYlb0byDNdbHxzzKpQd01U--VTQrfpoeAiWkYc="
							/>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>Card media</Typography>
							</CardContent>
							<CardActions sx={{ p: '0 4px 8px 4px' }}>
								<Button size="small" startIcon={<GroupIcon />}>
									20
								</Button>
								<Button size="small" startIcon={<ChatIcon />}>
									5
								</Button>
								<Button size="small" startIcon={<AttachFileIcon />}>
									15
								</Button>
							</CardActions>
						</Card>

						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
						<Card
							sx={{
								borderRadius: 2,
								cursor: 'pointer',
								boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
								overflow: 'unset'
							}}
						>
							<CardContent
								sx={{
									p: 1.5,
									'&:last-child': {
										p: 1.5
									}
								}}
							>
								<Typography>NeviHoa</Typography>
							</CardContent>
						</Card>
					</Box>
					{/* Column footer */}
					<Box
						sx={{
							height: COLUMN_FOOTER_HEIGHT,
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
			</Box>
		</Box>
	)
}

export default BoardContent
