import heroImg from "../images/home-font.png";

const Hero = () => {
  return (
    <div className="py-20 flex justify-between items-center w-3/4 mx-auto">
      <div className="w-1/2 flex flex-col gap-6 items-start">
        <h1 className="font-bold text-6xl">
          <span className="text-shade3">Bimaper</span>. Making businesses <br />{" "}
          better through technology.
        </h1>
        <p className="font-normal text-xl text-slate-700">
          State-of-the-art infrastructure, modern technology, <br /> well
          qualified and experienced human resources with high end software
          technology.
        </p>
        <button className="bg-shade3 hover:bg-shade2 duration-500 text-white rounded-md text-xl p-4">
          Browse services
        </button>
      </div>
      <div className="w-1/2 p-8">
        <img src={heroImg} alt="Hero section image" />
      </div>
    </div>
  );
};

export default Hero;
