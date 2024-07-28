import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { pink } from '@mui/material/colors'
import HomeIcon from '@mui/icons-material/Home'

function App() {
	return (
		<>
			Hoho
			<Button variant="text">Hello world</Button>
			<Button variant="contained">Hello world</Button>
			<Button variant="outlined">Hello world</Button>
			<Stack direction="row" spacing={3}>
				<HomeIcon />
				<HomeIcon color="primary" />
				<HomeIcon color="secondary" />
				<HomeIcon color="success" />
				<HomeIcon color="action" />
				<HomeIcon color="disabled" />
				<HomeIcon sx={{ color: pink[500] }} />
			</Stack>
		</>
	)
}

export default App
