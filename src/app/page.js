export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-400 text-black font-mono relative overflow-hidden">
      {/* Floating Background Icons */}
      <span className="absolute top-20 left-10 text-3xl float">🔥</span>
      <span className="absolute top-40 right-32 text-3xl float delay-200">💎</span>
      <span className="absolute bottom-20 left-1/3 text-3xl float delay-500">🚀</span>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-white relative z-10">
        <div className="flex items-center gap-2">
          <img src="/kittehcoin-logo.png" alt="KittehCoin Logo" className="h-8 w-8" />
          <span className="text-xl font-bold">MEOW</span>
        </div>
        <div className="flex items-center">
          <div className="flex gap-8">
            <a href="#lore" className="hover:text-yellow-500">LORE</a>
            <a href="#tokenomics" className="hover:text-yellow-500">TOKENOMICS</a>
            <a href="#roadmap" className="hover:text-yellow-500">ROADMAP</a>
          </div>
          <button className="ml-6 bg-white text-black px-4 py-2 rounded shadow hover:shadow-lg">
            BUY $MEOW
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="p-12 bg-yellow-400 flex flex-col md:flex-row justify-between items-center relative z-10">
        {/* Left Text */}
        <div className="max-w-xl">
          <div className="inline-block bg-white text-black px-3 py-1 mb-6 font-bold">
            KittehCoin = Turning the Blockchain one cat at a time.
          </div>

          <h1 className="text-6xl font-extrabold mb-4 text-white">$MEOW</h1>
          <h2 className="text-5xl font-extrabold mb-6 text-black">COIN</h2>

          <p className="leading-relaxed">
            Today, that prophecy comes to life. 📈 💎
          </p>
        </div>

        {/* Right Box */}
        <div className="m-10 mr-20 md:mt-0 border border-white p-10 rounded-lg relative bg-white ">
          <div className="flex flex-col items-center space-y-6">
            <span className="text-5xl">⛰️</span>
            <span className="text-5xl">🐱</span>
          </div>

          {/* Floating icons */}
          <div className="absolute right-[-80px] top-3 flex flex-col gap-4">
            <div className="bg-white border border-white rounded-full p-3">
              📊
            </div>
            <div className="bg-white border border-white rounded-full p-3">
              💎
            </div>
            <div className="bg-white border border-white rounded-full p-3">
              🔥
            </div>
          </div>
        </div>
      </div>

      {/* LORE SECTION */}
      <section id="lore" className="p-12 border-t border-white relative z-10">
        <h2 className="text-4xl font-bold text-white mb-6">📖 The Lore</h2>
        <p className="max-w-3xl text-lg leading-relaxed">
          Long ago, in the cryptosphere, a prophecy was whispered: <br />
          The $MEOW coin is not just a token — it is a movement, a culture, and
          a community bound by curiosity, playfulness, and resilience. Just like
          cats, we always land on our feet. 🐾
        </p>
      </section>

      {/* PHOTO STACK SECTION */}
      <section id="photos" className="p-12 flex flex-col items-center gap-6 bg-yellow-400 border-t border-white relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">Tweets</h2>
        <div className="flex flex-col gap-6">
          <img src="https://placekitten.com/400/300" alt="cat1" className="rounded-lg shadow-lg" />
          <img src="https://placekitten.com/400/301" alt="cat2" className="rounded-lg shadow-lg" />
          <img src="https://placekitten.com/400/302" alt="cat3" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* CAT MEME MARQUEES */}
      <section id="memes" className="p-12  border-t border-white relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">Cat Memes</h2>

        <div className="overflow-hidden whitespace-nowrap mb-6">
          <div className="marquee-left">
            <img src="https://placekitten.com/200/200" alt="meme1" />
            <img src="https://placekitten.com/201/200" alt="meme2" />
            <img src="https://placekitten.com/202/200" alt="meme3" />
            <img src="https://placekitten.com/203/200" alt="meme4" />
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap mb-6">
          <div className="marquee-right">
            <img src="https://placekitten.com/204/200" alt="meme5" />
            <img src="https://placekitten.com/205/200" alt="meme6" />
            <img src="https://placekitten.com/206/200" alt="meme7" />
            <img src="https://placekitten.com/207/200" alt="meme8" />
          </div>
        </div>

        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-left">
            <img src="https://placekitten.com/208/200" alt="meme9" />
            <img src="https://placekitten.com/209/200" alt="meme10" />
            <img src="https://placekitten.com/210/200" alt="meme11" />
            <img src="https://placekitten.com/211/200" alt="meme12" />
          </div>
        </div>
      </section>
    </div>
  );
}
