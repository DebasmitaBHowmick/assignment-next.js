
import HomeWidget from "./components/HomeWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function Home() {

  return (
    <>
    
    <div className="min-h-screen bg-[#1e1e1e] flex flex-col md:flex-row">
  {/* Left half — visible only on laptop & desktop */}
  <div className="hidden md:block md:w-1/2"></div>

  {/* Right half — content area */}
  <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col space-y-8 h-auto md:h-screen"> 
    <div className="flex-1">
      <HomeWidget />
    </div>

   
    <div className="w-full h-[3px] bg-[#3a3a3a] opacity-50 flex-shrink-0 shadow-2xl"></div>
    <div className="flex-1">
      <GalleryWidget />
      <div className="w-full h-[3px] bg-[#3a3a3a] opacity-50 my-2 shadow-2xl"></div>
    </div>
  </div>
</div>

</>
  );
}
