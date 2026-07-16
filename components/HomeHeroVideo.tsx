export default function HomeHeroVideo() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/videos/hero-poster.jpg"
        className="w-full block scale-[1.13]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
