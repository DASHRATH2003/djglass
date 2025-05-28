import { useState } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Navbar/Header";
import Footer from "./components/Navbar/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Gallery from "./components/Gallery/Gallery";
import ProfileToughenedGlassPartitionWork from "./components/Services/ServiceDropdown/ProfileToughenedGlassPartitionWork";
import ToughenedGlassPartitionWork from "./components/Services/ServiceDropdown/ToughenedGlassPartitionWork";
import LEDTouchsensorMirror from "./components/Services/ServiceDropdown/LEDTouchsensorMirror";
import UPVCWindowsandDoors from "./components/Services/ServiceDropdown/UPVCWindowsandDoors";
import SSGlassRailingWork from "./components/Services/ServiceDropdown/SSGlassRailingWork";
import SkylightGlassParagolaWork from "./components/Services/ServiceDropdown/SkylightGlassParagolaWork";
import MSGateandFabricationWork from "./components/Services/ServiceDropdown/MSGateandFabricationWork";
import SpiderGlazingWork from "./components/Services/ServiceDropdown/SpiderGlazingWork";
import ShowerGlassPartitionOpenable from "./components/Services/ServiceDropdown/ShowerGlassPartitionOpenable";
import WalkInShowerGlassPartition from "./components/Services/ServiceDropdown/WalkInShowerGlassPartition";
import ShowerGlassPartitionSlidingPartition from "./components/Services/ServiceDropdown/ShowerGlassPartitionSlidingPartition";
import Gipsumportion from "./components/Services/ServiceDropdown/gipsumportion";
import GypsumPartitionWork from "./components/Services/ServiceDropdown/GypsumPartitionWork";
import ScrollToTop from "./components/ScrollToTop";
import FloatingSocialMedia from "./components/FloatingSocialMedia";
import Officeworkstation from "./components/Services/ServiceDropdown/Officeworkstation";
import Officepartionword from "./components/Services/ServiceDropdown/Officepartionword";
import AluminumPartitionWork from "./components/Services/ServiceDropdown/AluminumPartitionWork";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <div>
          <Header />
          {/* Header Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>

          {/* Service Dropdown Routes */}
          <Routes>
            <Route
              path="/services/profile-toughened-glass-partition-work"
              element={<ProfileToughenedGlassPartitionWork />}
            />
            <Route
              path="/services/toughened-glass-partition-work"
              element={<ToughenedGlassPartitionWork />}
            />
            <Route
              path="/services/led-touch-sensor-mirror"
              element={<LEDTouchsensorMirror />}
            />
            <Route
              path="/services/upvc-windows-and-doors"
              element={<UPVCWindowsandDoors />}
            />
            <Route
              path="/services/ss-glass-railing-work"
              element={<SSGlassRailingWork />}
            />
            <Route
              path="/services/skylight-glass-paragola-work"
              element={<SkylightGlassParagolaWork />}
            />
            <Route
              path="/services/ms-gate-and-fabrication-work"
              element={<MSGateandFabricationWork />}
            />
            <Route
              path="/services/spider-glazing-work"
              element={<SpiderGlazingWork />}
            />
            <Route
              path="/services/shower-glass-partition-sliding"
              element={<ShowerGlassPartitionSlidingPartition />}
            />
            <Route
              path="/services/shower-glass-partition-openable"
              element={<ShowerGlassPartitionOpenable />}
            />
            <Route
              path="/services/walk-in-shower-glass-partition"
              element={<WalkInShowerGlassPartition />}
            />
            <Route
              path="/services/gipsumportion.jsx"
              element={<Gipsumportion/>}
            />
            <Route
              path="/services/gypsum-partition-work"
              element={<GypsumPartitionWork/>}
            />
            <Route
              path="/services/officeworkstation"
              element={<Officeworkstation/>}
              />
              <Route
              path="/services/office-partition-work"
              element={<Officepartionword/>}
              />
              <Route
              path="/services/aluminum-partition-work"
              element={<AluminumPartitionWork/>}
              />

          </Routes>
        </div>
        <Footer />
      </Router>
      <FloatingSocialMedia/>
    </>
  );
}

export default App;

