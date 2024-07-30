import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
	trello: {
		appBarHeight: '3.625rem',
		boardBarHeight: '3.75rem'
	},
	colorSchemes: {
		light: {
			palette: {}
		},
		dark: {
			palette: {}
		}
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					borderWidth: '0.5px'
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontSize: '0.875rem'
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					fontSize: '0.875rem',
					'& fieldset': { borderWidth: '0.5px !important' },
					'&:hover fieldset': { borderWidth: '1px !important' },
					'&.Mui-focused fieldset': { borderWidth: '1px !important' }
				}
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
						backgroundColor: '#dcdde1'
					},
					'*::-webkit-scrollbar-thumb:hover': {
						backgroundColor: 'white'
					}
				}
			}
		}
	}
})

export default theme
