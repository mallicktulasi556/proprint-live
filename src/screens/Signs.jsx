import "./Signs.css";
import signsbanner from "../images/signsbanner.jpg";
import vinyl from "../images/vinyl.jpg";
import banner from "../images/banner.jpg";
import flag from "../images/flag.jpg";
import canvas from "../images/canvas.jpg";

import acrylic from "../images/acrylic.jpg";
import lollipop from "../images/lollipop.jpg";
import adjustable from "../images/adjustable.jpg";
import poster from "../images/poster.jpg";

import led from "../images/led.jpg";
import backlit from "../images/backlit.jpg";
import frontlit from "../images/frontlit.jpg";
import nameplate from "../images/nameplate.jpg";

import sunboard from "../images/sunboard.jpg";
import sunpack from "../images/sunpack.jpg";
import tabletop from "../images/tabletop.jpg";
import magnet from "../images/magnet.jpg";


import { Link } from "react-router-dom";
import Proprints from "../images/PROPRINTS.jpg";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import businessCard from "../images/business-card.jpg";
import notebook from "../images/notebook.jpg";
import mug from "../images/mug.jpg";
import bannerImg from "../images/banner.jpg";
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
import Neon from "..//images/Neon Signage.jpg"
import { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes
} from "react-icons/fa";
function Signs() {
const [showSearch, setShowSearch] = useState(false);

const products = [
{img: vinyl, title:"Vinyl"},
{img: banner, title:"Banner"},
{img: flag, title:"Flag"},
{img: canvas, title:"Canvas Roll"},

{img: acrylic, title:"Acrylic Board"},
{img: lollipop, title:"Lollipop Board"},
{img: adjustable, title:"Adjustable Banner"},
{img: poster, title:"Scientific Fabric Poster"},

{img: led, title:"LED Frame"},
{img: backlit, title:"Backlit Board"},
{img: frontlit, title:"Frontlit Board"},
{img: nameplate, title:"Engraved Nameplate"},

{img: sunboard, title:"Sunboard"},
{img: sunpack, title:"Sunpack"},
{img: tabletop, title:"Tabletop Signs"},
{img: magnet, title:"Fridge Magnetic Signs"},
];

return (

<div className="signs">
    
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
                <img src={bannerImg} alt="banner" />
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
      New Arrivals
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
      Services within hours
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
<img src={signsbanner} alt="signbanner"/>
</div>



{/* PRODUCT GRID */}

<section className="products">

<h2>Signs & Banner</h2>

<div className="product-grid">

{products.map((item,index)=>(
<div className="card" key={index}>

<img src={item.img} alt="" />

<div className="card-bottom">
<p>{item.title}</p>
<span>→</span>
</div>

</div>
))}

</div>

</section>



{/* CONTENT */}

<section className="content">

<h2>Sign & Marketing</h2>

<h3>Advertising Product (Indoor & Outdoor Signage)</h3>

<p>
Outdoor Advertising Materials are usually seen for a long distance,
these materials are physically water-proof, fade-proof printing and strong
enough to resist heat, water and dusty winds.
</p>

<p>
Flex Banner, Loly Pop Board, Engraved Name Plate,
Frontlit Board, Backlit Board and Sunpack Advertising Material
are the best outdoor promotional materials.
</p>


<h3>Standee (Roll Up Banner Stand)</h3>

<p>
Rollup banner stands for seminars, tabletop standees and adjustable
banner stands are available in multiple sizes and luxury looks.
</p>

<h3>Board For Street Shop</h3>

<p>
Get to know customers about your shop or business name
go board with lighting and without light board.
</p>

<h3>Interactive Marketing Products</h3>

<p>
Several marketing products leave a heavy impact
for a long time and are budget friendly.
</p>

</section>



{/* FAQ */}

<section className="faq">

<h2>Frequently Asked Questions</h2>

<details>
<summary>What are signs and marketing printing products?</summary>
<p>These are promotional materials like banners, boards and posters used for business advertising.</p>
</details>

<details>
<summary>Why should I use signage products?</summary>
<p>They increase brand visibility and attract customers.</p>
</details>

<details>
<summary>What types of businesses benefit?</summary>
<p>Retail stores, restaurants, malls, events and exhibitions.</p>
</details>

<details>
<summary>How to choose the right signage?</summary>
<p>Based on location, budget and audience.</p>
</details>

</section>


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

export default Signs;