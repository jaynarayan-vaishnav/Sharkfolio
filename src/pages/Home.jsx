import Navbar from "../Components/Navbar";

import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Home = () => {

  const welcome = useRef(null);
  const shark = useRef(null);
  const paragraph = useRef(null);

  useEffect(() => {
    gsap.to(welcome.current, {
      x: 0,
      color: "white",
      opacity: 1,
      duration: 1
    })

    gsap.to(shark.current, {
      x: 0,
      opacity: 1,
      delay: .2,
      duration: 1
    })

    gsap.to(paragraph.current, {
      x: 0,
      opacity: 1,
      delay: .5,
      duration: 1
    })
  }, [])

  return (
    <main className="w-full flex items-center justify-center min-h-screen text-white relative overflow-hidden">
      <div className="wave-effect absolute w-full h-full bg-no-repeat bg-main bg-cover -z-10"></div>
      <Navbar />
      <section className="w-[80vw] h-full">
        <div className="flex flex-col items-center justify-between min-h-[42vh]">
          <div className="text-center drop-shadow-lg">
            <h3 className="text-6xl font-semibold opacity-0 -translate-x-20" ref={welcome}>Welcome to</h3>
            <h1 className="bg-gradient-to-b from-[#8DFBFF] to-[#308EC7] bg-clip-text text-8xl font-extrabold text-transparent -translate-x-20 opacity-0" ref={shark}>Shark World</h1>
          </div>
          <p className="text-lg font-light text-center w-1/2 opacity-0 -translate-x-20" ref={paragraph}>
            We welcome you to the fun and amazing world of Sharks.
            <br />Here you can learn about different type of sharks and also play a mini quiz game.
          </p>
          <a href="/#/sharksinfo" className="bg-[#1F78A1] font-semibold px-24 py-2 rounded-md border-[1px] mt-8 hover:bg-[#165370] duration-300 shake-on-hover">Explore</a>
        </div>
      </section>
    </main>
  );
}

export default Home