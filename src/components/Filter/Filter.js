import classes from './Filter.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../actions'

function Filter({ filters, filterOnChange }) {
    return (
        <section className={classes['main_filter']}>
            <fieldset className={classes['main_fieldset']}>
                <legend>Количество пересадок</legend>

                <div>
                    <input type="checkbox" id="all" name="scales" checked={filters[0]} onChange={() => filterOnChange(0)} />
                    <label htmlFor="all"><span className={classes['checkbox']} />Все</label>
                </div>

                <div>
                    <input type="checkbox" id="one" name="horns" checked={filters[1]} onChange={() => filterOnChange(1)} />
                    <label htmlFor="one"><span className={classes['checkbox']} />1 пересадка</label>
                </div>

                <div>
                    <input type="checkbox" id="two" name="scales" checked={filters[2]} onChange={() => filterOnChange(2)} />
                    <label htmlFor="two"><span className={classes['checkbox']} />2 пересадки</label>
                </div>

                <div>
                    <input type="checkbox" id="three" name="horns" checked={filters[3]} onChange={() => filterOnChange(3)} />
                    <label htmlFor="three"><span className={classes['checkbox']} />3 пересадки</label>
                </div>

                <div>
                    <input type="checkbox" id="four" name="horns" checked={filters[4]} onChange={() => filterOnChange(4)} />
                    <label htmlFor="four"><span className={classes['checkbox']} />4 пересадки</label>
                </div>
            </fieldset>
        </section>
    )
}

const mapStateToProps = (state) => ({ filters: state.filters })

export default connect(mapStateToProps, actions)(Filter)
