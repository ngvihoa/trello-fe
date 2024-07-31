import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ChatIcon from '@mui/icons-material/Chat'
import AttachFileIcon from '@mui/icons-material/AttachFile'

function Card({ temporaryHeightMedia }) {
	if (temporaryHeightMedia) {
		return (
			<MuiCard
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
					<Typography>Card media</Typography>
				</CardContent>
			</MuiCard>
		)
	}
	return (
		<MuiCard
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
		</MuiCard>
	)
}

export default Card
