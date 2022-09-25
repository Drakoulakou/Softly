import './styles.scss'

function SmallFrame({ image, heightImage, marginImage, marginTitle  }){
    const mainStyle = {
        backgroundImage: `url(${image})`,
        height: heightImage,
        margin: marginImage
    };
    const margin = {margin: marginTitle};


    return(
        <div className='small-frame' style={mainStyle}>
            <div className='main-title' style={{...margin}}>
                <p className='frame-title'>ΗΛΕΚΤΡΙΚΟΙ <br /> ΑΡΩΜΑΤΙΣΤΕΣ</p>
                <a className='link' href=''>Ανακαλύψτε περισσότερα</a>
            </div>
        </div>
    )
}

export default SmallFrame
