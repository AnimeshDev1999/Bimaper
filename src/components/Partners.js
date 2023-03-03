import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import p3 from "../images/p3.jpg";
import p4 from "../images/p4.jpg";
import p5 from "../images/p5.jpg";
import p6 from "../images/p6.jpg";
import p7 from "../images/p7.jpg";
import p8 from "../images/p8.jpg";
import p9 from "../images/p9.jpg";
import p10 from "../images/p10.jpg";

const Partners = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 items-center w-3/4 mx-auto">
      <img className="ico-p" src={p1} alt="partner 1" />
      <img className="ico-p" src={p2} alt="partner 2" />
      <img className="ico-p" src={p3} alt="partner 3" />
      <img className="ico-p" src={p4} alt="partner 4" />
      <img className="ico-p" src={p5} alt="partner 5" />
      <img className="ico-p" src={p6} alt="partner 6" />
      <img className="ico-p" src={p7} alt="partner 7" />
      <img className="ico-p" src={p8} alt="partner 8" />
      <img className="ico-p" src={p9} alt="partner 9" />
      <img className="ico-p" src={p10} alt="partner 10" />
    </div>
  );
};

export default Partners;
