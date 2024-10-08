import { people } from "../data/AboutData";
import img9 from "../assets/10.png";

interface SocialLink {
  url: string;
  icon: string;
}

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  description: string;
  socialLinks: SocialLink[];
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, description, socialLinks }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
    {/* Left Column - Image */}
    <div className="mx-8 w-1/2 flex justify-center items-center">
      <div className="relative group">
        <img className="rounded-lg transform transition-transform duration-300 group-hover:scale-105" src={image} alt={name} />
        <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <h3 className="text-white text-2xl font-bold mb-2">{name}</h3>
            <h4 className="text-white text-lg font-normal mb-2">{position}</h4>
            <p className="text-white text-sm mb-4">{description}</p>
            <ul className="flex justify-center">
              {socialLinks.map((link, index) => (
                <li className="mx-3" key={index}>
                  <a className="text-white hover:text-creme duration-300" href={link.url}>
                    <i className={`fa-brands fa-${link.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Right Column - Text */}
    <div className="flex flex-col justify-center mx-8 my-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{`${name} - ${position}`}</h1>
      <p className="text-lg md:text-xl mb-8">{description}</p>
    </div>
  </div>
);

function AboutUs() {
  return (
    <div className="bg-black">
      {/* Section 1 */}
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image */}
          <div className="flex justify-center items-center">
            <img src={img9} alt="Łyżka w miodzie" className="w-2/4" />
          </div>

          {/* Right Column - Text */}
          <div className="mx-8 my-8 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">O nas</h1>
            <p className="mx-8 my-8 text-lg md:text-xl mb-8">
              Witaj w Łyżka w miodzie, miejscu, gdzie pasja do włoskiej kuchni
              spotyka się z lokalnym klimatem! Nasza restauracja to rodzinny
              projekt, zrodzony z miłości do włoskich smaków i kultury, którą
              chcemy dzielić się z naszymi gośćmi. Nasze menu jest hołdem dla
              tradycyjnej kuchni Włoch – od aromatycznych makaronów, przez
              świeże owoce morza, po doskonałe pizze wypiekane w piecu.
              Starannie wybieramy składniki, współpracując z lokalnymi
              dostawcami, aby każdy posiłek był świeży, pełen smaku i
              najwyższej jakości. W Łyżka w miodzie stawiamy na prostotę i
              autentyczność – tak, jak robią to Włosi.
            </p>
          </div>
        </div>
      </section>

      {/* Team section */}
      <h1 className="bg-black my-8 text-balance text-center text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
        Oto nasz zespół!
      </h1>
      <section className="bg-black text-white py-36">
        <div className="container mx-auto">
          {people.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              description={member.description}
              socialLinks={member.socialLinks}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
