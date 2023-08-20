import Card from "../components/Carousel/Card";
import Carroussel from "../components/Carousel/Carousel";
import NavigationBar from "../components/Navigation-bar/Navigation-bar";
import '../styles/home-style.css';
import image1 from '../assest/images/can1.png'
import image3 from '../assest/images/can2.png'
import image2 from '../assest/images/can3.png'
import apple from '../assest/images/APPLESS.png'
import passion from '../assest/images/PASSION.png'
import pear from '../assest/images/PEAR.png'
import naturalFriut from '../assest/images/fruits-placard-background-vector-round-shape-wallpaper-of-natural-fruit-icons-watermelon-grape-pineapple-apricot-mango-avocado-pear-apple-plum-2ECWDR0.jpg'
import cardImage from '../assest/images/set-of-fruit-carbonated-drinks-strawberry-pineapple-orange-pear-flat-illustration-on-a-white-background-vector.jpg';
import { animations,AnimateOnChange } from 'react-animation'
import { useEffect, useState } from "react";
import HomeListItem from "../components/HomeItem/HomeItem";
import ScrollAnimation from 'react-animate-on-scroll';
import HeroSection from "../components/HeroSection/HeroSection";

const HomeScreen = () =>{
    const heroArray =[{
        itemId:0,
        itemName:"Apple",
        ItemImage:image1,
        itemFriut:apple
    },{
        itemId:1,
        itemName:"Passion",
        ItemImage:image3,
        itemFriut:passion
    },{
        itemId:2,
        itemName:"Pear",
        ItemImage:image2,
        itemFriut:pear
    }]
    const [item,setItem] = useState(heroArray[0])

    return(
        <div className="main-container">
            <div className="navigetion-bar">
                <NavigationBar />
            </div>
            <HeroSection itemName={heroArray[0].itemName} itemImage={heroArray[0].itemImage} itemFriut={heroArray[0].itemFriut}/>
            
            <ScrollAnimation animateIn="fadeIn" duration='1.5s' id="body">
                <ScrollAnimation animateIn="backInDown" className="item-section">
                    <div className="item-left-section">
                        <div className="item-card">
                            <div className="card-header">
                                Fresh natural
                                <hr className="line"/>
                            </div>
                            <div className="card-body">
                                 <div className="card-description">
                                    Indulge in a symphony of nature's finest flavors at Fruity Zoda, your oasis of authenticity and taste. Our commitment goes beyond selling fruits – we're on a mission to redefine your relationship with nature's bounties.
                                </div>
                                <div className="card-title">🍇 Crisp as Dawn's First Light</div>
                                <div className="card-description">
                                Imagine sinking your teeth into fruits that were plucked at the very peak of ripeness. At Fruity Zoda, we believe that nature's clock knows best, and we let it guide us. Each fruit in our collection is a testament to the artistry of time and the mastery of nature.
                                </div>
                                
                                <div className="card-title">🌍 Global Gastronomic Journey</div>
                                <div className="card-description">
                                Embark on an exploration of taste as we traverse the globe to bring you an eclectic medley of fruits. From the sun-kissed groves of Spain to the lush orchards of Thailand, our fruits are ambassadors of their origins, enriched by their unique terroirs.
                                </div>
                                
                                <div className="card-title">🍐 Pureness Preserved</div>
                                <div className="card-description">
                                We understand that authenticity is your demand, and we honor that by keeping our fruits free from artificial additives. With Fruity Zoda, you're choosing unadulterated goodness that nourishes not only your body but your soul as well.
                                </div>
                                <div className="card-footer">
                                    <img className="card-image" src={cardImage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-right-section">
                    <Carroussel
                            cards={[image1,image2,image3]}
                            height="500px"
                            width="30%"
                            margin="0 auto"
                            offset={2}
                            showArrows={false}
                        />
                         {/* <img src={naturalFriut} className="right-down-banner"/> */}
                    </div>
                </ScrollAnimation>
            </ScrollAnimation>
            <section id="shopping-section">
                <ScrollAnimation animateIn="pulse" duration='1.5s' className="list-wrapper">
                    <div className="list">
                    <ScrollAnimation animateIn="bounce" duration='2s' className="list-item">
                        <div className="list-item-image-wrap">
                            <img src={image1} className="list-item-image"/>
                        </div>
                        <div className="list-item-description-wrapper red">
                            <div className="list-item-name">{heroArray[0].itemName}</div>
                            <div className="list-item-price">Rs 250.00</div>
                            <div className="list-item-description">
                            This Homemade Green Apple and Lime Soda is a much healthier option for many reasons. It's hydrating, naturally sweet, and made with nutritious, whole-food ingredients that offer immune-supporting and detoxifying properties.
                            </div>
                            <button className="list-item-button">Buy</button>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounce" duration='2s' className="list-item">
                        <div className="list-item-image-wrap">
                            <img src={image2} className="list-item-image"/>
                        </div>
                        <div className="list-item-description-wrapper purpul">
                            <div className="list-item-name">{heroArray[1].itemName}</div>
                            <div className="list-item-price">Rs 250.00</div>
                            <div className="list-item-description"> 
                                Passion fruit is rich in antioxidants, which are compounds that help neutralize harmful free radicals in the body. Antioxidants play a vital role in keeping the body's systems healthy.
                            </div>
                            <button className="list-item-button">Buy</button>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounce" duration='2s'  className="list-item">
                        <div className="list-item-image-wrap">
                            <img src={image3} className="list-item-image"/>
                        </div>
                        <div className="list-item-description-wrapper green">
                            <div className="list-item-name">{heroArray[2].itemName}</div>
                            <div className="list-item-price">Rs 250.00</div>
                            <div className="list-item-description"> 
                               It's a tasty way to aid digestive health plus it's packed with antioxidants and low in sodium. There's no added sugar, no preservatives and nothing artificial because we know that's important to you. Ready to drink once chilled.
                            </div>
                            <button className="list-item-button">Buy</button>
                        </div>
                    </ScrollAnimation>
                    </div>
                </ScrollAnimation>
            </section>
        </div>
    )
}

export default HomeScreen;