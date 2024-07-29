import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

const theme = extendTheme({
	trello: {
		appBarHeight: '3rem',
		boardBarHeight: '3.625rem'
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
