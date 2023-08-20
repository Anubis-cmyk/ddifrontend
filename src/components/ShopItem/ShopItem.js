import ScrollAnimation from "react-animate-on-scroll";

const ShopItem =(props)=>{
    return(
        <ScrollAnimation key={props.itemName} animateIn="fadeInUp" duration='2s' className="list-item">
            <div className="list-item-image-wrap">
                <img src={props.itemImage} className="list-item-image"/>
            </div>
            <div className="list-item-description-wrapper red">
                <div className="list-item-name">{props.itemName}</div>
                <div className="list-item-price">{props.itemPrice}</div>
                <div className="list-item-description">
                    {props.itemDescription}
                </div>
                    <button className="list-item-button">Buy</button>
            </div>
        </ScrollAnimation> 
    )
}

export default ShopItem;