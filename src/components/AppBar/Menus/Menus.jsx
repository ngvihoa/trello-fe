import Workspaces from './Workspaces'
import Recent from './Recent'
import Starred from './Starred'
import Templates from './Templates'
import Box from '@mui/material/Box'
import MenuSet from './MenuSet'

function Menus() {
	return (
		<>
			<MenuSet />
			<Box
				sx={{
					display: {
						xs: 'none',
						md: 'flex'
					},
					alignItems: 'center',
					marginLeft: 0.5,
					overflowX: 'hidden'
				}}
			>
				<Workspaces />
				<Recent />
				<Starred />
				<Templates />
			</Box>
		</>
	)
}

export default Menus
