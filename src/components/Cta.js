const Cta = () => {
  return (
    <div className="py-20 flex flex-col justify-center gap-6 items-center w-3/4 mx-auto">
      <h2 className="font-bold text-4xl mb-4">
        Have a <span className="text-shade3">Project</span> in mind?
      </h2>
      <p className="text-center text-lg">
        “As a global solutions integrator, our technical expertise, broad
        solutions portfolio and supply chain <br /> capabilities give us the
        right resources and scale to achieve more for you.”
      </p>
      <button className="bg-shade3 hover:bg-shade2 duration-500 text-white rounded-md text-xl p-4">
        Contact Us
      </button>
    </div>
  );
};

export default Cta;
