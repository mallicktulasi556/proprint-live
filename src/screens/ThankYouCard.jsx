
import "./ThankYouCard.css";

import img1 from "../images/card11.jpg";
import img2 from "../images/card12.jpg";
import img3 from "../images/card13.jpg";


import { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import businessCard from "../images/business-card.jpg";
import mug from "../images/mug.jpg";
import notebook from "../images/notebook.jpg";
import banner from "../images/banner.jpg";
import standeeBanner from "../images/Standee Banner.jpg";
import wallBranding from "../images/Wall Branding.jpg";
import customStickers from "../images/Custom Stickers.jpg";
import Packagingbox from "../images/Packaging Box.jpg"
import corporateTrophy from "../images/corporatetrophy.jpg";
import customHoodie from "../images/Custom Hoodie.jpg";
import laminationService from "../images/Lamination Service.jpg";
import laserCrystal from "../images/Laser Engraved Crystal.jpg";
import printedTshirt from "../images/Printed T-shirt.jpg";
import customMug from "../images/Custom Mug.jpg";
import Fastprinting from "../images/Fast Printing Service.jpg"
import Neon from "../images/Neon Signage.jpg";
import Proprints from "../images/PROPRINTS.jpg";


export default function ThankYouCard() {

const [mainImage, setMainImage] = useState(img1);
const [cardType, setCardType] = useState("Flat");
const [size, setSize] = useState('6"x8"');
const [paper, setPaper] = useState("300 gsm Art Card");
const [side, setSide] = useState("Single Side");
const [finish, setFinish] = useState("Matt Finish");


const [showSearch, setShowSearch] = useState(false);

return (

<div classname="home">
       {/* ================= NAVBAR ================= */}
                  <nav className="navbar">
                  <Link to="/home">
         <img src={Proprints} alt="logo" className="logo" />
                 </Link>
                                      
            
                    <ul className="nav-links">
              
            
              {/* ================= STATIONERY ================= */}
              <li className="dropdown">
              <Link to="/stationery" className="nav-link">
            Stationery <span className="dropdown-arrow">▾</span>
          </Link>
              <div className="mega-menu">
            
                    {/* LEFT SIDE */}
                    <div className="mega-left">
            
                    <div className="column">
                 <h4>Business Card</h4>
                  <p>Cheap Business Card</p>
                  <p>Standard Business Card</p>
                  <p>Textured Business Card</p>
                  <p>Spot UV Business Card</p>
                  <p>QR Business Card</p>
                  <p>Custom Shape Business Card</p>
                  <p>Metal NFC Card</p>
                  <p>PVC NFC Card</p>
                </div>
            
                {/* INK & STAMP */}
                 <div className="column">
                  <h4>Ink & Stamp</h4>
                  <p>Pre-ink Stamp</p>
                  <p>Self-ink Stamp</p>
                  <p>Polymer Stamp</p>
                  <p>Accessories</p>
                </div>
            
                {/* OFFICE SUPPLIES */}
                <div className="column">
                  <h4>Office Supplies</h4>
                  <p>Letterhead</p>
                  <p>Envelope</p>
                  <p>Receipt Book</p>
                  <p>Bill Book</p>
                  <p>Cash Voucher</p>
                </div>
            
                {/* CARD & INVITATION */}
                <div className="column">
                  <h4>Card & Invitation</h4>
                  <p>Wedding Card</p>
                  <p>Engagement Card</p>
                  <p>Post Card</p>
                  <p>Greeting Card</p>
                  <p>Event Ticket</p>
                  <p>Business Invitation</p>
                  <p>Thank Card</p>
                  <p>Birthday Card</p>
                </div>
            
                {/* ID CARD & LANYARD */}
               <div className="column">
                  <h4>ID Card & Lanyard</h4>
                  <p>Plastic ID Card</p>
                  <p>Paper ID Card</p>
                  <p>Lanyard</p>
                  <p>Accessories</p>
                </div>
            
                {/* NOTEBOOK */}
              <div className="column">
                  <h4>Notebook</h4>
                  <p>Staple Notebook</p>
                  <p>Wire-o Notebook</p>
                  <p>Perfect Bound Notebook</p>
                  <p>Hard Bound Notebook</p>
                </div>
                </div>
             {/* RIGHT SIDE */}
                    <div className="mega-right">
                      <img src={businessCard} alt="business" />
            <img src={notebook} alt="notebook" />
                    </div>
              </div>
            </li>
              {/* ================= PROMOTIONAL ================= */}
             <li className="dropdown">
            
         <Link to="/promotional" className="nav-link">
            Promotional Materials <span className="dropdown-arrow">▾</span> </Link> 
              <div className="mega-menu">
              {/* LEFT SIDE */}
                    <div className="mega-left">
            
                      <div className="column">
                  <h4>Office Essentials</h4>
                  <p>Cheap Business Card</p>
                  <p>Notepad</p>
                  <p>Pen</p>
                  <p>Mouse Pad</p>
                </div>
            
                {/* DRINKWARE */}
                <div className="column">
                  <h4>Drinkware</h4>
                  <p>Mugs</p>
                  <p>Self-ink Stamp</p>
                  <p>Coaster</p>
                  <p>Flasks</p>
                </div>
            
                {/* MARKETING COLLATERALS */}
             <div className="column">
                  <h4>Marketing Collaterals</h4>
                  <p>Flyer</p>
                  <p>Brochure</p>
                  <p>Catalogue</p>
                  <p>Post Card</p>
                  <p>Banner</p>
                  <p>Promotional Poster</p>
                  <p>Presentation Folder</p>
                </div>
            
                {/* EVENT & TRADE SHOW ITEMS */}
               <div className="column">
                  <h4>Event & Trade Show Items</h4>
                  <p>Banner & Backdrop</p>
                  <p>Event Ticket</p>
                  <p>Event ID Card</p>
                  <p>Badge</p>
                  <p>Sticker</p>
                </div>
            
                {/* WEARABLE & APPAREL */}
                <div className="column">
                  <h4>Wearable & Apparel</h4>
                  <p>Cap</p>
                  <p>Tshirt</p>
                  <p>Jersey</p>
                  <p>Jacket & Hoodies</p>
                </div>
            
                {/* OTHERS */}
                <div className="column">
                  <h4>Others</h4>
                  <p>Keychains</p>
                  <p>Bags</p>
                  <p>Tote Bags</p>
                  <p>Bookmarks</p>
                </div>
                  </div>
                <div className="mega-right">
                      <img src={mug} alt="mug" />
                        <img src={banner} alt="banner" />
                    </div>
              </div>
            </li>
            
            {/* ================= SIGNS & MARKETING ================= */}
            <li className="dropdown">
               <Link to="/signs" className="nav-link"> 
            Signs & Marketing <span className="dropdown-arrow">▾</span> 
          </Link>
             <div className="mega-menu">
              {/* LEFT SIDE */}
                    <div className="mega-left">
            
                      <div className="column">
                  <h4>Outdoor Signs</h4>
                  <p>Vinyl</p>
                  <p>Banners</p>
                  <p>Flags</p>
                  <p>Canvas Rolls</p>
                </div>
            
                {/* BOARD */}
               <div className="column">
                  <h4>Board</h4>
                  <p>Acrylic Board</p>
                  <p>Lollipop Board</p>
                  <p>Adjustable Banner</p>
                  <p>Fabric Banner</p>
                  <p>LED Frame</p>
                  <p>Backlit Board</p>
                  <p>Frontlit Board</p>
                </div>
            
                {/* STANDEE */}
            <div className="column">
                  <h4>Standee</h4>
                  <p>Regular Standee</p>
                  <p>Luxury Standee</p>
                  <p>Table Top Standee</p>
                  <p>Chrome Metal Banner Stand</p>
                </div>
            
                {/* INTERACTIVE MARKETING */}
              <div className="column">
                  <h4>Interactive Marketing</h4>
                  <p>Tent Card</p>
                  <p>Rate Card</p>
                  <p>Danglers</p>
                  <p>Menu</p>
                  <p>Gift Voucher</p>
                </div>
            
                {/* NAME PLATE & FOAM BOARD */}
                <div className="column">
                  <h4>Name Plate & Foam Board</h4>
                  <p>Engraved Nameplate</p>
                  <p>Sunboard</p>
                  <p>Sunpack</p>
                  <p>Tabletop Signs</p>
                  <p>Magnetic Signs</p>
                  <p>Magnetic Name Badges</p>
                </div>
            
                {/* MARKETING COLLATERALS */}
                <div className="column">
                  <h4>Marketing Collaterals</h4>
                  <p>Flyer & Leaflet</p>
                  <p>Poster</p>
                  <p>Presentation Folder</p>
                  <p>Brochure</p>
                  <p>Booklets</p>
                  <p>Mouse Pad</p>
                </div>
                </div>
                <div className="mega-right">
              <img src={standeeBanner} alt="Standee" />
              <img src={wallBranding} alt="Wall Branding" />
            </div>
              </div>
            </li>
            {/* ================= BOX & PACKAGING ================= */}
            <li className="dropdown">
                <Link to="/BoxPackaging" className="nav-link"> 
          Box & Packaging<span className="dropdown-arrow">▾</span> 
          </Link>
              
             <div className="mega-menu">
              {/* LEFT SIDE */}
                    <div className="mega-left">
            
                      <div className="column">
               
                  <h4>Stickers & Labels</h4>
                  <p>Product Packaging Labels</p>
                  <p>Circle Labels</p>
                  <p>Waterproof Labels</p>
                  <p>Roll Labels</p>
                  <p>Sheet Stickers</p>
                  <p>Foil Stickers</p>
                  <p>Custom Shape Stickers</p>
                  <p>Spot UV Stickers</p>
                  <p>Clear Stickers</p>
                </div>
            
                {/* COTTON BAG */}
                <div className="column">
                  <h4>Cotton Bag</h4>
                  <p>Small Size Cotton Bag</p>
                  <p>Medium Size Cotton Bag</p>
                  <p>Large Size Cotton Bag</p>
                </div>
            
                {/* PAPER BAG */}
               <div className="column">
                  <h4>Paper Bag</h4>
                  <p>Retail Paper Bag</p>
                  <p>Restaurant Paper Bag</p>
                  <p>Eco-Friendly Paper Bag</p>
                  <p>White Paper Bag</p>
                </div>
            
                {/* PACKAGING SUPPLIES */}
              <div className="column">
                  <h4>Packaging Supplies</h4>
                  <p>Packaging Tape</p>
                  <p>Hand Tag</p>
                  <p>Luggage Tag</p>
                  <p>Custom Tissue Paper</p>
                </div>
            
                {/* BOXES */}
                <div className="column">
                  <h4>Boxes</h4>
                  <p>Product Box</p>
                  <p>Luxury Gift Box</p>
                  <p>Custom Box</p>
                  <p>Kraft Box</p>
                  <p>Rigid Box</p>
                </div>
            
                {/* OTHERS */}
              <div className="column">
                  <h4>Others</h4>
                  <p>Custom Paper Pouch</p>
                  <p>Wrapping Paper</p>
                </div>
                </div>
                <div className="mega-right">
              <img src={Packagingbox} alt="Packaging Box" />
              <img src={customStickers} alt="Custom Stickers" />
            </div>
              </div>
            </li>
              {/* ================= GIFT & AWARD ================= */}
            <li className="dropdown">
                    <Link to="/Gift" className="nav-link"> 
            Gift & Award <span className="dropdown-arrow">▾</span> 
          </Link>
              <div className="mega-menu">
              {/* LEFT SIDE */}
                    <div className="mega-left">
            
                      <div className="column">
                  <h4>Corporate Gifts</h4>
                  <p>Customized Pens</p>
                  <p>Desk Accessories</p>
                  <p>Exclusive Gifts</p>
                  <p>Custom Mug</p>
                  <p>Custom Keychains</p>
                  <p>Custom USB Drives</p>
                  <p>Table Calendar</p>
                </div>
            
                {/* ACADEMIC */}
                <div className="column">
                  <h4>Academic</h4>
                  <p>Certificates</p>
                  <p>Graduation Sash</p>
                  <p>Graduation Cap</p>
                  <p>Customized Pens</p>
                </div>
            
                {/* AWARDS & TROPHIES */}
             <div className="column">
                  <h4>Awards and Trophies</h4>
                  <p>Plaques (engraved)</p>
                  <p>Trophies (customized)</p>
                  <p>Medals</p>
                  <p>Employee of the Month Awards</p>
                  <p>Years of Service Awards</p>
                  <p>Sports Trophies</p>
                  <p>Academic Awards</p>
                </div>
            
                {/* EXCLUSIVE GIFT */}
              <div className="column">
                  <h4>Exclusive Gift</h4>
                  <p>Customize Gift Box</p>
                  <p>Engraved Glassware</p>
                  <p>Customize Gold Coin</p>
                </div>
            
                {/* PERSONALIZED GIFTS */}
               <div className="column">
                  <h4>Personalized Gifts</h4>
                  <p>Personalized T-shirts</p>
                  <p>Personalized Cap</p>
                  <p>Personalized Hoodie</p>
                  <p>Custom Tote Bags</p>
                  <p>Custom Phone Cases</p>
                  <p>Personalized Cushion</p>
                </div>
            
                {/* PARTY FAVORS */}
             <div className="column">
                  <h4>Party Favors</h4>
                  <p>Cake Toppers</p>
                  <p>Sash</p>
                  <p>Happy Birthday Banner</p>
                  <p>Personalized Balloon</p>
                  <p>Face Cutout</p>
                </div>
                </div>
            <div className="mega-right">
              <img src={corporateTrophy} alt="Trophies" />
              <img src={customMug} alt="Custom Mug" />
            </div>
              </div>
            </li>
              {/* ================= APPAREL ================= */}
            <li className="dropdown">
            <Link to="/Apparel" className="nav-link"> 
           Apparel <span className="dropdown-arrow">▾</span> 
          </Link>
              <div className="mega-menu">
              {/* LEFT SIDE */}
                    <div className="mega-left">
            
                      <div className="column">
                  <h4>Technique</h4>
                  <p>DTF Printing</p>
                  <p>Screen Printing</p>
                  <p>Vinyl Cut & Paste</p>
                  <p>Sublimation Printing</p>
                  <p>Embroidery</p>
                </div>
            
                {/* STYLE */}
                <div className="column">
                  <h4>Style</h4>
                  <p>Round Neck T-shirt</p>
                  <p>Polo Shirts</p>
                  <p>V-Neck Tshirt</p>
                  <p>Hoodies & Jacket</p>
                </div>
            
                {/* PERSONALIZED */}
                <div className="column">
                  <h4>Personalized</h4>
                  <p>T-shirts</p>
                  <p>Hoodies</p>
                  <p>Sweatshirts</p>
                  <p>Jersey</p>
                  <p>Cap</p>
                  <p>Apron</p>
                </div>
                </div>
               <div className="mega-right">
              <img src={printedTshirt} alt="Printed T-shirt" />
              <img src={customHoodie} alt="Custom Hoodie" />
            </div>
              </div>
            </li>
            
              {/* ================= NEW ARRIVALS ================= */}
            <li className="dropdown">
                         <Link to="/NewArrivals" className="nav-link"> 
         New Arrivals <span className="dropdown-arrow">▾</span> 
          </Link>
               
              <div className="mega-menu">
              {/* LEFT SIDE */}
                    <div className="mega-left">
            
                      <div className="column">
                  <h4>Always Trendy Products</h4>
                  <p>Neon Signage</p>
                  <p>Cushion</p>
                  <p>Mug</p>
                  <p>Photo Frame</p>
                  <p>Custom Wall Decals</p>
                  <p>Customize Clock</p>
                  <p>Caricature</p>
                  <p>3D Laser Engraved Crystal</p>
                </div>
                 </div>
                <div className="mega-right">
              <img src={Neon} alt="Neon Signage" />
              <img src={laserCrystal} alt="Laser Engraved Crystal" />
            </div>
             
               </div>
            </li>
            
            {/* ================= SERVICES WITHIN HOURS ================= */}
            <li className="dropdown">
             
                <Link to="/Services" className="nav-link"> 
          Services within hours <span className="dropdown-arrow">▾</span> 
          </Link>
              <div className="mega-menu">
              {/* LEFT SIDE */}
                    <div className="mega-left">
            
                      <div className="column">
                  <h4>Same Day Delivery</h4>
                  <p>Standard Business Card</p>
                  <p>Letterhead</p>
                  <p>ID Card</p>
                  <p>Business Invitation Card</p>
                  <p>Birthday Invitation</p>
                  <p>Thank You Card</p>
                  <p>Flyer & Leaflet</p>
                  <p>Bookmark</p>
                  <p>Cap</p>
                  <p>T-shirt</p>
                  <p>Sheet Sticker</p>
                  <p>Banner</p>
                  <p>Fabric Banner</p>
                  <p>Sunboard</p>
                  <p>Menu</p>
                  <p>Poster</p>
                </div>
            
                {/* LATE-NIGHT SERVICES */}
              <div className="column">
                  <h4>Late-Night Services</h4>
                  <p>Document</p>
                  <p>Paper ID Card</p>
                  <p>Lamination</p>
                  <p>Mug</p>
                  <p>School/College Project</p>
                  <p>Spiral Binding</p>
                  <p>Self Ink Stamp</p>
                </div>
                 </div>
               <div className="mega-right">
              <img src={Fastprinting} alt="Fast Printing Service" />
              <img src={laminationService} alt="Lamination Service" />
            </div>
             
               </div>
            </li>
             </ul> 
            
             <div className="nav-icons">
              <FaSearch className="nav-icon" onClick={() => setShowSearch(true)} />
              <FaUser className="nav-icon" />
              <FaShoppingCart className="nav-icon" />
            </div>
            </nav>
             {showSearch && (
                    <div className="search-overlay">
            
                      {/* CLOSE BUTTON */}
                      <div 
                        className="search-close"
                        onClick={() => setShowSearch(false)}
                      >
                        <FaTimes />
                      </div>
            
                      {/* SEARCH INPUT */}
                      <div className="search-container">
                        <input 
                          type="text" 
                          placeholder="Search..." 
                          autoFocus 
                        />
                      </div>
                
                    </div>
                  
                  )}
            <div></div>



<div className="product-container">

{/* LEFT IMAGES */}

<div className="product-images">

<img src={mainImage} className="main-img"/>

<div className="thumbs">

<img src={img1} onClick={()=>setMainImage(img1)} />
<img src={img2} onClick={()=>setMainImage(img2)} />
<img src={img3} onClick={()=>setMainImage(img3)} />

</div>

</div>


{/* RIGHT DETAILS */}

<div className="product-details">

<h1>Thank You Card</h1>

<h2 className="price">₹400.00</h2>

<p className="subtitle">
Show your appreciation and gratitude with a special message!
</p>
<div classname="feature">
<ul>
<li>Thank you cards paper stock 250 gsm coated matte/glossy finish</li>
<li>Digital printing front only and both side printing option</li>
<li>Flat and folding option available</li>
<li>You can customize with logos, photos and messages</li>
<li>Size A5 and postcard size (4"x6")</li>
</ul>
</div>
<p className="delivery">
If you order before 7 pm, you can get them on the same day!
</p>


{/* FILE UPLOAD */}

<h4>Upload File</h4>

<div className="upload">
<input type="file"/>
<p>Drag & Drop Files Here or Browse Files</p>
</div>


{/* CARD TYPE */}

<h4>THANK YOU CARD TYPE</h4>

<div className="card-type">

<div
className={cardType==="Flat" ? "active" : ""}
onClick={()=>setCardType("Flat")}
>
Flat Cards
</div>

<div
className={cardType==="Folded" ? "active" : ""}
onClick={()=>setCardType("Folded")}
>
Folded Cards
</div>

</div>


{/* SIZE */}

<label>Size</label>

<select value={size} onChange={(e)=>setSize(e.target.value)}>
<option>6"x8"</option>
<option>4"x6"</option>
<option>A5</option>
</select>


{/* PAPER */}

<h4>PAPER STOCK</h4>

<label>
<input
type="radio"
checked={paper==="300 gsm Art Card"}
onChange={()=>setPaper("300 gsm Art Card")}
/>
300 gsm Art Card
</label>


{/* PRINT SIDE */}

<label>Printed Side</label>

<select value={side} onChange={(e)=>setSide(e.target.value)}>
<option>Single Side</option>
<option>Both Side</option>
</select>


{/* FINISH */}

<label>Finishing</label>

<select value={finish} onChange={(e)=>setFinish(e.target.value)}>
<option>Matt Finish</option>
<option>Gloss Finish</option>
</select>


{/* TOTAL */}

<div className="total">

<h3>Total</h3>

<span>₹400.00</span>

</div>


<button className="cart-btn">Add to cart</button>

</div>


{/* DESCRIPTION */}

<div className="description">

<h2>Customised Thank Card Printing Perspective</h2>

<p>
Sending a personalized message to your client, brand building,
customer appreciation, seasonal greetings on any occasion
and multiple other reasons why businesses need a custom printed
thank you card.
</p>

<h3>Feature of Thank You Card Printing</h3>

<ul>
<li>Standard finished size thank-you card</li>
<li>Matte and glossy finish</li>
<li>Paper stock 250 gsm</li>
<li>Flat or folded thank you card printing</li>
</ul>

<h3>Online Thank You Card Printing Order Process</h3>

<ul>
<li>Go through product details</li>
<li>Upload ready design print files</li>
<li>Finish payment process</li>
<li>Wait for delivery</li>
</ul>

</div>
  {/* ================= FOOTER ================= */}
          <footer className="footer">
     
           <div className="footer-container">
     
             {/* LEFT SECTION */}
             <div className="footer-col about">
               <h2>
                 PRO PRINTS offers personalized, high-quality,
                 printed items to help you effectively communicate your
                 message to a wider audience
               </h2>
     
               <p><MdEmail /> suresh_shivanient@yahoo.com</p>
               <p><FaPhone /> +91 92112 53015</p>
               <p><FaLocationDot /> first floor, Mounika Towers, 2-32, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</p>
     
               <div className="map">
                 <iframe
                   src="https://www.google.com/maps?q=SR+Media+Madhapur+Hyderabad&output=embed"
                   width="100%"
                   height="200"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                 ></iframe>
               </div>
     
               <div className="social-icons">
                 <a href="#"><FaFacebookF /></a>
                 <a href="#"><FaInstagram /></a>
                 <a href="#"><FaYoutube /></a>
               </div>
             </div>
     
             {/* OUR COMPANY */}
             <div className="footer-col">
               <h3>Our Company</h3>
               <ul>
                 <li><Link to="/about">About us</Link></li>
                 <li><Link to="/blog">Our Blog</Link></li>
               </ul>
             </div>
     
             {/* SUPPORT */}
             <div className="footer-col">
               <h3>Support</h3>
               <ul>
                 <li><Link to="/home">My Account</Link></li>
                 <li><Link to="/help">Help Centre</Link></li>
                 <li><Link to="/Faqs">FAQs</Link></li>
               </ul>
             </div>
     
             {/* POLICIES */}
             <div className="footer-col">
               <h3>Our Policies</h3>
               <ul>
                 <li><Link to="/terms">Terms & Condition</Link></li>
                 <li><Link to="/privacy">Privacy Policy</Link></li>
                 <li><Link to="/refund">Refund & Return Policy</Link></li>
               </ul>
             </div>
     
           </div>
     
         </footer>
</div>
</div>

);
}