import scrollTo from "helpers/scrollTo";
import Video from "components/welcome/Video";

const Welcome = () => {
  return (
    <section id="welcome" className="relative">
      <Video />
      {/* Padding top = default padding + navbar height */}
      <div className="flex flex-col items-center gap-y-4 container pb-36 pt-52 text-center">
        <h1 className="text-7xl font-bold">
          Best team{" "}
          <span className="font-extrabold text-brand">SinCity Banditz</span>
        </h1>
        <p className="sm:w-3/4 text-xl text-neutral-200">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>
        <div className="flex gap-x-4">
          <button
            className="btn-brand px-8 py-4"
            onClick={() => scrollTo("join")}
          >
            Join Now
          </button>
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
