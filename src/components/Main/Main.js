import Filter from '../Filter'
import Tickets from '../Tickets'
import classes from './Main.module.scss'

function Main() {
    return (
        <main className={classes['main']}>
            <Filter />
            <Tickets />
        </main>
    )
}

export default Main
