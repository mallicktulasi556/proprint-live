import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Terms from "./screens/Terms";
import Privacy from "./screens/Privacy";
import Refund from "./screens/Refund";
import Help from "./screens/Help";
import Faqs from "./screens/Faqs";
import Stationery from "./screens/Stationery";
import Promotional from "./screens/Promotional";
import Signs from "./screens/Signs";
import BoxPackaging from "./screens/BoxPackaging";
import Gift from "./screens/Gift";
import Apparel from "./screens/Apparel";
import Services from "./screens/Services";

function App() {
  return (
   
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/terms" element={<Terms />} />
         <Route path="/privacy" element={<Privacy />} />
         <Route path="/refund" element={<Refund />} />
          <Route path="/help" element={<Help />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/stationery" element={<Stationery />} />
          <Route path="/promotional" element={<Promotional />} />
          <Route path="/signs" element={<Signs />} />
          <Route path="/boxpackaging" element={<BoxPackaging />} />
          <Route path="/gift" element={<Gift />} />
            <Route path="/apparel" element={<Apparel />} />
             <Route path="/services" element={<Services />} />
      </Routes>
  );
}

export default App;