import './styles.scss';

function Menu() {

    return (
        <nav className='nav-bar-menu'>
            <div className='right-menu'>
                <img className='burger-menu' src={process.env.PUBLIC_URL + '/Menu.svg'} />
                <img className='favorite' src={process.env.PUBLIC_URL + '/heart.svg'} />
            </div>
            <div>
                <h1 className='logo'>LOGO HERE</h1>
            </div>
            <div className='left-menu'>
                <img className='search' src={process.env.PUBLIC_URL + '/search.svg'} />
                <img className='shopping-bag' src={process.env.PUBLIC_URL + '/shopping-bag.svg'} />
            </div>
        </nav>
    )
}

export default Menu