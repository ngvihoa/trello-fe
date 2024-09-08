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
	defaultDropAnimationSideEffects,
	closestCorners
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'
import { cloneDeep } from 'lodash'

const ACTIVE_DRAG_ITEM_TYPE = {
	COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
	CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

// Function find column which include card by cardId
const findColumnByCardId = (cardId, orderedColumns) => {
	return orderedColumns?.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
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

	// Trigger while dragging item
	const handleDragOver = (e) => {
		if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
			// Do nothing if item is column as the behavior is ok
			return
		}

		const { active, over } = e
		if (!active || !over) return

		// Destructuring all data needed from active and over
		const { id: activeCardId, data: { current: activeCardData } } = active
		const { id: overCardId } = over

		// Find 2 columns of active card and over card
		const activeColumn = findColumnByCardId(activeCardId, orderedColumns)
		const overColumn = findColumnByCardId(overCardId, orderedColumns)

		// Appear bugs in extracting column
		if (!activeColumn || !overColumn) return

		// Handle when dragging to different columns because this behavior is not handled
		// For dragging card in the same column, the behavior is ok, the rest is in handleDragEnd
		// --> If the column id of active and over are the same, do nothing
		if (activeColumn._id !== overColumn._id) {
			setOrderedColumns( prev => {
				const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)

				const isBelowOverItem = active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height

				const modifier = isBelowOverItem ? 1 : 0

				let newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

				const nextColumns = cloneDeep(prev)

				const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
				const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

				if (nextActiveColumn) {
					// filter active card by its id out of active column and order array
					nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeCardId)
					nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
				}

				if (nextOverColumn) {
					// filter active card by its id out of over column and order array, if it exist -> remove it
					nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeCardId)

					// add active card to over column by newCardIndex
					nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeCardData)
					nextOverColumn.cardOrderIds = nextOverColumn.cardOrderIds.toSpliced(newCardIndex, 0, activeCardId)
				}

				return nextColumns
			})
		}
	}

	// Trigger after dropping item
	const handleDragEnd = (e) => {
		if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
			// console.log("Dragging the card, do nothing temporarily!")
			return
		}
		const { active, over } = e
		if (!active || !over) return
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
				onDragOver={handleDragOver}
				onDragEnd={handleDragEnd}
				collisionDetection={closestCorners}
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
