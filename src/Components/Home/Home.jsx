
import  "./Home.css"
import logo from "../Assets/Logo.png"
import avatar from "../Assets/avatar.png"
import rectangle from "../Assets/Rectangle 9.png"
import img2 from "../Assets/18+.png"
import img3 from "../Assets/Frame 65.png"
import arrowleft from "../Assets/arrow-left.png"
import arrowright from "../Assets/arrow-right.png"
import component from "../Assets/Component 2.png"
import component1 from "../Assets/Component 2 (1).png"
import component2 from "../Assets/Component 2 (2).png"
import component3 from "../Assets/Component 2 (3).png"
import frame74 from "../Assets/Frame 74.png"
import frame76 from "../Assets/Frame 76.png"
import frame78 from "../Assets/Frame 78.png"
import frame77 from "../Assets/Frame 77.png"
import frame79 from "../Assets/Frame 79.png"
import chill2 from "../Assets/chill (2).png"
import tranding1 from "../Assets/trending1.png"
import tranding2 from "../Assets/trending2.png"
import tranding3 from "../Assets/trending3.png"
import tranding4 from "../Assets/trending4.png"
import tranding5 from "../Assets/trending5.png"
import React, { useState } from "react"



  
const Home = () => {

  const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen); // Toggle visibility of the dropdown
    };
  
    return (
      <div className="relative inline-block text-left w-auto">
        {/* Button that triggers the dropdown */}
        <button
    type="button"
    className="w-17 h-17 inline-flex items-center justify-center rounded-full ml-80  bg-[#1e1e1e] px-4 py-2 text-sm font-medium text-gray-700 shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
    onClick={toggleMenu}
  >
    <img
      src={avatar}
      alt="Profile"
      className="rounded-full  w-15 h-15 object-cover"
    />
    <svg
      className="-mr-3 h-5 w-7 mt-3 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      />
    </svg>
  </button>
        {/* Dropdown Menu */}
        <div className={`absolute ml-80 mt-2 w-30 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${isOpen ? 'block' : 'hidden'}`} style={{ right: '10px', zIndex: '1000' }}>
 
    <div className="relative w-full" >
      <a href="#" className="block px-4 py-2 text-sm text-gray-700">
        Profil Saya
      </a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700">
        Ubah Premium
      </a>
      <a href="../Login" className="block px-4 py-2 text-sm text-gray-700">
        Keluar
      </a>
    </div>
  </div>
      </div>
    );
  };
  

  return (
   
      
    <div className="w-full">
      <div className=" flex items-center justify-between w-full">
          <div className="flex items-center space-x-20 w-full ">
          <img src={logo} style={{height: "50px"}} alt="prop"  />
          <a href="#" class="text-white hover:text-gray-400">Series</a>
          <a href="#" class="text-white hover:text-gray-400">Film</a>
          <a href="#" class="text-white hover:text-gray-400">Daftar Saya</a>
          
          </div>

        <div className={`relative right-0 mt-2   `} style={{ right: '120px' }}>
        
          <DropdownMenu />
        </div>
    </div>

      <div className="flex min-h-screen w-full h-[300px] md:h-[400px] lg:h-[500px]"> {/* Adjust height for different screen sizes */}
  
  <img className="w-full h-full object-cover" src={rectangle} alt="Background" />
  <div className=" absolute bottom-0 left-0 right-0 flex flex-col pl-8 pb-8 text-left text-white w-full">
    <h3 className="text-2xl font-bold mb-1">Petualangan Penyihir</h3>
    <p className="text-lg sm:text-base md:text-sm mb-4">
      Film ini menceritakan kisah persahabatan Elphaba dan Glinda, dua
      penyihir di Tanah Oz. Elphaba adalah gadis berkulit hijau yang
      pintar, pemberani, dan bersemangat, namun sering dikucilkan karena
      penampilannya. Glinda adalah gadis populer yang anggun dan sempurna.
      Keduanya menjadi sahabat di asrama, namun persahabatan mereka diuji
      ketika Wonderful Wizard of Oz muncul.
    </p>
    <div className="flex items-start space-x-4 w-full">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300">Mulai</button>
      <button className="bg-transparent text-white px-6 py-2 rounded-md border border-white hover:bg-white hover:text-black transition-all duration-300">Selengkapnya</button>
      <img src={img2} alt="18+" className="w-12 h-12" />
      <img src={img3} alt="Frame 65" className="w-12 h-12" />
    </div>
  </div>
</div>



<div className="slider-lanjut relative">
  <figure className="flex flex-col items-start w-full">
    {/* Title aligned to the left */}
    <h3 className="text-xl font-bold mb-4 ml-0 text-white">Melanjutkan Tonton Film</h3>
    
    <div className="relative w-full flex space-x-4 overflow-x-auto">
      <img src={component} alt="Component 2" className="w-full h-auto" />
      <img src={component1} alt="Component 2 (1)" className="w-full h-auto" />
      <img src={component2} alt="Component 2 (2)" className="w-full h-auto" />
      <img src={component3} alt="Component 2 (3)" className="w-full h-auto" />

      {/* Left Arrow */}
      <img src={arrowleft}  alt="Left Arrow" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer" />

      {/* Right Arrow */}
      <img src={arrowright}  alt="Right Arrow" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer" />
    </div>
  </figure>
</div>
<br />


<div className="slider-lanjut relative">
  <figure className="flex flex-col items-start w-full">
    {/* Title aligned to the left */}
    <h3 className="top-rating text-xl font-bold mb-4 ml-0 text-white">
      Top Rating Film dan Series Hari ini
    </h3>
    
    <div className="relative w-full flex space-x-4 overflow-x-auto">
  {/* Images */}
  <img src={frame74} alt="Frame 74" className="w-1/3 h-auto" />
  <img src={frame78} alt="Frame 78" className="w-1/3 h-auto" />
  <img src={frame76} alt="Frame 76" className="w-1/3 h-auto" />
  <img src={frame77} alt="Frame 79" className="w-1/3 h-auto" />
  <img src={frame79} alt="Frame 77" className="w-1/3 h-auto" />

  {/* Left Arrow */}
  <img 
    id="arrow-left" 
    src={arrowleft} 
    alt="Left Arrow" 
    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer z-10" 
  />

  {/* Right Arrow */}
  <img 
    id="arrow-right" 
    src={arrowright} 
    alt="Right Arrow" 
    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer z-10" 
  />
</div>

  </figure>
</div>
<br />
<div className="slider-lanjut relative">
  <figure className="flex flex-col items-start w-full">
    {/* Title aligned to the left */}
    <h3 className="top-rating text-xl font-bold mb-4 ml-0 text-white">
      Film Trending
    </h3>
    
    <div className="relative w-full flex space-x-4 overflow-x-auto">
  {/* Images */}
  <img src={tranding1} alt="Frame 74" className="w-1/3 h-auto" />
  <img src={tranding2} alt="Frame 78" className="w-1/3 h-auto" />
  <img src={tranding3} alt="Frame 76" className="w-1/3 h-auto" />
  <img src={tranding4} alt="Frame 79" className="w-1/3 h-auto" />
  <img src={tranding5} alt="Frame 77" className="w-1/3 h-auto" />

  {/* Left Arrow */}
  <img 
    id="arrow-left" 
    src={arrowleft} 
    alt="Left Arrow" 
    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer z-10" 
  />

  {/* Right Arrow */}
  <img 
    id="arrow-right" 
    src={arrowright} 
    alt="Right Arrow" 
    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer z-10" 
  />
</div>

  </figure>
</div>
      
<br />
<div className="slider-lanjut relative">
  <figure className="flex flex-col items-start w-full">
    {/* Title aligned to the left */}
    <h3 className="top-rating text-xl font-bold mb-4 ml-0 text-white">
      Rilis Baru
    </h3>
    
    <div className="relative w-full flex space-x-4 overflow-x-auto">
  {/* Images */}
  <img src={frame74} alt="Frame 74" className="w-1/3 h-auto" />
  <img src={frame78} alt="Frame 78" className="w-1/3 h-auto" />
  <img src={frame76} alt="Frame 76" className="w-1/3 h-auto" />
  <img src={frame77} alt="Frame 79" className="w-1/3 h-auto" />
  <img src={frame79} alt="Frame 77" className="w-1/3 h-auto" />

  {/* Left Arrow */}
  <img 
    id="arrow-left" 
    src={arrowleft} 
    alt="Left Arrow" 
    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer z-10" 
  />

  {/* Right Arrow */}
  <img 
    id="arrow-right" 
    src={arrowright} 
    alt="Right Arrow" 
    className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 cursor-pointer z-10" 
  />
</div>

  </figure>
</div>


<section className="footer py-8 text-white bg-gray-900">
  <div className="footer-row flex flex-col sm:flex-row justify-between items-start sm:items-center px-6">
    {/* Logo Section */}
    <div className="footer-col w-full sm:w-auto mb-6 sm:mb-0 flex justify-start">
      <img className="logo-wrap  h-auto" src={chill2} alt="Logo" />
    </div>

    {/* Genre Section */}
    <div className="footer-col w-full sm:w-auto mb-6 sm:mb-0 flex flex-col sm:flex-row sm:space-x-24">
      <div className="genre-section mb-4 sm:mb-1">
        <h4 className="text-xl font-semibold text-white mb-2">Genre</h4>
        <ul className="links space-y-2">
          <li><button className="link-style text-white-600 hover:text-blue-500">Aksi</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Anak-Anak</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Anime</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Britania</button></li>
        </ul>
      </div>
      <div className="genre-section mb-4 sm:mb-1">
        <ul className="links space-y-2">
          <br />
          <li><button className="link-style text-white-100 hover:text-blue-500">Drama</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Fantasi Ilmiah & Fantasi</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Kejahatan</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">KDrama</button></li>
        </ul>
      </div>
      <div className="genre-section mb-4 sm:mb-1">
        <ul className="links space-y-2">
          <br />
          <li><button className="link-style text-white-600 hover:text-blue-500">Komedi</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Petualangan</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Perang</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Romantis</button></li>
        </ul>
      </div>
      <div className="genre-section mb-4 sm:mb-1">
        <ul className="links space-y-2">
          <br />
          <li><button className="link-style text-white-600 hover:text-blue-500">Sains & Alam</button></li>
          <li><button className="link-style text-white-600 hover:text-blue-500">Thriller</button></li>
        </ul>
      </div>
      <div className="genre-section mb-4 sm:mb-1">
      <h4 className="text-xl font-semibold text-white mb-2">Bantuan</h4>
      <ul className="links space-y-2">
        <li><button className="link-style text-white-600 hover:text-blue-500">FAQ</button></li>
        <li><button className="link-style text-white-600 hover:text-blue-500">Kontak Kami</button></li>
        <li><button className="link-style text-white-600 hover:text-blue-500">Privasi</button></li>
        <li><button className="link-style text-white-600 hover:text-blue-500">Syarat & Ketentuan</button></li>
      </ul>
      </div>
    </div>

    {/* Help Section */}
      </div>
</section>



      
</div>


  )
}

export default Home

