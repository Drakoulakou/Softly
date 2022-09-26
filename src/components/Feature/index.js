import './styles.scss'

function Feature({ icon, text }) {
    return (
        <div className='feature'>
            <img className='icon-feature' src={icon}/>
            <div className='text-feature'>{text}</div>
        </div>
    )
}

export default Feature