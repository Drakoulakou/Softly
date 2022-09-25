import './styles.scss'

function SmallFrame({ image }){
    return(
        <div className='small-frame' style={{ backgroundImage: `url(${image})` }}>
            <div className='main-title'>
                <p className='frame-title'>ΗΛΕΚΤΡΙΚΟΙ <br /> ΑΡΩΜΑΤΙΣΤΕΣ</p>
                <a className='link' href=''>Ανακαλύψτε περισσότερα</a>
            </div>
        </div>
    )
}

export default SmallFrame
