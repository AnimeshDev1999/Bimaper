const CustomerCard = (props) => {
  return (
    <div className="shadow-md rounded-lg bg-white p-8 flex gap-4 justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/2">
        <img className="ico-c" src={props.detail.ico} alt="" />
        <h3 className="font-semibold text-xl">{props.detail.name}</h3>
        <p className="font-semibold">{props.detail.desc}</p>
      </div>
      <p className="text-center w-1/2">{props.detail.text}</p>
    </div>
  );
};

export default CustomerCard;
