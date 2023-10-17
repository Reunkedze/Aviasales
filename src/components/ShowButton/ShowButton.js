import classes from './ShowButton.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../actions'

function ShowButton({ showMoreTickets }) {
    return <button className={classes['show-button']} onClick={showMoreTickets}>Показать еще 5 билетов!</button>
}

export default connect(null, actions)(ShowButton)
