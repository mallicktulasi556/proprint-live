import "./About.css";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import aboutHero from "../images/printing-hero.jpg";
import printMachine from "../images/print-machine.jpg";
import designImage from "../images/design-img.jpg";
import businessCard from "../images/business-card.jpg";
import notebook from "../images/notebook.jpg";
import mug from "../images/mug.jpg";
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
import Neon from "..//images/Neon Signage.jpg";
import Proprints from "..//images/PROPRINTS.jpg";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import jindal from "../images/jindal.png";
import adda52 from "../images/adda52.png";
import airtel from "../images/airtel.png";
import uttam from "../images/uttam.png";
import masterfloors from "../images/masterfloors.png";
import karam from "../images/karam.png";

function About() {
    const [showSearch, setShowSearch] = useState(false);
  return (
    
    <div className="about-page">
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

      {/* HERO SECTION */}
      <section className="about-hero">
        <img src={aboutHero} alt="Printing" />
        <div className="hero-overlay">
          <h1>About Us</h1>
        </div>
      </section>

      {/* ================= WELCOME SECTION ================= */}

<section className="welcome">

<p className="welcome-top">WELCOME TO PRO PRINTS</p>

<h1>
We are a fast leading <br />
e-commerce printing store in India
</h1>

<p className="welcome-desc">
More than 25 years experience of running print shop and 15 years online
print on demand store from traditional to digital printing process.
</p>


<div className="welcome-features">

<div className="feature">
<h3>Top quality prints using the latest technology</h3>
</div>

<div className="feature">
<h3>Best Designers</h3>
</div>

<div className="feature">
<h3>Shipping Across India</h3>
</div>

<div className="feature">
<h3>Made-to-measure packaging</h3>
</div>

<div className="feature">
<h3>Reorder quickly and easily</h3>
</div>

<div className="feature">
<h3>Environmentally friendly production processes</h3>
</div>

</div>

</section>

  {/* ================= FAST SERVICES ================= */}

<section className="fast-services">

<div className="fast-left">

<p className="small-title">FAST AND QUALITY SERVICES</p>

<h2>
Let us show you <br />
how your products <br />
come to life
</h2>


<div className="accordion">

<div className="accordion-item active">
<h4>Find the perfect product</h4>
<p>
We offer over 100+ products. Choose the perfect product based on
your requirement.
</p>
</div>

<div className="accordion-item">
<h4>Make it print ready</h4>
</div>

<div className="accordion-item">
<h4>Ship it for you</h4>
</div>

</div>

</div>


<div className="fast-right">

<img src={printMachine} alt="printing machine" />

</div>

</section>

{/* ================= OUR STORY ================= */}

<section className="our-story">

<h2>Our Story</h2>

<div className="story-text">

<p>Hi, friends,</p>

<p>
We at PRO PRINTS (Suresh Kumar) are experts in graphic design,
printing, and print blogging.
</p>

<p>
I run an enterprise in the name of Shivani Enterprises (An Online
Customized Printing Company) for the last 30 years.
</p>

<p>
We believe in using the latest printing technology to produce
high-quality, fast printing and cost-effective services.
</p>

<p>
We are based in New Delhi (India) near Indira Gandhi International
Airport and provide printing services across India.
</p>

<h3>Our Motto</h3>

<p>
Our motto is to provide the best quality printing service with
cost-effective, eco-friendly, fast turnaround production.
</p>

<p>
We specialize in offset printing, digital printing, sublimation,
UV printing and many other modern printing technologies.
</p>

<p>
Our ultimate aim is to serve our customer’s needs while saving
their valuable time and money.
</p>

</div>

</section>
      {/* PRODUCT SECTION */}
      <section className="about-products">
        <div className="image">
          <img src={designImage} alt="Design" />
        </div>

        <div className="content">
          <p className="subtitle">FAST AND QUALITY SERVICE</p>
          <h2>Wide range of customized printing products</h2>

          <ul>
            <li><FaCheckCircle /> Custom Apparel Printing</li>
            <li><FaCheckCircle /> Customized Gift Items</li>
            <li><FaCheckCircle /> Coffee Mugs & Bottles</li>
            <li><FaCheckCircle /> Box and Packaging</li>
            <li><FaCheckCircle /> Boards and Sign Materials</li>
            <li><FaCheckCircle /> Business Promotional Materials</li>
            <li><FaCheckCircle /> Events & Marketing Materials</li>
          </ul>
        </div>
      </section>
     {/* ================= CUSTOMERS LOVE ================= */}

<section className="reviews">

<div className="review-left">
<h2>Customers Love</h2>
<p>Over 208 Reviews</p>

<button className="review-btn">View More</button>
</div>


<div className="review-cards">

<div className="review-card">
<div className="stars">★★★★★</div>

<p>
They are a life savior. Never imagined it can be so easy explaining
the entire requirement on WhatsApp and placing the order online.
</p>

<div className="review-user">
<img src={user1} alt="" />
<span>Harshita Rai</span>
</div>

</div>


<div className="review-card">
<div className="stars">★★★★☆</div>

<p>
Shivani enterprises saved me when I had to print documents urgently.
They answered my call at 1 am and helped me edit my document.
</p>

<div className="review-user">
<img src={user2} alt="" />
<span>Pamela Varughese</span>
</div>

</div>


<div className="review-card">
<div className="stars">★★★★★</div>

<p>
A saviour of a shop. Open 24x7 with on the spot printouts. The owner
was very helpful and coordinated with us.
</p>

<div className="review-user">
<img src={user3} alt="" />
<span>Vibhor Singh</span>
</div>

</div>

</div>

</section>
{/* ================= TRUSTED COMPANIES ================= */}

<section className="trusted">

<p className="trusted-title">
JOIN THE 5000+ COMPANIES TRUSTING PROPRINTS
</p>

<div className="trusted-logos">

<img src={jindal} alt="" />
<img src={adda52} alt="" />
<img src={airtel} alt="" />
<img src={uttam} alt="" />
<img src={masterfloors} alt="" />
<img src={karam} alt="" />

</div>

</section>
   {/* ================= BULK ORDER ================= */}

<section className="bulk">

<h2>
Ready to buy in bulk & save up to 20%?
</h2>

<p>WhatsApp / Email us for quotation</p>

<button className="bulk-btn">
Email Us →
</button>

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
               <p><FaPhone /> +91 062621 56969</p>
               <p><FaLocationDot />  first floor, Mounika Towers, 2-32, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081</p>
     
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
export default About;
