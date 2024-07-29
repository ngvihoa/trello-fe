import trelloLogo from '~/assets/trello.svg?react'
import trelloText from '~/assets/trello-text.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import Button from '@mui/material/Button'

function AppLogo() {
	return (
		<Button
			sx={{
				display: 'flex',
				alignItems: 'center',
				cursor: 'pointer',
				paddingX: 0.75,
				minWidth: '5.7rem'
			}}
		>
			<SvgIcon
				component={trelloLogo}
				inheritViewBox
				fontSize="small"
				sx={{ color: 'primary.main', width: 24 }}
			/>
			<SvgIcon
				component={trelloText}
				viewBox="-5 -15 232 94"
				sx={{
					color: 'primary.main',
					width: 'auto'
				}}
			/>
		</Button>
	)
}

export default AppLogo
