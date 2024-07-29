import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import { Typography } from '@mui/material'

function ButtonCreate() {
	return (
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
				},
				padding: 1,
				marginLeft: 0.5,
				minWidth: 'fit-content'
			}}
		>
			<Typography sx={{ display: { xs: 'none', md: 'block' } }}>
				Create
			</Typography>
			<AddIcon fontSize="small" sx={{ display: { xs: 'block', md: 'none' } }} />
		</Button>
	)
}

export default ButtonCreate
