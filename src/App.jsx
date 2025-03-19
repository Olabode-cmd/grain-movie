import { useState } from 'react'
import media from './data/media'
import Navbar from './components/navbar'
import HeaderImage from './assets/Images/interstellar.webp'
import { FiSearch } from 'react-icons/fi'

function App() {
  // const liveAction = media.filter((item) => item.category === 'Live Action');
  // console.log(liveAction);
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
              <button className="bg-white px-5 py-3 text-black rounded-md text-base lg:text-xl mt-9 hover:scale-[1.05] duration-150">
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
        <main className="bg-white text-black">
          <section className="section-search max-w-7xl 2xl:max-w-[96rem] mx-auto py-16">
            <h1 className="text-center text-xl lg:text-4xl 2xl:text-5xl font-medium mb-6">
              Your favorite shows at <br />
              your fingertips.
            </h1>

            <form className="relative text-center mx-auto w-[97%] md:w-[60%] 2xl:w-[55%]">
              <input
                placeholder="What are you looking for?"
                className="bg-[#F3F3F6] rounded-full text-sm px-4 md:px-6 py-3 md:py-4 w-full focus:ring-blue-300 focus:outline-none"
              />
              <button type="submit" className="cursor-pointer absolute top-2 right-2.5 bg-blue-600 rounded-full px-2 py-2">
                <FiSearch className="text-white w-5 h-5" />
              </button>
            </form>
          </section>
        </main>

        <section className="section-test">
          <div className="grid grid-cols-4 gap-4">
            {media.map((item) => (
              <div key={item.id}>
                <img src={item.landscapeBanner} alt={item.title} />
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </section>
      </header>
    </>
  );
}

export default App


