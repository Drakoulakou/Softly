import './styles.scss'

function Brands({ brandLogo }) {
    return (
        <div className='brand'>
            <div className='logo'> <img src={brandLogo}/></div>
        </div>
    )
}

export default Brands