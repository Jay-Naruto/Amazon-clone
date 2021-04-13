import React from 'react'
import "../Home.css"
import Product from './Product'
/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div  className="home" >
        <img className="home__img"
        src="https://www.thefoodbank.org/wp-content/uploads/Amazon-Homepage-Banner-450x221.jpg"
        />
             {/* PRODUCTS ->ID,PRICE,IMG,RATINGS */}
             <div className="home__row" >
             <Product 
             id="23456789"
                title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver"
                price={70000}
                ratings={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                
            />
            <Product 
            id="13456789"
                title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                price={70000}
                ratings={5}
                image="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
                
            />
            
             </div>
             <div className="home__row" >
             <Product 
             id="12345678"
                title="TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server, Parental Control, QoS"
                price={70000}
                ratings={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51R2a9p-vNL._AC_SL1000_.jpg"
                
            />
            <Product 
            id="12345689"
                title="WD 2TB Elements Portable External Hard Drive HDD, USB 3.0, Compatible with PC, Mac, PS4 & Xbox - WDBU6Y0020BBK-WESN"
                price={70000}
                ratings={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71VB--jaeSL._AC_SL1500_.jpg"
                
            />
            <Product 
                id="123456789"
                title="Roku Premiere | HD/4K/HDR Streaming Media Player, Simple Remote and Premium HDMI Cable"
                price={70000}
                ratings={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81wHpn6wPLL._AC_SL1500_.jpg"
                
            />
             </div>
             <div className="home__row" >
             <Product 
             id="12456789"
                title="
                Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
                price={70000}
                ratings={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
                
            />
           
             </div>
            
    
    </div>
   )

 }

export default Home