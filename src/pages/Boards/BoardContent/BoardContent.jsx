import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
	DndContext,
	MouseSensor,
	TouchSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragOverlay,
	defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
	COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
	CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

function BoardContent({ board }) {
	const [orderedColumns, setOrderedColumns] = useState([])
	// only 1 object is active when being dragged - column or card
	// const [activeDragItemId, setActiveDragItemId] = useState(null)
	const [activeDragItemType, setActiveDragItemType] = useState(null)
	const [activeDragItemData, setActiveDragItemData] = useState(null)

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

	// Trigger when start dragging
	const handleDragStart = (e) => {
		setActiveDragItemData(e?.active?.data?.current)
		setActiveDragItemType(
			e?.active?.data?.current?.columnId
				? ACTIVE_DRAG_ITEM_TYPE.CARD
				: ACTIVE_DRAG_ITEM_TYPE.COLUMN
		)
	}

	// Trigger after dropping item
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

		setActiveDragItemData(null)
		setActiveDragItemType(null)
	}

	// setup animation when dropping item
	const dropAnimation = {
		sideEffects: defaultDropAnimationSideEffects({
			styles: { active: { opacity: 0.5 } }
		})
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
			<DndContext
				onDragStart={handleDragStart}
				onDragEnd={handleDragEnd}
				sensors={sensors}
			>
				<ListColumns columns={orderedColumns} />
				<DragOverlay dropAnimation={dropAnimation}>
					{!activeDragItemType && null}
					{activeDragItemType &&
						activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
							<Column column={activeDragItemData} />
						)}
					{activeDragItemType &&
						activeDragItemType == ACTIVE_DRAG_ITEM_TYPE.CARD && (
							<Card card={activeDragItemData} />
						)}
				</DragOverlay>
			</DndContext>
		</Box>
	)
}

export default BoardContent
