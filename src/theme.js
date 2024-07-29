import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

const theme = extendTheme({
	trello: {
		appBarHeight: '3.625rem',
		boardBarHeight: '3.75rem'
	},
	colorSchemes: {
		light: {
			palette: {
				primary: teal,
				secondary: deepOrange
			}
		},
		dark: {
			palette: {
				primary: cyan,
				secondary: orange
			}
		}
	}
})

export default theme
