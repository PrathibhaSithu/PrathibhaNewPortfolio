import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8">
             My Work Showcase
            </h1>
        </div>

        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Online Fashion Store"
                />
              </div>
              <h2>Online Fashion Store</h2>
              <h4>
                Web application using HTML CSS JS PHP.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Online-Fashion-Store.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition"
              >
                  Online Fashion Store
              </a>
            </div>

            {/* The Desert Shop */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img src="/images/projects/dessertshop.png" alt="YC Directory App" />
              </div>
              <h2>The Desert Shop</h2>
              <h4>Simple Frontend design from html css </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Desert-Shop" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition"
              >
                  The Desert Shop
              </a>
            </div>
          </div>

          
          {/* Online Fashion Store */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Online Fashion Store"
                />
              </div>
              <h2>Online Fashion Store</h2>
              <h4>
                Web application using HTML CSS JS PHP.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Online-Fashion-Store.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition"
              >
                  Online Fashion Store
              </a>
            </div>

            {/* Java Script Calculator */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="YC Directory App" />
              </div>
              <h2>The Javascript Calculator</h2>
              <h4>Simple calculator from javascript. Build as a javascript beginner</h4>
              <a 
                href="https://github.com/PrathibhaSithu/JavaScript-Calculator.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition"
              >
                  The Javascript Calculator
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
