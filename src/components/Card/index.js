import './styles.scss';

function Card({ productImage, title, price, previousPrice, category }) {
    return (
        <div className='card'>

            <div className='image-card'>
                <div className='icons'>
                    <p className='new'>New</p>
                    <img className='favorite' src={process.env.PUBLIC_URL + '/heart.svg'} />
                </div>
                <div className='product-image' style={{ backgroundImage: `url(${productImage})` }} ></div>
            </div>

            <div className='details-product'>
                <p className='title-product'>{title}</p>
                <div className='prices'>
                    <p className='price'>{price}</p>
                    <p className='previous-price'>{previousPrice}</p>
                </div>
                <p className='category'>{category}</p>
            </div>

        </div>
    )

}

export default Card