import Image from "next/image";
import { members } from "helpers/constants";

const Team = () => {
  return (
    <section id="team" className="container py-16">
      <h2 className="title">Meet our team</h2>
      <p className="text-neutral-200">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
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
            <div className="mt-2 py-2 rounded-lg font-medium text-center bg-brand">
              {member.role}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Team;
