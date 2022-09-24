import './styles.scss';

function Categories({ image , subtitle }) {
    return (
        <div className='categories'>
            <div className='container'>
            <div className='image' style={{ backgroundImage: `url(${image})` }}></div>
            <p className='subtitle'>{subtitle}</p>
            </div>
        </div>
    )
}

export default Categories