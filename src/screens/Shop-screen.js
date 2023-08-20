import Card from "../components/Carousel/Card";
import Carroussel from "../components/Carousel/Carousel";
import NavigationBar from "../components/Navigation-bar/Navigation-bar";
import '../styles/home-style.css';
import '../styles/shop-style.css';
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
import axios from "axios";
import { APPURL } from "../constant/const"; 
import HeroSection from "../components/HeroSection/HeroSection";
import ShopItem from "../components/ShopItem/ShopItem";

const ShopScreen = () =>{
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
    const [item,setItem] = useState(heroArray[0])
    const [items,setItems] = useState([
        {
            "itemName": "",
            "itemPrice": "",
            "itemDescription": "",
            "itemImage": ""
        }
    ])

    /**
     * This function is used to set the item state
     */
    useEffect(()=>{
        const getItems = async () =>{
            axios.get(`${APPURL}/item/getItems`).then((res)=>{
                console.log(res.data)
                setItems(res.data)
            }).catch((err)=>{
                console.log(err)
            });
        }
        getItems();
    },[])

    return(
        <div className="main-container">
            <div className="navigetion-bar">
                <NavigationBar />
            </div>
           <HeroSection itemName={heroArray[1].itemName} itemImage={heroArray[1].itemImage} itemFriut={heroArray[1].itemFriut}/>
            <section id="shop-section" className="shop-section">
                <div className="shop-container">
                <div className="shop-title">
                        Shop us
                    </div>
                    <ScrollAnimation animateIn="fadeInUp" duration='1s' className="shop-list">
                    
                        {items.map((item,index)=>{
                            return(
                                <ShopItem itemName={item.itemName} itemPrice={item.itemPrice} itemDescription={item.itemDescription} itemImage={item.itemImage} key={index}/>   
                            )
                        }
                        )}

                </ScrollAnimation>
                </div>
               
            </section>
           
        </div>
    )
}

export default ShopScreen;