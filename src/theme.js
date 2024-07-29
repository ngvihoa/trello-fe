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
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none'
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.main,
					fontSize: '0.875rem'
				})
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.main,
					fontSize: '0.875rem',
					'.MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.primary.light
					},
					'&:hover': {
						'.MuiOutlinedInput-notchedOutline': {
							borderColor: theme.palette.primary.main
						}
					},
					'& fieldset': {
						borderWidth: '1px !important'
					}
				})
			}
		},
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					'*::-webkit-scrollbar': {
						width: '0.5rem',
						height: '0.5rem'
					},
					'*::-webkit-scrollbar-thumb': {
						borderRadius: '0.5rem',
						backgroundColor: '#bdc3c7'
					},
					'*::-webkit-scrollbar-thumb:hover': {
						backgroundColor: '#00b894'
					}
				}
			}
		}
	}
})

export default theme
