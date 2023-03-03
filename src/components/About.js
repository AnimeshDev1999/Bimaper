import Card from "./Card";
import wallet from "../images/wallet.svg";
import people from "../images/people.svg";
import resize from "../images/resize.svg";
import bulb from "../images/bulb.svg";
import cloud from "../images/cloud.svg";

const About = () => {
  const data = [
    {
      key: "1",
      ico: wallet,
      desc: "Good ratio of price, performance, quality, and speed.",
    },
    {
      key: "2",
      ico: bulb,
      desc: "A dedicated team of industry experts.",
    },
    {
      key: "3",
      ico: people,
      desc: "A belief in building a strong, long-term customer relationship based on confidence and continuity.",
    },
    {
      key: "4",
      ico: cloud,
      desc: "Move your website from the old server without any downtime.",
    },
    {
      key: "5",
      ico: resize,
      desc: "Get a responsive and fast-loading website.",
    },
  ];

  return (
    <div className="bg-shade4">
      <div className="py-20 flex justify-between w-3/4 mx-auto">
        <div className="w-1/2 flex flex-col gap-4 p-10">
          <h2 className="font-bold text-4xl mb-4">
            What is <span className="text-shade3">Bimaper</span>
          </h2>
          <p className="para">
            Bimaper Technologies & Solutions Private Limited, based in Lucknow,
            Uttar Pradesh, India, is a professionally managed complete IT
            service provider. Bimaper utilises state-of-the-art infrastructure,
            modern technology, well-qualified and experienced human resources,
            and high-end software technology.
          </p>
          <p className="para">
            {" "}
            <span className="font-bold">Our mission :</span> "To become a
            globally recognised company that provides best-of-breed IT
            solutions, delivered by best-in-class people".
          </p>
          <p className="para">
            {" "}
            <span className="font-bold">Our vision :</span> Think
            unconventionally and make sure to fulfil impossible targets while
            keeping global competitiveness and social responsibility in mind.
          </p>
          <p className="para">
            {" "}
            We’ll meet global standards for IT services that delight customers
            through prompt action and innovative service.
          </p>
          {/* <ul className="para">
              <li className="font-bold">Why Bimaper :</li>
              <li>- Good ratio of price, performance, quality, and speed.</li>
              <li>- A dedicated team of industry experts.</li>
              <li>
                - A belief in building a strong, long-term customer relationship
                based on confidence and continuity.
              </li>
              <li>
                - Move your website from the old server without any downtime.
              </li>
              <li>- You will get a responsive and fast-loading website.</li>
            </ul> */}
        </div>
        <div className="w-1/2 flex flex-col gap-4 p-10">
          <h2 className="font-bold text-4xl mb-4">
            Why <span className="text-shade3">Bimaper</span>
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {data.map((item) => (
              <Card key={item.key} dat={item}></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
