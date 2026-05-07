"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, Observer } from "gsap/all";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, Observer);

    let scrollTimeout = gsap.delayedCall(1, () => {}).pause();
    const time = 0.5;
    let animating = false;

    gsap.set(".card", {
      y: (index) => 20 * index,
      transformOrigin: "center top",
    });

    const tl = gsap.timeline({ paused: true });

    tl.add("card2");
    tl.to(".card:nth-child(1)", {
      scale: 0.85,
      duration: time,
      backgroundColor: "#3498db",
    });
    tl.from(
      ".card:nth-child(2)",
      {
        y: window.innerHeight,
        duration: time,
      },
      "<"
    );

    tl.add("card3");
    tl.to(".card:nth-child(2)", {
      scale: 0.9,
      duration: time,
      backgroundColor: "#3498db",
    });
    tl.from(
      ".card:nth-child(3)",
      {
        y: window.innerHeight,
        duration: time,
      },
      "<"
    );

    tl.add("card4");
    tl.to(".card:nth-child(3)", {
      scale: 0.95,
      duration: time,
      backgroundColor: "#3498db",
    });
    tl.from(
      ".card:nth-child(4)",
      {
        y: window.innerHeight,
        duration: time,
      },
      "<"
    );

   

     tl.add("card5");
    tl.to(".card:nth-child(4)", {
      scale: 0.95,
      duration: time,
      backgroundColor: "#3498db",
    });
    tl.from(
      ".card:nth-child(5)",
      {
        y: window.innerHeight,
        duration: time,
      },
      "<"
    );

    function tweenToLabel(direction, isScrollingDown) {
      if (
        (!tl.nextLabel() && isScrollingDown) ||
        (!tl.previousLabel() && !isScrollingDown)
      ) {
        cardsObserver.disable();
        return;
      }

      if (!animating && direction) {
        animating = true;
        tl.tweenTo(direction, {
          onComplete: () => (animating = false),
        });
      }
    }

    const cardsObserver = Observer.create({
      wheelSpeed: -1,
      onDown: () => tweenToLabel(tl.previousLabel(), false),
      onUp: () => tweenToLabel(tl.nextLabel(), true),
      tolerance: 10,
      preventDefault: true,
      onEnable(self) {
        let savedScroll = self.scrollY();
        self._restoreScroll = () => self.scrollY(savedScroll);

        document.addEventListener("scroll", self._restoreScroll, {
          passive: false,
        });
      },
      onDisable: (self) =>
        document.removeEventListener("scroll", self._restoreScroll),
    });

    cardsObserver.disable();

    ScrollTrigger.create({
      trigger: ".cards-section",
      pin: true,
      start: "top 20%",
      end: "+=100",
      onEnter: () => {
        if (!cardsObserver.isEnabled) cardsObserver.enable();
      },
      onEnterBack: () => {
        if (!cardsObserver.isEnabled) cardsObserver.enable();
      },
    });

    return () => {
      ScrollTrigger.killAll();
      cardsObserver.kill();
    };
  }, []);

  return (
    <>
      <main>
        {/* <section className="section">
          <h1>Stacking cards problem</h1>
        </section> */}

        <section className="section">
          <div className="cards-section">

            <div className="cards">
              <div className="card">First card</div>
              <div className="card">Second card</div>
              <div className="card">Third card</div>
              <div className="card">Fourth card</div>
              <div className="card">Fifth card</div>

            </div>
          </div>
        </section>

        {/* <section className="section">
          <h1>Stacking cards problem</h1>
        </section> */}
      </main>

      <style jsx global>{`
        body {
          font-family: Avenir, sans-serif;
          background-color: #0e100f;
          color: #fffce1;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 5rem;
        }

        .section {
          padding: 10rem 0;
        }

        .cards-section {
          position: relative;
          display: grid;
          gap: 3rem;
          grid-template-columns: 200px auto;
        }

        .cards {
          display: grid;
          margin-top: 3.5rem;
        }

        .cards > * {
          grid-area: 1 / 1 / 2 / 2;
        }

        .card {
          width: 300px;
          height: 250px;
          background-color: red;
          border-radius: 8px;
          border: 2px solid red;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .to-stay-card {
          background-color: red;
          border-radius: 8px;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}