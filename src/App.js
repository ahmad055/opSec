import "./App.css";
// import Home from './Layout/Home';
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Layout/Navbar";
import Sidebar from "./Layout/Sidebar";
import Home from "./Components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ImageGeneration from "./Components/Imagegeneration/ImageGeneration";
import EditImage from "./Components/EditImage/EditImage";
import VideoGeneration from "./Components/VideoGeneration/VideoGeneration";
import AudioGeneration from "./Components/AudioGenerartion/AudioGeneration";
import AiChatBot from "./Components/AIChatBot/AiChatBot";
import Pricing from "./Components/Pricing/Pricing";
import Placeholder from "./Components/Placeholder/Placeholder";


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="App row">
      <BrowserRouter>
      <Sidebar handleLinkClick={handleLinkClick} showSidebar={showSidebar} />
      <Navbar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
      

      <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/imagegeneration" element={<ImageGeneration/>} />
      <Route path="/editimage" element={<EditImage/>} />
      <Route path="/videogeneration" element={<VideoGeneration/>} />
      <Route path="/audiogeneration" element={<AudioGeneration/>} />
      <Route path="/aichatbot" element={<AiChatBot/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/Placeholder" element={<Placeholder/>} />




      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
