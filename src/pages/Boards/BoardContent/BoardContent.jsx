import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
	DndContext,
	MouseSensor,
	TouchSensor,
	PointerSensor,
	useSensor,
	useSensors
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

function BoardContent({ board }) {
	const [orderedColumns, setOrderedColumns] = useState([])

	const mouseSensor = useSensor(MouseSensor, {
		activationConstraint: { distance: 10 }
	})
	const touchSensor = useSensor(TouchSensor, {
		activationConstraint: {
			delay: 250,
			tolerance: 500
		}
	})
	const pointerSensor = useSensor(PointerSensor, {
		activationConstraint: { distance: 10 }
	})

	const sensors = useSensors(mouseSensor, touchSensor, pointerSensor)

	useEffect(() => {
		setOrderedColumns(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
	}, [board])

	const handleDragEnd = (e) => {
		const { active, over } = e
		if (!over) return
		if (active.id !== over.id) {
			const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
			const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
			const newOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
			// update to DB
			// const newOrderedColumnIds = newOrderedColumns.map((c) => c._id)
			setOrderedColumns(newOrderedColumns)
		}
	}

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
			<DndContext onDragEnd={handleDragEnd} sensors={sensors}>
				<ListColumns columns={orderedColumns} />
			</DndContext>
		</Box>
	)
}

export default BoardContent
