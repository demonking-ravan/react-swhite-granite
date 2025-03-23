
export default function HoverCard({ positionStyles }: { positionStyles: string }) {
  return (
    <div 
      className={`${positionStyles} absolute p-2.5 drop-shadow-xl z-10 animate-jump bg-white`}
    >
      <div className="flex items-center bg-primary">
        <h3 
          className="bg-[url(../assets/card-texture.png)] bg-no-repeat bg-cover bg-top px-5 py-6 text-[55px] text-white text-center font-bold font-serif leading-[60px]"
        >
          25
        </h3>
        <h6 
          className="text-xs text-white rotate-180 font-bold uppercase py-2 [writing-mode:vertical-rl] mx-3.5 font-secondary"
        >
          years of <br/> experience
        </h6>
      </div>
    </div>
  )
}
