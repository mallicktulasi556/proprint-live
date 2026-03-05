import { useState } from "react";
import {
  FaWhatsapp,
  FaStar,
  FaShippingFast,
  FaPrint,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useRef } from "react";
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
import Neon from "../images/Neon Signage.jpg";
import Proprints from "../images/PROPRINTS.jpg";
import letterhead from "../images/letterhead.jpg";
import stamp from "../images/stamp.jpg";
import billBook from "../images/billBook.jpg";
import idCard from "../images/idCard.jpg";
import cashVoucher from "../images/cashVoucher.jpg";
import thankYou from "../images/thankYou.jpg";
import envelope from "../images/envelope.jpg";
import posterPrinting from "../images/posterPrinting.jpg";
import deliveryImg from "../images/deliveryImg.jpg";
import authorImg from "../images/business-card.jpg";
import "./Home.css";
function Home() {
  const [showSearch, setShowSearch] = useState(false);
   const sliderRef = useRef(null);
const slideLeft = () => {
  sliderRef.current.scrollBy({
    left: -400,
    behavior: "smooth"
  });
};

const slideRight = () => {
  sliderRef.current.scrollBy({
    left: 400,
    behavior: "smooth"
  });
};
const stationery = [
  { name: "businessCard", img: businessCard },
  { name: "Letterhead", img: letterhead },
  { name: "Stamp", img: stamp },
  { name: "Bill Book", img: billBook },
  { name: "ID Card", img: idCard },
  { name: "Cash Voucher", img: cashVoucher },
  { name: "Envelope", img: envelope },
  { name: "Thank You Card", img: thankYou }
];
  return (
    <div className="home">
      
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
    Promotional Materials <span className="dropdown-arrow">▾</span>
  </Link>
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

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="hero-side left"></div>

        <div className="hero-center">
          <h4>Stationery</h4>
          <h1>Make Your First Impression Count.</h1>
          <p>
            Premium business cards, custom designed & printed for your brand.
          </p>
          <button>View All</button>
        </div>

        <div className="hero-side right"></div>
      </section>

      {/* ================= SHOP SECTION ================= */}
  <section className="ad-section">
  <h2>Shop These Customised Printing Services</h2>

  <div className="ad-slider">

    <button className="arrow left" onClick={() => slideLeft()}>
      ❮
    </button>

    <div className="ad-track" ref={sliderRef}>
      <img src={businessCard} alt="Business Card" />
      <img src={customMug} alt="Custom Mug" />
      <img src={printedTshirt} alt="Printed T-shirt" />
      <img src={standeeBanner} alt="Standee Banner" />
    </div>

    <button className="arrow right" onClick={() => slideRight()}>
      ❯
    </button>

  </div>
</section>

      {/* ================= STATIONERY GRID ================= */}
      <section className="services">
        <h2>Stationery for your brand</h2>
        <div className="grid">
        {stationery.map((item, index) => (
      <div className="card" key={index}>
        <img src={item.img} alt={item.name} className="card-image" />
        <h3>{item.name}</h3>
      </div>
    ))}
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="feature-box">
          <FaStar size={40} />
          <h3>High Quality</h3>
          <p>Advanced printing technology.</p>
        </div>

        <div className="feature-box">
          <FaPrint size={40} />
          <h3>Fastest Printing</h3>
          <p>Fast delivery & instant support.</p>
        </div>

        <div className="feature-box">
          <FaShippingFast size={40} />
          <h3>Shipping Worldwide</h3>
          <p>Free delivery above ₹3500.</p>
        </div>
      </section>

{/* ================= PRINT SERVICES ================= */}
<section className="print-services">

  {/* Poster Printing */}
  <div className="service-card">
    <img src={posterPrinting} alt="Poster Printing" />

    <div className="service-content">
      <h2>Scientific Poster Printing</h2>
      <button>Order Now</button>
    </div>
  </div>

  {/* Banner Printing */}
  <div className="service-card reverse">
    <img src={banner} alt="Banner Printing" />

    <div className="service-content">
      <h2>Banner Printing</h2>
      <button>Order Now</button>
    </div>
  </div>

</section>
{/* ================= SAME DAY DELIVERY ================= */}

<section className="same-day">
  <div className="same-day-text">
    <h2>Same Day Delivery</h2>

    <p>
      Last-minute printing for meetings, events, and any celebration
      products like documents, stamp, custom printed mugs, and more.
    </p>
  </div>

  <div className="same-day-img">
    <img src={deliveryImg} alt="delivery" />
  </div>
</section>
{/* ================= BLOG SECTION ================= */}

<section className="blog-section">

<h2>About Printing Technology</h2>

<div className="blog-grid">

<div className="blog-card">
<h3>What are the Graduation Dress?</h3>
<p>Graduation dresses are formal academic dress accessories worn on the...</p>
<a href="#">Read More</a>

<div className="blog-author">
<img src={authorImg} alt="" />
<div>
<p>suresh.shivani_enterprises</p>
<span>February 11, 2026</span>
</div>
</div>
</div>

<div className="blog-card">
<h3>Types of Fabric Label For Garments</h3>
<p>Labels and hang tags are garment decoration & information accessories...</p>
<a href="#">Read More</a>

<div className="blog-author">
<img src={authorImg} alt="" />
<div>
<p>suresh.shivani_enterprises</p>
<span>February 1, 2026</span>
</div>
</div>
</div>

<div className="blog-card">
<h3>Top 10 Table Top Display Solution For Events</h3>
<p>Shivani Enterprises is a customized printing company...</p>
<a href="#">Read More</a>

<div className="blog-author">
<img src={authorImg} alt="" />
<div>
<p>suresh.shivani_enterprises</p>
<span>November 3, 2025</span>
</div>
</div>
</div>

<div className="blog-card">
<h3>Where to Get Clear Sticker Printing in Delhi</h3>
<p>Shivani Enterprises manufactures more than 15 types of stickers...</p>
<a href="#">Read More</a>

<div className="blog-author">
<img src={authorImg} alt="" />
<div>
<p>shivani_enterprises</p>
<span>February 16, 2025</span>
</div>
</div>
</div>

</div>

<button className="load-more">Load More</button>

</section>

{/* ================= PRODUCT GALLERY ================= */}

<section className="gallery">

<h2>Product Gallery</h2>

<div className="gallery-slider">

<img src={businessCard} alt="" />
<img src={mug} alt="" />
<img src={banner} alt="" />
<img src={letterhead} alt="" />
<img src={stamp} alt="" />

</div>

</section>
{/* ================= PRINTING INFO SECTION ================= */}

<section className="printing-info">

<div className="info-container">

{/* LEFT SIDE */}
<div className="info-left">

<h2>Customized Printing Services</h2>

<p>
Are you an SME, Large-Scale Business, Business Professional, or Individual
looking for customized printing in India? Then you are at the right place.
Any type of custom product design & printing service such as
<b> Business Stationery Items, Business Promotional Materials,
Apparel Printing, Customised Box & Flexible Packaging Materials,
Printed Gifts Items, Stickers & Labels, Signage Print,
Advertising Materials for Events & Seminars</b> or urgent documents
printing in India.
</p>

<p>
With 27 years of experience in the customized printing industry from
<b> Design to Printing Services (Traditional Printing to Digital Printing)</b>.
We are equipped with the latest print-on-demand machines and advanced
printing technology.
</p>

<p>
Our overnight printing services, 1 hour store pickup, late night
printing services, same day printing and same day doorstep delivery
services in Delhi & NCR made us the <b>Best & Reliable Printing
Service Provider in Delhi.</b>
</p>

<p>
You can place <b>customized printing orders online</b> 24x7 hassle-free.
For queries call us at <b>+91 9211253015</b>.
</p>

</div>


{/* RIGHT SIDE */}
<div className="info-right">

<h2>Hassel Free Home Delivery to All Major Cities of India</h2>

<h3>Our Design & Print Services in a Minute</h3>

<p>
Personalize more than 300 custom-printed products online and receive
them at your doorstep across India.
</p>

<h3>Document & Stationery Printing</h3>

<p>
Official supply (customized stationery) for business communication such
as cash vouchers, challan books, invoice books, logo printed letterheads,
employee identity cards, posters and presentation materials.
</p>

<h3>Business Promotional Materials</h3>

<p>
Local business promotion requires cheap and effective advertising media
like flyers, stickers, posters and promotional products.
</p>

<h3>Sign and Marketing</h3>

<p>
Outdoor advertising media like flex banners, acrylic light boards,
roll-up stands, shop signage, and road signage for branding and
advertising.
</p>

<h3>Box and Packaging</h3>

<p>
Rigid and foldable boxes for electronics, FMCG products,
luxury product packaging and customized gift boxes.
</p>

<h3>Gift & Awards</h3>

<p>
Custom printed gift items for birthdays, corporate gifts,
employee awards, medals, trophies, certificates and academic attire.
</p>

<h3>Printing Services Within Hours in Delhi</h3>

<p>
Urgent printing services such as same-day delivery,
overnight printing service and instant document printing.
</p>

</div>

</div>

</section>


{/* ================= SERVICES WITHIN HOURS ================= */}

<section className="service-hours">

<h2>Services within hours</h2>

<p>
We are equipped with the latest printing technology and a lot of
products able to be delivered within a period of hours.
</p>

</section>
      {/* ================= FOOTER ================= */}
     <footer className="footer">

      <div className="footer-container">

        {/* LEFT SECTION */}
        <div className="footer-col about">
          <h2>
            Shivani Enterprises offers personalized, high-quality,
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

      <a
        href="https://wa.me/919211253015"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}

export default Home;