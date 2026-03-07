
import "./BillBook.css";

import img1 from "../images/bill1.jpg";
import img2 from "../images/bill2.jpg";
import img3 from "../images/bill3.jpg";
import img4 from "../images/bill4.jpg";


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

export default function BillBook() {

  const [mainImage, setMainImage] = useState(img1);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");
  const [paper, setPaper] = useState("");
  const [pad, setPad] = useState("");
  const [binding, setBinding] = useState("");
  const [tab, setTab] = useState("description");

const [showSearch, setShowSearch] = useState(false);

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
        <div className="bill-container">
      {/* PRODUCT SECTION */}

      <div className="bill-product">

        {/* LEFT IMAGES */}

        <div className="bill-images">

          <img src={mainImage} className="main-img" alt="" />

          <div className="thumbs">
            <img src={img1} onClick={() => setMainImage(img1)} />
            <img src={img2} onClick={() => setMainImage(img2)} />
            <img src={img3} onClick={() => setMainImage(img3)} />
            <img src={img4} onClick={() => setMainImage(img4)} />
          </div>

        </div>


        {/* RIGHT DETAILS */}

        <div className="bill-details">

          <h1>Custom Printing Bill Book/Invoice</h1>

          <h2 className="price">₹947.00 – ₹11,957.00</h2>
        <div class="product-details">
          <ul>
            <li>Choose a bill book size from 5.5"x8.5", 8.5"x11" and 7"x9"</li>
            <li>Available in regular & NCR both paper</li>
            <li>Min. bill book starts from 5 books</li>
            <li>Kachhi Book & pakking binding</li>
            <li>Each book have 50/100 bill set</li>
          </ul>
        </div>
          {/* SIZE */}

          <h3>Size (in)</h3>
          <div className="option">
            {["8.5x11", "5.5x8.5", "7x8.5"].map((s) => (
              <button
                className={size === s ? "active" : ""}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* QTY */}

          <h3>Qty</h3>
          <div className="option">
            {[5, 10, 15, 20, 30].map((q) => (
              <button
                className={qty === q ? "active" : ""}
                onClick={() => setQty(q)}
              >
                {q}
              </button>
            ))}
          </div>

          {/* PAPER */}

          <h3>Paper Type</h3>
          <div className="option">
            {["Regular Paper", "Carbonless Paper"].map((p) => (
              <button
                className={paper === p ? "active" : ""}
                onClick={() => setPaper(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* PAD */}

          <h3>Pad Type</h3>
          <div className="option">
            {["+1 Duplicate", "+2 Duplicate", "+3 Duplicate"].map((p) => (
              <button
                className={pad === p ? "active" : ""}
                onClick={() => setPad(p)}
              >
                {p}
              </button>
            ))}
          </div>

          {/* BINDING */}

          <h3>Binding</h3>
          <div className="option">
            {["Top Binding", "Side Binding"].map((b) => (
              <button
                className={binding === b ? "active" : ""}
                onClick={() => setBinding(b)}
              >
                {b}
              </button>
            ))}
          </div>

          {/* UPLOAD */}

          <h3>Upload File</h3>

          <div className="upload">
            <input type="file" />
          </div>

          <button className="cart-btn">Add to cart</button>

        </div>
      </div>

      {/* TABS */}

      <div className="tabs">

        <div className="tab-head">

          <button onClick={() => setTab("description")}>Description</button>
          <button onClick={() => setTab("info")}>Additional Information</button>
          <button onClick={() => setTab("review")}>Review</button>

        </div>

        <div className="tab-content">

          {tab === "description" && (
            <div>

              <h2>Customized Bill Book Printing</h2>

              <p>
                To run your business account accurately you must have custom printed
                office stationery including bill books, challan books, cash vouchers
                etc.
              </p>

              <h3>Bill Book Printing Paper</h3>

              <p>
                Usually invoice copy uses 65gsm white paper and duplicate
                copies are yellow / blue / green.
              </p>

              <h3>Bill Book Format (GST)</h3>

              <p>
                As per government rule we customize GST bill format based
                on your business needs.
              </p>

            </div>
          )}

          {tab === "info" && (
            <p>Size options available: 5.5x8.5 , 7x9 , 8.5x11</p>
          )}

          {tab === "review" && (
            <p>No reviews yet.</p>
          )}

        </div>

      </div>


      {/* RELATED PRODUCTS */}

      <div className="related">

        <h2>Related Products</h2>

        <div className="products">

          <div className="card">
            <img src={img2} />
            <h4>Eco Friendly Business Card</h4>
            <p>₹540 – ₹1945</p>
            <button>Select Options</button>
          </div>

          <div className="card">
            <img src={img3} />
            <h4>PVC ID Card</h4>
            <p>₹437 – ₹7304</p>
            <button>Select Options</button>
          </div>

          <div className="card">
            <img src={img4} />
            <h4>A4 Envelope</h4>
            <p>₹550</p>
            <button>Select Options</button>
          </div>

        </div>

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