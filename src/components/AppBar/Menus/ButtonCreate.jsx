import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'

function ButtonCreate() {
	return (
		<Button
			variant="contained"
			sx={{
				boxShadow: 'none',
				backgroundColor: 'rgba(255, 255, 255, 0.1)',
				backdropFilter: 'blur(10px)',
				color: 'white',
				'&:hover': {
					backgroundColor: 'rgba(255, 255, 255, 0.15)',
					boxShadow: 'inherit'
				},
				padding: 1,
				marginLeft: 0.5,
				minWidth: 'fit-content'
			}}
		>
			<Typography
				sx={{
					display: { xs: 'none', md: 'block' },
					fontSize: '0.875rem',
					marginRight: 0.5,
					fontWeight: 500
				}}
			>
				Create
			</Typography>
			<AddToPhotosIcon fontSize="small" />
		</Button>
	)
}

export default ButtonCreate
