import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Column from './Column/Column'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

function ListColumns({ columns }) {
	return (
		<Box
			sx={{
				backgroundColor: 'inherit',
				display: 'flex',
				gap: 1.5,
				width: '100%',
				height: '100%',
				overflowX: 'auto',
				overflowY: 'none'
			}}
		>
			{columns?.map((column) => (
				<Column key={column._id} column={column} />
			))}
			<Box
				sx={{
					minWidth: '12.5rem',
					maxWidth: '12.5rem',
					backgroundColor: '#ffffff3d',
					borderRadius: 2,
					height: 'fit-content'
				}}
			>
				<Button
					startIcon={<NoteAddIcon />}
					sx={{
						color: 'white',
						width: '100%',
						borderRadius: 2,
						display: 'flex',
						justifyContent: 'start',
						py: 1,
						pl: 2.5
					}}
				>
					Add new column
				</Button>
			</Box>
		</Box>
	)
}

export default ListColumns
