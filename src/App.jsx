import { useState } from 'react'
import media from './data/media'
import Navbar from './components/navbar.jsx'
import HeaderImage from './assets/Images/interstellar.webp'
import { IoSearchSharp } from "react-icons/io5";
import Filmcard from './components/filmcard.jsx';
import { Link } from 'react-router';
import { IoChevronForward } from "react-icons/io5";

function App() {
  // console.log(media)

  const liveAction = media.filter((item) => item.category === 'Live Action' )
  const fiveLiveAction = liveAction.slice(0,5)
  // console.log(liveAction)
  return (
    <>
      <header>
        <Navbar />

        {/* HERO SECTION */}
        <section className="max-w-full 2xl:max-w-[96rem] mx-auto">
          <div className="grid grid-cols-1 items-center md:grid-cols-2 hero-card gap-6 h-[450px] 2xl:h-[75vh] md:grid-flow-col-reverse">
            <div className="order-2 md:order-1 py-10 px-10">
              <h1 className="text-2xl md:text-3xl xl:text-5xl font-semibold">
                Watch on Amazon.com
              </h1>
              <p className="mt-7 text-base 2xl:text-xl">
                Enjoy The Lord of the Rings: The Rings of Power and other Amazon
                Originals, popular movies, and hit TV shows—all available with
                your Prime membership.
              </p>
              <button className="cursor-pointer bg-white px-5 py-3 text-black rounded-md text-base lg:text-xl mt-9 hover:scale-[1.05] duration-150">
                Go to Amazon.com to Watch
              </button>
              <p className="mt-15 text-sm">
                Live outside the United States? Sign in to continue.
              </p>
            </div>
            <div className="hero-img w-full h-[250px] md:h-full object-cover group overflow-hidden order-1 md:order-2">
              <img
                src={HeaderImage}
                alt="header img"
                className="w-full h-full object-cover group-hover:scale-[1.1] duration-200"
              />
            </div>
          </div>
        </section>

        {/* MAIN */}
        <main className="bg-white text-black py-20 px-25">
          <section className="text-center">
            <h1 className="text-3xl font-semibold">
              Your favourite show at <br /> your fingertips.
            </h1>
            <form
              action=""
              className="mt-5 relative w-[96%] md:w-[65%] lg:w-[50%] mx-auto"
            >
              <input
                type="text"
                placeholder="what are you looking for?"
                className="w-full h-full py-4 px-5 bg-gray-100 rounded-full"
              />
              <button className="py-2.5 px-2.5 bg-blue-500 hover:bg-blue-700 duration-150 rounded-full absolute top-2 right-2.5 ">
                <IoSearchSharp className="text-white  w-5 h-5" />
              </button>
            </form>
          </section>

          <section className="py-16 section-categories">
            {/* <div className="grid gap-4 grid-cols-2 md:grid-cols-4 2xl:grid-cols-5">
              {media.map((film)=>(
                <Filmcard  title={film.title} poster={film.poster} releaseDate={film.releaseDate} />

              ))}
            </div> */}

            <div className="live-action">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Live Action Movies</h1>

                <Link to="/about" className="flex space-x-1 items-center">
                  <span>See more </span>
                  <IoChevronForward />
                </Link>
              </div>

              <div className="grid gap-4 grid-cols-2 md:grid-cols-4 2xl:grid-cols-5">
                {fiveLiveAction.map((film) => (
                  <Filmcard
                    title={film.title}
                    poster={film.poster}
                    releaseDate={film.releaseDate}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default App


