const Card = (props) => {
  return (
    <div className="flex justify-center items-center gap-4 shadow-md rounded-md p-4">
      <img
        className="h-12 p-2 rounded-full bg-tint1"
        src={props.dat.ico}
        alt=""
      />
      <p>{props.dat.desc}</p>
    </div>
  );
};

export default Card;
