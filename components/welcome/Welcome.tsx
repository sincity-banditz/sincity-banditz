import scrollTo from "../../helpers/scrollTo";
import Video from "./Video";

const Welcome = () => {
  return (
    <section className="relative" id="welcome">
      <Video />
      <div className="container h-full f-center flex-col gap-y-4 pb-36 pt-52 text-center">
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
          <button className="btn-brand px-8 py-4 mr-4">Join Now</button>
          <button
            className="btn-border px-8 py-4"
            onClick={() => scrollTo("team")}
          >
            Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
