"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { Plus, ChevronLeft, ChevronRight } from "lucide-react";


const initialImages = [
    "https://images.unsplash.com/photo-1761165308046-174a56e73525?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170", 
    "https://images.unsplash.com/photo-1760605193118-a3536e1eea61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600", 
    "https://images.unsplash.com/photo-1760605193118-a3536e1eea61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600", 
  
];

const GalleryWidget = () => {
   
    const [images, setImages] = useState(initialImages);
    const [activeIndex, setActiveIndex] = useState(0); 
    const galleryRef = useRef(null);
    const cardSixePx =160;

    // Handlers for Slideshow Navigation
    const handleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const handlePrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);


    // Scroll to Center the Active Image (Visual Sync)
    useEffect(() => {
        if (galleryRef.current) {
            const container = galleryRef.current;
            const cardWidth = cardSixePx + 16; 
            
            // Calculate scroll position to center the active item (adjusting for partial visibility)
            // It centers the active image by setting the scrollLeft.
            const scrollPos = activeIndex * cardWidth - (container.offsetWidth / 2) + (cardWidth / 2);
            
            container.scrollTo({
                left: scrollPos,
                behavior: 'smooth',
            });
        }
    }, [activeIndex]);

    // Image Upload Handler
    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setImages([...images, url]);
        setActiveIndex(images.length);
    };


    return (
        
        <div className="bg-[#3a3a3a] rounded-2xl p-6 shadow-2xl text-white h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#3a3a3a] opacity-50"></div>
            <div className="absolute top-3 left-3 bg-[#3a3a3a] w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 ease-out">
    <i className="bi bi-question text-gray-400 text-sm"></i>
  </div>
  <div className="absolute top-1 mx-1 left-1 bg-[#3a3a3a] w-7 h-7 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 ease-out my-30">
    <i className="bi bi-grid text-gray-400 text-sm"></i>
  </div>
            <div className="flex justify-between items-center mb-6">
           
                <h2 className="text-xl font-semibold bg-[#323232] px-5 py-3 mx-6 rounded-xl flex justify-between items-center mb-6 flex-shrink-0">
                    Gallery
                </h2>

                <div className=" mx-4 flex items-center gap-3">
                    
                    <label className="flex items-center gap-2 bg-[#525252] px-6 py-3 rounded-full text-white cursor-pointer shadow-[4px_4px_10px_rgba(0,0,0,0.5),_-4px_-4px_10px_rgba(255,255,255,0.05)]
             transition-all duration-300 ease-out hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.5),inset_-2px_-2px_6px_rgba(255,255,255,0.1)] hover:translate-y-[-2px] active:translate-y-[0px]">
                        <Plus size={16} /> Add Image
                        <input type="file" accept="image/*"
                            onChange={handleAddImage}
                            className="hidden" />
                    </label>

                 
                    <button 
                        onClick={handlePrev} className="p-2 rounded-full bg-[#222020] text-white transition-all duration-400 ease-out hover:bg-[#4a4a4a] 
                        hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]
                        hover:translate-y-[-1px]
                          active:bg-[#4285F4] 
                        active:shadow-[0_0_15px_rgba(66,133,244,0.8)] 
                        active:translate-y-[0px]"
                        aria-label="Previous Image">
                        <ChevronLeft size={20} />
                    </button>
                    <button 
                        onClick={handleNext} 
                        className="p-2 rounded-full 
                        bg-[#222020] 
                        text-white 
                        transition-all duration-200 ease-out 
                        hover:bg-[#4a4a4a] 
                        hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]
                        hover:translate-y-[-1px]
                        active:bg-[#4285F4] 
                        active:shadow-[0_0_15px_rgba(66,133,244,0.8)] 
                        active:translate-y-[0px]"
                        aria-label="Next Image">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div 
                ref={galleryRef}
                className="flex gap-4 overflow-x-hidden p-2 -m-2 snap-x snap-mandatory flex-1 items-center" >
                {images.map((src, idx) => {
                    const isFocused = idx === activeIndex;
                    return (
                        <div 
                            key={idx} 
                            className={`flex-shrink-0 w-40 h-40 rounded-xl overflow-hidden cursor-pointer
                                transition-all duration-500 ease-out perspective-1000 transform-gpu

                                hover:scale-[1.1] 
                                hover:rotate-y-[7] 
                                hover:rotate-x-[7] 
                                hover:shadow-3xl 
                                hover:shadow-[0_10px_20px_rgba(0,0,0,0.8)`}>
                          
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <div className="w-full h-full perspective-1000 transition-all duration-300 ease-out">
                                
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img 
                                    src={src}
                                    alt={`Image ${idx + 1}`} 
                                    className={`w-full h-full object-cover rounded-xl 
                                        transition-all duration-300 ease-out 
                                        ${isFocused ? 'filter-none' : 'grayscale-[80%]'} 
                                        `} />
                            </div>
                            
                        </div>
                    );
                })}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2] bg-[#3a3a3a] opacity-50"></div>
        </div>
    );
}

export default GalleryWidget;