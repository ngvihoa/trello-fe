import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useColorScheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

function ModeSelect() {
	const { mode, setMode } = useColorScheme()

	const handleChange = (event) => {
		setMode(event.target.value)
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
			<Select id="select-mode" value={mode} onChange={handleChange}>
				<MenuItem value="light">
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<LightModeIcon fontSize="small" /> Light
					</Box>
				</MenuItem>
				<MenuItem value="dark">
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<DarkModeIcon fontSize="small" /> Dark
					</Box>
				</MenuItem>
				<MenuItem value="system">
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
						<SettingsBrightnessIcon fontSize="small" /> System
					</Box>
				</MenuItem>
			</Select>
		</FormControl>
	)
}

function App() {
	return (
		<>
			<ModeSelect />
			<hr />
			<Typography variant="h1" color="secondary">
				Nevi Hoa
			</Typography>
			<br />
			<Button variant="text">Hello world</Button>
			<Button variant="contained">Hello world</Button>
			<Button variant="outlined">Hello world</Button>
		</>
	)
}

export default App
