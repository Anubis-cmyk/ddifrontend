import Card from "../components/Carousel/Card";
import Carroussel from "../components/Carousel/Carousel";
import NavigationBar from "../components/Navigation-bar/Navigation-bar";
import '../styles/home-style.css';
import '../styles/contact-style.css';
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
    const [item,setItem] = useState(heroArray[0])
    const [modalIsOpen, setIsOpen] = useState(false);
    const [contactData,setContactData] = useState({
        email:"",
        contact:"",
        message:""
    })
    const [error,setError] = useState({
        email:" ",
        contact:" ",
        message:" "
    })
    const [success,setSuccess] = useState(false)    
    const [fail , setFail] = useState(false)
    /**
     * Validate the contact form
     * Input on change event handler
     * @param {*} e 
     */
    const onChange = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;
        
        const validate = () =>{
            if(name === "email"){
                if(value === ""){
                    setError({...error,email:"Email is required"})
                }
                else if(!value.includes("@")){
                    setError({...error,email:"Email is invalid"})
                }
                else{
                    setError({...error,email:""})
                }
            }
            else if(name === "contact"){
                if(value === ""){
                    setError({...error,contact:"Contact is required"})
                }
                else if(value.length < 10){
                    setError({...error,contact:"Contact is invalid"})
                }
                else{
                    setError({...error,contact:""})
                }
            }
            else if(name === "message"){
                if(value === ""){
                    setError({...error,message:"Message is required"})
                }
                else{
                    setError({...error,message:""})
                }
            }
        }

        validate();
        setContactData({...contactData,[name]:value})
        console.log(contactData) 
    }

    /**
     * add message to the database
     * @param {*} e 
     */
    const onSubmit = (e) =>{
        e.preventDefault();
        const {email,contact,message} = contactData;
        if(email !== "" && contact !== "" && message !== ""){
           axios.post(`${APPURL}/message/addMessage`,contactData).then((res)=>{
               console.log(res.data)
            setIsOpen(true)
               setSuccess(true)
           }).catch((err)=>{
                console.log(err)
                setIsOpen(true)
                setFail(true)
              })
        }
    }


    return(
        <div className="main-container">
            <div className="navigetion-bar">
                <NavigationBar />
            </div>
            <HeroSection itemName={heroArray[0].itemName} itemImage={heroArray[0].itemImage} itemFriut={heroArray[0].itemFriut}/>
            <section id="contact-section" className="contact-section">
               <ScrollAnimation animateIn="flipInX" duration='2s' className="contactus-card">
                    <div className="contact-us-banner"></div>
                    <div className="contactus-section">
                        <div className="contactus-title">Contact us</div>
                            <form className="contactus-form"> 
                               <div className="input-wrap">
                                <label for ="email">What is your email ? </label>
                                 <input name="email" id="email" type="email" placeholder="Please enter your email.." onChange={(e)=>{onChange(e)}} className="input"/>
                                 <div className="error-message"> {error.email ? error.email : ""}</div>
                               </div>
                               <div className="input-wrap">
                                <label for ="contact">What is your contact number ? </label>
                                 <input name="contact" id="contact" type="tel" placeholder="Please enter your contact number.." onChange={(e)=>{onChange(e)}} className="input"/>
                                 <div className="error-message"> {error.contact ? error.contact : " "}</div>
                               </div>
                               <div className="input-wrap">
                                <label for ="message">Message </label>
                                <textarea placeholder="What is your message .." name="message" id="message" className="input" onChange={(e)=>{onChange(e)}}></textarea>
                                <div className="error-message"> {error.message ? error.message : " "}</div>
                               </div>
                               <button type="button" onClick={onSubmit} className=" form-button">Send</button>
                            </form>
                        <div className="contact-us-footer"></div>
                    </div>
               </ScrollAnimation>
            </section>

                {modalIsOpen && 
                    <div className="modal-container">
                        <div className="modal-header">
                            <div className="modal-title">{fail?"Somthing went wrong !":success?"Thank you for contacting us":""}</div>
                            <div className="modal-close" onClick={()=>{setIsOpen(false)}}>X</div>
                        </div>
                        <div className="modal-body">
                            <div className="modal-message">
                            {fail?"Unable to contact , try again !":success?"We will get back to you as soon as possible":""} 
                            </div>
                        </div>
                    </div>
                }

           
        </div>
    )
}

export default AboutScreen;