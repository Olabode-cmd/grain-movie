import { useState } from 'react'
import media from './data/media'
import Navbar from './components/navbar'
import HeaderImage from './assets/Images/image.jpg'

function App() {

  return (
    <>
      <header>
        <Navbar />

        {/* HERO SECTION */}
        <section className="max-w-[96rem] px-4  mx-auto">
          <div className="grid grid-cols-1 md:grid-flow-col-reverse md:grid-cols-2 hero-card gap-6">
            {/* <div>
              <h1 className=''>Watch on Amazon.com</h1>
              <p className=''>
                Enjoy The Lord of the Rings: The Rings of Power and othe Amazon
                Originals,popular movies, and hit TV shows- all available with
                your Prime membership.
              </p>
              <button class>Go to Amazon.com to Watch</button>
              <p>Live outside the United States? sign in to continue.</p>
            </div>
            <div>
              <img src={HeaderImage} alt="header image" />
            </div> */}
            <div className="py-10 ">
              <h1 className="text-5xl font-semibold">Watch on Amazon.com</h1>
              <p className="mt-7 text-xl">
                Enjoy The Lord of the Rings: The Rings of Power and othe Amazon
                Originals,popular movies, and hit TV shows- all available with
                your Prime membership.
              </p>
              <button className='bg-white px-5 py-3 text-black rounded-md text-xl mt-9 hover:scale-[1.05] duration-150' >Go to Amazon.com to Watch</button>
              <p className='mt-15 text-sm'>Live outside the United States? sign in to continue.</p>
            </div>
            <div className="hero-img"></div>
          </div>
        </section>

        {/* MAIN */}
        <main></main>
      </header>
    </>
  );
}

export default App


