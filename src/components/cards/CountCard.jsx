const CountCard = ({ number = 0, content = "" }) => {
    return (
      <div
        style={{
          backgroundColor: "#585858cc",
          boxShadow: "0 2px 10px #00000033",
        }}
        className="w-full h-full rounded-lg p-2 text-white flex flex-col justify-start items-center gap-y-1"
      >
        <h2 className="font-semibold text-[35px]">{number}+</h2>
        <p className="text-[14px] text-center">{content}</p>
      </div>
    );
  };
  
  export default CountCard;
  