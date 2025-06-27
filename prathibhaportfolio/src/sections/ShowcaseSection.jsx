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
          
          <div className="project-list-wrapper overflow-hidden">
            {/* Home Energy Management System */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/"
                  alt="HEMS"
                />
              </div>
              <h2> Home Energy Management System </h2>
              <h4>
                 Final year research project with AI and IoT developed using Python and frontend with reactjs
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Home-Energy-Management-System-Com-Web.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link  
              </a>
            </div>

            {/*  */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img 
                  src="/images/projects/" 
                  alt=""
                />
              </div>
              <h2>Pet Clinic and Accessory Shop Management</h2>
              <h4>Channel patients Accessory shop & admin control system Using MERN.</h4>
              <a 
                href="https://github.com/PrathibhaSithu/Home-Energy-Management-System-Com-Web" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link  
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/*  */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/"
                  alt=""
                />
              </div>
              <h2>  </h2>
              <h4>
                
              </h4>
              <a 
                href="" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* Voyage LK  */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img 
                  src="/images/projects/" 
                  alt="" 
                />
              </div>
              <h2>Voyage LK</h2>
              <h4> Kotlin based mobile application project to help traveler to locate the places and find the nearest hotel. </h4>
              <a 
                href="https://github.com/PrathibhaSithu/VoyageLK-Mobile-Application" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/"
                  alt=""
                />
              </div>
              <h2></h2>
              <h4>
                
              </h4>
              <a 
                href="" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/*  */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img 
                  src="/images/projects/" 
                  alt="Dessertshop"
                />
              </div>
              <h2></h2>
              <h4> </h4>
              <a 
                href="" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                 GitHub Link 
              </a>
            </div>
          </div>

          
          {/*  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/"
                  alt=""
                />
              </div>
              <h2></h2>
              <h4>
                
              </h4>
              <a 
                href="" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/*  */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img 
                  src="/images/projects/" 
                  alt="" 
                />
              </div>
              <h2></h2>
              <h4></h4>
              <a 
                href="" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                 GitHub Link 
              </a>
            </div>
          </div>
        </div>

        <div className="showcaselayout mt-4">
          {/* <div ref={rydeRef} className="first-project-wrapper">
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
          </div> */}

          {/* Mushroom Page */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/mushroom.png"
                  alt=""
                />
              </div>
              <h2>Mushroom Home Page </h2>
              <h4>
                Designed using HTML and CSS. The page showcases a clean and modern layouts. 
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Home-Page-With-Top-Nav" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link  
              </a>
            </div>

            {/* Lover Store */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img src="/images/projects/lovers.png" alt="Lover Store" />
              </div>
              <h2>Lover Store</h2>
              <h4>Simple Frontend design from html css and JS </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Lovers-Store" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link 
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* Animated Web Clock */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/clock.png"
                  alt="Animated Web Clock"
                />
              </div>
              <h2>Animated Web Clock</h2>
              <h4>
                Simple and elegant design clock for web development biginers.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Digital_Clock_-" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* Business Frontend */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img src="/images/projects/connecto.jpg" alt="Dessertshop" />
              </div>
              <h2>Business Frontend</h2>
              <h4>Simple Frontend design from html css </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Assignment-2" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* gradiant border cards */}
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/projects/bordercards.png"
                  alt="Online Fashion Store"
                />
              </div>
              <h2>Gradiant Border Cards</h2>
              <h4>
                Gradient cards used for web development. Developed using HTML CSS JS PHP.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Gradient_Border_Cards" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>

            {/* The Desert Shop */}
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ffe7fa]">
                <img src="/images/projects/dessertshop.png" alt="Dessertshop" />
              </div>
              <h2>The Desert Shop</h2>
              <h4>Simple Frontend design from html css </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Desert-Shop" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
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
                Web application with full CRUD using HTML CSS JS PHP.
              </h4>
              <a 
                href="https://github.com/PrathibhaSithu/Online-Fashion-Store.git" 
                target="blank"
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
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
                class="inline-block px-4 py-2 bg-[#b31686] text-white font-semibold rounded-lg shadow-md hover:bg-[#8f4e8d] transition mt-2"
              >
                GitHub Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
