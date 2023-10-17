import classes from './Header.module.scss'
import logo from './../../img/Logo.png'

function Header() {
    return (
        <header className={classes['header']}>
            <div className={classes['header_logo-container']}>
                <img src={logo} alt='Logo' />
                <div className={classes['header_non-draggable']} />
            </div>
        </header>
    )
}

export default Header