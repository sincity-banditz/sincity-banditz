import Video from "./Video";

const Welcome = () => {
  return (
    <section className="relative">
      <Video />
      <div className="container h-full f-center flex-col gap-y-4 py-36 text-center">
        <h1 className="text-6xl sm:text-7xl font-bold">
          Best team{" "}
          <span className="font-extrabold text-brand-200">SinCity Banditz</span>
        </h1>
        <p className="w-[60rem] max-w-full text-xl text-neutral-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s.
        </p>
        <div className="flex">
          <button className="btn-brand mr-4">Join Now</button>
          <button className="btn-border">Our Team</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
