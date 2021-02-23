import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

function Header() {
    return <Toolbar style={{ backgroundColor: 'rgb(23, 105, 170)' }}>
        <Typography style={{ color: '#ffffff', fontSize: '20px' }}>Todo app </Typography>
    </Toolbar>
}

export default Header
