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
		<FormControl size="small" sx={{ minWidth: '6.25rem' }}>
			<Select
				id="select-mode"
				value={mode}
				onChange={handleChange}
				sx={{
					color: 'white',
					'.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
					'&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: 'white'
					},
					'.MuiSvgIcon-root': {
						color: 'white'
					}
				}}
			>
				<MenuItem value="light">
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
						<LightModeIcon fontSize="small" /> Light
					</Box>
				</MenuItem>
				<MenuItem value="dark">
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
						<DarkModeIcon fontSize="small" /> Dark
					</Box>
				</MenuItem>
				<MenuItem value="system">
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
						<SettingsBrightnessIcon fontSize="small" /> System
					</Box>
				</MenuItem>
			</Select>
		</FormControl>
	)
}

export default ModeSelect
