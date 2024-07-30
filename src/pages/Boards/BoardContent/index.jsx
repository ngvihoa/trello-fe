import Box from '@mui/material/Box'

function BoardContent() {
	return (
		<Box
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
				width: '100%',
				height: (theme) =>
					`calc(100dvh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
				display: 'flex'
			}}
		>
			Board content
		</Box>
	)
}

export default BoardContent
