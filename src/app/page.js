
import HomeWidget from "./components/HomeWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function Home() {

  return (
    <>
    
    <div className="min-h-screen bg-[#1e1e1e] flex">
    {/* Left half - empty */}
    <div className="w-1/2 hidden md:block"></div>

    {/* Right half: Set to h-screen and flex-col for vertical distribution */}
    <div className="w-full md:w-1/2 p-10 flex flex-col space-y-8 h-screen">
        
        <div className="flex-1">
            <HomeWidget />
        </div>
        <div className="w-full h-[3] bg-[#3a3a3a] opacity-50 flex-shrink-0 shadow-2xl"></div>
        <div className="flex-1">
            <GalleryWidget />
            <div className="w-full h-[3] bg-[#3a3a3a] opacity-50 shrink-0 my-2 shadow-2xl"></div>
        </div>
        <div className="w-full h-[2.5] bg-[#3a3a3a] opacity-50 shrink-0 my-2 shadow-2xl"></div>
    </div>
</div>
</>
  );
}
