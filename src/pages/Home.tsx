
export default function Home() {
  return (
    <section className="relative !mt-0 pt-0">
      <div className="sec_container relative fade-in-bottom-slow">
        <video playsInline autoPlay loop muted id="fullScreenVideo" className="w-full video object-cover">
          <source src="https://cdn.sanity.io/files/534owa5g/production/fc64899153f84c56a571a99c2e54a49a954e18d4.mp4" type="video/mp4"></source>
        </video>
        {/* <div className="play-button absolute">
          <span className="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="16" fill="none" className="mr-1">
              <path fill="#fff" d="M9 8 .75 15.794V.206L9 8Z"></path>
            </svg>
          </span>
          PLAY
        </div> */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
          <p className="uppercase text-white text-[10px] font-[461]">SWhite Granite</p>
          <hr className="border-l-[1px] border-t-0 h-5 border-white w-[1px] mx-auto mt-1"></hr>
        </div>
        {/* <video playsInline autoPlay loop muted className="w-full h-[calc(100dvh-(100px)-(theme(grid.gridXMargin)))] flex md:hidden">
          <source src="https://cdn.sanity.io/files/534owa5g/production/fc64899153f84c56a571a99c2e54a49a954e18d4.mp4" type="video/mp4"></source>
        </video> */}
      </div>
    </section>
  )
}
