import image1 from '../../assest/images/can1.png'
import image3 from '../../assest/images/can2.png'
import image2 from '../../assest/images/can3.png'

import { animations,AnimateOnChange } from 'react-animation'
const HeroSection = (props) => {
    console.log(props)
    return (
        <section className={props.itemName == 'Apple' ?"hero-section red":props.itemName == 'Passion' ?"hero-section purpul":"hero-section green"}>
        <div className={props.itemName == 'Apple' ?"hero-wrapper red":props.itemName == 'Passion' ?"hero-wrapper purpul":"hero-wrapper green"}>
            <AnimateOnChange 
             animationIn="slideIn"
             animationOut="slideIn"
             durationOut={500}
             className="hero-item-name"
            >
                {props.itemName}
            </AnimateOnChange>
            
            <AnimateOnChange  
             animationOut="slideOut"
             durationOut={500}
             className="hero-item-fruit"
            >
              <img className="" src={props.itemFriut}/>
            </AnimateOnChange>
            <div className="hero-item-can-wrap">
            <AnimateOnChange 
             animationIn="popIn"
             durationOut={500}
             className="hero-item-can-wrap"
            >
               <img className="hero-item-can" src={props.itemName == 'Apple' ?image1:props.itemName == 'Passion' ?image2:image3} />
            </AnimateOnChange>
            </div>
        </div>
        </section>
    );
}
export default HeroSection;