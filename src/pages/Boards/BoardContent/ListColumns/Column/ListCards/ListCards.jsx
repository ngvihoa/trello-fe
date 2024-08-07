import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards({ cards }) {
	return (
		<Box
			sx={{
				px: 0.5,
				mx: 0.5,
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				overflowY: 'auto',
				overflowX: 'hidden',
				maxHeight: (theme) =>
					`calc(
					${theme.trello.boardContentHeight} - 
					${theme.spacing(5)} - 
					${theme.trello.columnHeaderHeight} -
					${theme.trello.columnFooterHeight}
					)`,
				'&::-webkit-scrollbar': {
					width: '0.375rem',
					height: '0.375rem'
				},
				'&::-webkit-scrollbar-thumb': {
					borderRadius: '0.5rem',
					backgroundColor: '#ced0da'
				},
				'&::-webkit-scrollbar-thumb:hover': {
					backgroundColor: '#bfc2cf'
				}
			}}
		>
			{cards?.map((card) => (
				<Card key={card._id} card={card} />
			))}
		</Box>
	)
}

export default ListCards
