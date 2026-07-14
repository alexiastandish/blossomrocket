export default function HomeHeroVideo() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
      {/* Negative margin crops the black bars top and bottom */}
      <div className="relative -my-[6%]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.jpg"
          className="w-full block"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
