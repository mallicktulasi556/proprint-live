import "./Promotional.css";

import promobanner from "../images/promo-banner.jpg";

/* Marketing Collaterals */
import card from "../images/card.jpg";
import notepad from "../images/notepad.jpg";
import pen from "../images/pen.jpg";
import mousepad from "../images/mousepad.jpg";
import flyer from "../images/flyer.jpg";
import bulkflyer from "../images/bulkflyer.jpg";
import catalogue from "../images/catalogue.jpg";
import postcard from "../images/postcard.jpg";
import keychain from "../images/keychain.jpg";
import bag from "../images/bag.jpg";
import totebag from "../images/totebag.jpg";
import badge from "../images/badge.jpg";
import bannerimg from "../images/banner.jpg";
import poster from "../images/poster.jpg";
import folder from "../images/folder.jpg";
import bookmark from "../images/bookmark.jpg";
import pamphlet from "../images/pamphlet.jpg";
import brochure from "../images/brochure.jpg";

/* Wearable */
import cap from "../images/cap.jpg";
import tshirt from "../images/tshirt.jpg";
import jersey from "../images/jersey.jpg";
import hoodie from "../images/hoodie.jpg";

/* Drinkware */
import mug from "../images/mug.jpg";
import bottle from "../images/bottle.jpg";
import coaster from "../images/coaster.jpg";
import flask from "../images/flask.jpg";

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

function Promotional() {
const [showSearch, setShowSearch] = useState(false);
const marketing = [
{img:card,title:"Cheap Business Card"},
{img:notepad,title:"Notepad"},
{img:pen,title:"Pen"},
{img:mousepad,title:"Mouse Pad"},
{img:flyer,title:"Flyer"},
{img:bulkflyer,title:"Bulk Flyer"},
{img:catalogue,title:"Catalogue"},
{img:postcard,title:"Postcard"},
{img:keychain,title:"Keychain"},
{img:bag,title:"Bag"},
{img:totebag,title:"Tote Bag"},
{img:badge,title:"Badge"},
{img:bannerimg,title:"Banner"},
{img:poster,title:"Poster"},
{img:folder,title:"Presentation Folder"},
{img:bookmark,title:"Bookmark"},
{img:pamphlet,title:"Pamphlet"},
{img:brochure,title:"Brochure"},
];

const wearable=[
{img:cap,title:"Cap"},
{img:tshirt,title:"T-shirt"},
{img:jersey,title:"Jersey"},
{img:hoodie,title:"Jacket & Hoodies"}
]

const drinkware=[
{img:mug,title:"Mug"},
{img:bottle,title:"Sipper Bottle"},
{img:coaster,title:"Coaster"},
{img:flask,title:"Flasks"}
]

return (
    
<div className="promotion">

    
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
{/* HERO */}
<div className="promo-hero">
<img src={promobanner} alt="banner"/>
</div>

{/* MARKETING COLLATERALS */}
<h2 className="section-title">Marketing Collaterals</h2>

<div className="grid">
{marketing.map((item,index)=>(
<div className="card" key={index}>
<img src={item.img}/>
<div className="card-bottom">
<h3>{item.title}</h3>
<span className="arrow">→</span>
</div>
</div>
))}
</div>

{/* WEARABLE */}
<h2 className="section-title">Wearable & Apparel</h2>

<div className="grid">
{wearable.map((item,index)=>(
<div className="card" key={index}>
<img src={item.img}/>
<div className="card-bottom">
<h3>{item.title}</h3>
<span className="arrow">→</span>
</div>
</div>
))}
</div>

{/* DRINKWARE */}
<h2 className="section-title">Mug & Drinkware</h2>

<div className="grid">
{drinkware.map((item,index)=>(
<div className="card" key={index}>
<img src={item.img}/>
<div className="card-bottom">
<h3>{item.title}</h3>
<span className="arrow">→</span>
</div>
</div>
))}
</div>

{/* CONTENT */}
<div className="promo-content">

<h2>Promotional Materials For Businesses</h2>

<p>
Promotional Materials are customized printed products used to generate sales and brand building.
These marketing tools help businesses connect with customers and promote services effectively.
</p>

<h3>Office Essentials</h3>

<p>
Promotional note pads, water bottles for employees, personalized pens, ID cards and lanyards
help improve branding in your workplace.
</p>

<h3>Marketing Collaterals</h3>

<p>
Brochures, product catalogs, leaflets, stickers, bookmarks and posters are important tools for
sales and marketing teams.
</p>

<h3>Wearable Advertising Materials</h3>

<p>
Corporate uniforms, promotional caps, t-shirts and hoodies are engaging wearables used
to advertise brands indoors and outdoors.
</p>

<h3>Drinkware</h3>

<p>
Mugs, tumblers and bottles are long-term promotional gifts that remind customers about
your brand every day.
</p>

</div>

{/* FAQ */}

<h2 className="section-title">Frequently Asked Questions</h2>

<div className="faq">

<details>
<summary>What are promotional printing materials?</summary>
<p>Promotional printing materials are products used to promote a brand or business.</p>
</details>

<details>
<summary>What types of materials can be used?</summary>
<p>Paper, fabric, plastic, metal and ceramic materials are commonly used.</p>
</details>

<details>
<summary>Why use promotional printing materials?</summary>
<p>They help increase brand visibility and attract new customers.</p>
</details>

<details>
<summary>Can I order in small quantities?</summary>
<p>Yes many printing services allow small batch printing.</p>
</details>

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

);
}

export default Promotional;