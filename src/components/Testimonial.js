import CustomerCard from "./CustomerCard";
import c1 from "../images/p8.jpg";
import c2 from "../images/p7.jpg";
import c3 from "../images/p6.jpg";
import c4 from "../images/p3.jpg";

const Testimonial = () => {
  const cust = [
    {
      ico: c1,
      name: "Clay Mansion",
      span: "row-span-2",
      desc: "Manufacturing Firm",
      text: "Before we partnered with Bimaper, we had extremely outdated infrastructure and gear that wasn't up to par. We started out with a one-man IT company that was unable to meet our needs. Bimaper replaced our server and put us in a domain environment, and they kept us informed of their reasoning every step of the way. Essentially, they brought us up to date.",
    },
    {
      ico: c2,
      name: "ProzForce",
      desc: "Recruitment Company",
      text: "Bimaper is driven by a passion to create and deliver on new ideas, and that is reflected in their work. It is a team that strives for excellence and is open to experimenting and creating new trends in the business. Our working relationship has been productive, and we have collectively been able to achieve great results. I wish Team Bimaper more triumphs in the future.",
    },
    {
      ico: c3,
      name: "Wilman Infraprojects",
      desc: "Construction Business",
      text: "Bimaper has provided unmatchable customer service with a tremendous quality of service that has resulted in minimized downtime and disruption. We have peace of mind knowing there is a large team of experts behind us, guaranteeing high levels of service and solutions that give our business a competitive edge.",
    },
    {
      ico: c4,
      name: "Jan Suwidha",
      desc: "Social Welfare",
      text: "We began working with Bimaper right before the COVID-19 pandemic. There probably couldn't be a more stressful time to onboard with a new IT company, but Bimaper has been amazing! We are probably one of their smaller clients, and many of their larger companies also had significant issues at the beginning of the pandemic. However, Bimaper never made us feel small. We are not sure what we would have done if we hadn't hired Bimaper. They saved us!",
    },
  ];

  return (
    <div className="bg-tint1">
      <div className="flex py-20 flex-col justify-center gap-10  w-3/4 mx-auto">
        <h2 className="font-bold text-4xl mb-4">Word from our clients</h2>
        <div className="grid grid-cols-2 gap-6">
          {cust.map((item) => (
            <CustomerCard detail={item}></CustomerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
