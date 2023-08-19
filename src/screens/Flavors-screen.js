import Card from "../components/Carousel/Card";
import Carroussel from "../components/Carousel/Carousel";
import NavigationBar from "../components/Navigation-bar/Navigation-bar";
import '../styles/home-style.css';
import '../styles/flavors-style.css';
import image1 from '../assest/images/can1.png'
import image3 from '../assest/images/can2.png'
import image2 from '../assest/images/can3.png'
import apple from '../assest/images/APPLESS.png'
import passion from '../assest/images/PASSION.png'
import appleFriut from '../assest/images/7-2-apple-fruit-png.png'
import pasionFriut from '../assest/images/png-transparent-purple-fruit-juice-passion-fruit-tropical-fruit-fruit-tree-passion-fruit-natural-foods-food-tropical-fruit.png'
import pearFriut from '../assest/images/pearpng.parspng.com-9-300x300.png'
import pear from '../assest/images/PEAR.png'
import naturalFriut from '../assest/images/fruits-placard-background-vector-round-shape-wallpaper-of-natural-fruit-icons-watermelon-grape-pineapple-apricot-mango-avocado-pear-apple-plum-2ECWDR0.jpg'
import cardImage from '../assest/images/set-of-fruit-carbonated-drinks-strawberry-pineapple-orange-pear-flat-illustration-on-a-white-background-vector.jpg';
import { animations,AnimateOnChange } from 'react-animation'
import { useEffect, useState } from "react";
import ScrollAnimation from 'react-animate-on-scroll';

const FlavorScreen = () =>{
    const heroArray =[{
        itemId:0,
        itemName:"Apple",
        ItemImage:image1,
        itemFriut:apple
    },{
        itemId:1,
        itemName:"Passion",
        ItemImage:image2,
        itemFriut:passion
    },{
        itemId:2,
        itemName:"Pear",
        ItemImage:image3,
        itemFriut:pear
    }]
    const [item,setItem] = useState(heroArray[1])

    return(
        <div className="main-container">
            <div className="navigetion-bar">
                <NavigationBar />
            </div>
            <section className="hero-section purpul">
            <div className="hero-wrapper purpul">
                <AnimateOnChange 
                 animationIn="slideIn"
                 animationOut="slideIn"
                 durationOut={500}
                 className="hero-item-name"
                >
                    {item.itemName}
                </AnimateOnChange>
                
                <AnimateOnChange  
                 animationOut="slideOut"
                 durationOut={500}
                 className="hero-item-fruit"
                >
                  <img className="" src={item.itemFriut}/>
                </AnimateOnChange>
                <div className="hero-item-can-wrap">
                <AnimateOnChange 
                 animationIn="popIn"
                 durationOut={500}
                 className="hero-item-can-wrap"
                >
                   <img className="hero-item-can" src={item.ItemImage} />
                </AnimateOnChange>
                </div>
            </div>
            </section>
            <section id="flavor-section">
                <ScrollAnimation animateIn="wobble" duration='2s' className="flaover-card-wrapper">
                    <div className="flavor-card">
                    <h2 className="flavor-header">Flavors</h2>
                        <div className="card-item">
                            <ScrollAnimation animateIn="fadeInLeft" duration='2s' className="card-item-left">
                                <img src={appleFriut} className="card-item-friut"/>
                                <div className="card-item-name-red ">{heroArray[0].itemName}</div>
                                <div className="card-item-description-red ">The apple flavor in Manzanita Sol Apple Soda tastes like carbonated apple juice, but not as apple-tasting as drinks like Appletiser which is made of 100% apple juice. Manzanita Sol does not contain caffeine and has about the same amount of sugar and caffeine as other popular</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" duration='2s' className="card-item-right">
                                <img src={image1} className="cart-item-product"/>
                            </ScrollAnimation>
                        </div>
                        <div className="card-item">
                            <ScrollAnimation animateIn="fadeInLeft" duration='2s' className="card-item-left">
                                <img src={passion} className="card-item-friut"/>
                                <div className="card-item-name-purple">{heroArray[1].itemName}</div>
                                <div className="card-item-description-purple">The apple flavor in Manzanita Sol Apple Soda tastes like carbonated apple juice, but not as apple-tasting as drinks like Appletiser which is made of 100% apple juice. Manzanita Sol does not contain caffeine and has about the same amount of sugar and caffeine as other popular</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" duration='2s' className="card-item-right">
                                <img src={image2} className="cart-item-product"/>
                            </ScrollAnimation>
                        </div> 
                        <div className="card-item">
                            <ScrollAnimation animateIn="fadeInLeft" duration='2s' className="card-item-left">
                                <img src={pear}className="card-item-friut"  />
                                <div className="card-item-name-green">{heroArray[2].itemName}</div>
                                <div className="card-item-description-green">The apple flavor in Manzanita Sol Apple Soda tastes like carbonated apple juice, but not as apple-tasting as drinks like Appletiser which is made of 100% apple juice. Manzanita Sol does not contain caffeine and has about the same amount of sugar and caffeine as other popular</div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" duration='2s' className="card-item-right">
                                <img src={image3}  className="cart-item-product"/>
                            </ScrollAnimation>
                        </div>
                    </div>
                </ScrollAnimation>
            </section>
           
        </div>
    )
}

export default FlavorScreen;