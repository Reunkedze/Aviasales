import classes from './Ways.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../actions'

function Ways({ way, changeWay }) {
    return (
        <div className={classes['ways']}>
            <input className={classes['checkbox']} type='radio' name='way' value='cheaper' id='cheaper' checked={way === 0} onChange={() => changeWay(0)} />
            <label htmlFor='cheaper'>Самый дешевый</label>
            <input className={classes['checkbox']} type='radio' name='way' value='faster' id='faster' checked={way === 1} onChange={() => changeWay(1)} />
            <label htmlFor='faster'>Самый быстрый</label>
            <input className={classes['checkbox']} type='radio' name='way' value='optimal' id='optimal' checked={way === 2} onChange={() => changeWay(2)} />
            <label htmlFor='optimal'>Оптимальный</label>
        </div>
    )
}

const mapStateToProps = (state) => ({ way: state.way })

export default connect(mapStateToProps, actions)(Ways)