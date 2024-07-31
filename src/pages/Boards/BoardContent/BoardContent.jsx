import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'

function BoardContent({ board }) {
	return (
		<Box
			sx={{
				backgroundColor: (theme) =>
					theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
				width: '100%',
				height: (theme) => theme.trello.boardContentHeight,
				p: 1.25
			}}
		>
			<ListColumns
				columns={mapOrder(board?.columns, board?.columnOrderIds, '_id')}
			/>
		</Box>
	)
}

export default BoardContent
