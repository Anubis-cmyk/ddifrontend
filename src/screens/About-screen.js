import Card from "../components/Carousel/Card";
import Carroussel from "../components/Carousel/Carousel";
import NavigationBar from "../components/Navigation-bar/Navigation-bar";
import '../styles/home-style.css';
import '../styles/about-style.css';
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

const AboutScreen = () =>{
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
    const [item,setItem] = useState(heroArray[2])

    return(
        <div className="main-container">
            <div className="navigetion-bar">
                <NavigationBar />
            </div>
            <section className="hero-section green">
            <div className="hero-wrapper green">
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
            <section id="about-section" className="about-section">
               <div className="about-card">
                    <ScrollAnimation animateIn="fadeIn" duration='2s' className="about-header">About-us</ScrollAnimation>
                    <ScrollAnimation animateIn="bounce" duration='2s'  className="card-top"></ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" duration='2s' className="about-us">
                    Welcome to Fruity Zoda, a realm where the richness of nature's bounty converges with a fervent commitment to preserving its intrinsic essence. Our odyssey commenced with a simple aspiration – to reintroduce people to the unadulterated bliss of fresh, succulent fruits. What germinated as a humble idea has flourished into a verdant garden of flavor, and we cordially invite you to embark on a narrative stroll through our evolution.

Within the heart of Fruity Zoda resides a collective of dreamers – a consortium of nature aficionados who shared a common vision: to proffer fruits as nature originally intended. With an eclectic array of backgrounds ranging from agricultural prowess to culinary expertise, our assembly amalgamates diverse proficiencies to engender an oasis where authenticity reigns supreme.

At the core of our ethos lies an unwavering devotion to the paramount principle of freshness. We steadfastly believe that the very soul of a fruit resonates at the instance of its harvest, and it is our solemn mission to ensure that each piece of fruit that graces our orchards encapsulates the pinnacle of nature's timing.
                    </ScrollAnimation>
                    <div className="card-bottom">
                    <ScrollAnimation animateIn="fadeInLeft" duration='2s' className="card-bottom-left">
                        <div className="location-pin"></div>
                        <div className="address">
                        <h4>address</h4>
                        Fruity Zoda,<br/>
                        WESTMINSTER ST,<br/>
                        PROVIDENCE RI 02903<br/>
                        </div>
                    </ScrollAnimation>
                    <div className="card-bottom-right">
                        <ScrollAnimation animateIn="fadeInUp" duration='2s' className="phone-wrap">
                            <div className="phone-icon"></div>
                            <div className="phone-number"> +00 123 123 123</div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" duration='2s' className="email-wrap">
                            <div className="email-icon"></div>
                            <div className="email-number">fruityzone.mail.com</div>
                        </ScrollAnimation>
                    </div>
                    </div>
               </div>
            </section>
           
        </div>
    )
}

export default AboutScreen;