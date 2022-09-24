import './styles.scss';

function Frame({ image }) {
    return (
        <div className='frame'style={{ backgroundImage: `url(${image})` }}>
            <h1 className='title-frame'>ΑΡΩΜΑΤΙΚΑ ΧΩΡΟΥ</h1>
            <button className='button'>Ανακαλύψτε περισσότερα</button>
        </div>
    )
}
export default Frame
