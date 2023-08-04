import React from "react";
import { useEffect, useRef } from "react";
import Item from "./Item";
import Banner from "./Banner";
const itens = [
    { name: "Github", image: "../github.png", link: "About", css: "w-14" },
    { name: "Linkedin", image: "../linkedin.png", link: "Login", css: "w-14" },
    { name: "Item 3", image: "../logo.svg", link: "", css: "w-14" },
    { name: "Item 4", image: "../logo.svg", link: "", css: "w-14" },
    { name: "Item 5", image: "../logo.svg", link: "", css: "w-14" },
    { name: "Item 6", image: "../logo.svg", link: "", css: "w-14" },
    { name: "Item 7", image: "../logo.svg", link: "", css: "w-14" },
    { name: "Item 8", image: "../logo.svg", link: "", css: "w-14" },
    { name: "Item 9", image: "../logo.svg", link: "", css: "w-14" },
    { name: "Item 10", image: "../logo.svg", link: "", css: "w-14" },
    // Adicione mais itens conforme necessário
  ];
  
function ScrollRoll() {
    
      useEffect(() => {
        const container = containerRef.current;
  
        let animationFrameId: number | null;
        const scrollStep = 1; // Define a velocidade do scroll horizontal
  
        const scrollItems = () => {
          // @ts-ignore: Object is possibly 'null'.  
          container.scrollLeft += scrollStep;
          
          if (
            // @ts-ignore: Object is possibly 'null'.
            container.scrollLeft + container.clientWidth >=
            // @ts-ignore: Object is possibly 'null'.
            container.scrollWidth
          ) {
            setTimeout(() => {
            // @ts-ignore: Object is possibly 'null'.
            container.scrollTo({ left: 0 });
            }, 1000);
          }
          animationFrameId = requestAnimationFrame(scrollItems);
        
    }
  
        const startScroll = () => {
            
          if (!animationFrameId) {
            animationFrameId = requestAnimationFrame(scrollItems);
          }
       
        };
       
        const stopScroll = () => {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        };
        // @ts-ignore: Object is possibly 'null'.
        container.addEventListener("mouseleave", startScroll);
        // @ts-ignore: Object is possibly 'null'.
        container.addEventListener("mouseenter", stopScroll);
        
        startScroll();
       
  
        return () => {
          stopScroll();
          // @ts-ignore: Object is possibly 'null'.
          container.removeEventListener("mouseleave", startScroll);
          // @ts-ignore: Object is possibly 'null'.
          container.removeEventListener("mouseenter", stopScroll);
        };
        }, []);

    const containerRef = useRef(null);

    return (
        <div className="flex flex-col mt-10 w-screen gap-10 items-center absolute">
              
              <div
                ref={containerRef}
                className="flex flex-row w-5/6 sm:w-5/6 md:w-5/6 lg:w-4/6 xl:w-6/12 relative text-center overflow-x-hidden whitespace-nowrap h-24 bg-slate-900 rounded border-x-2 border-r-cyan-100 border-l-cyan-100"
              >
                {/* Renderizar os itens duplicados para criar o efeito de scroll infinito */}
                {itens.map((item, index) => (
                    <React.Fragment key={index}>
                      <Item name={item.name} image={item.image} link={item.link} />
                    </React.Fragment>
                  ))
                }
              </div>
        </div>
    )
}

export default ScrollRoll;