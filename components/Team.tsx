import Image from "next/image";

const members = [
  { name: "Gigantic", avatar: "gigantic.jpg", role: "Captain" },
  { name: "Brandan", avatar: "brandan.png", role: "Sniper" },
  { name: "Minny", avatar: "minny.webp", role: "Anything" },
  { name: "Unspeakable", avatar: "unspekable.webp", role: "Trainer" },
  { name: "Leroy", avatar: "brandan.png", role: "Something" },
];

const Team = () => {
  return (
    <section className="container py-8" id="team">
      <h2 className="text-5xl font-bold text-brand-200">Meet our team</h2>
      <p className="text-neutral-200">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
        {members.map((member) => (
          <li className="p-4 rounded-lg bg-neutral-800" key={member.name}>
            <div className="relative aspect-square">
              <Image
                className="rounded-lg object-cover"
                src={`/images/avatars/${member.avatar}`}
                layout="fill"
              />
            </div>
            <h3 className="mt-2 text-xl font-semibold">{member.name}</h3>
            <div className="mt-2 py-2 rounded-lg text-center bg-brand-200">
              {member.role}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
