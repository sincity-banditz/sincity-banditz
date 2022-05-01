const Video = () => {
  // To change video go to /public/videos/
  return (
    <div className="absolute -z-10 w-full h-full">
      <video
        className="absolute w-full h-full object-cover"
        src="/videos/welcome.mp4"
        autoPlay
        loop
        playsInline
        muted
      />
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.3)] bg-gradient-to-t from-neutral-900" />
    </div>
  );
};

export default Video;
