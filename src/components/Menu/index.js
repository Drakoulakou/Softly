import HamburgerMenu from '../HamburgerMenu';
import './styles.scss';

function Menu() {

    return (
        <nav className='nav-bar-menu'>
            <div className='right-menu'>
                <HamburgerMenu />
                <img className='favorite' src={process.env.PUBLIC_URL + '/images/heartIcon.svg'} />
            </div>
            <div>
                <h1 className='logo'>LOGO HERE</h1>
            </div>
            <div className='left-menu'>
                <img className='search' src={process.env.PUBLIC_URL + '/images/search.svg'} />
                <img className='shopping-bag' src={process.env.PUBLIC_URL + '/images/shopping-bag.svg'} />
            </div>
        </nav>
    )
}

export default Menu