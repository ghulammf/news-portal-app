function Button(props) {
  return (
    <button className="h-[36px] w-fit px-7 bg-[#5271ff] rounded-[10px] text-white">
      {props.name}
    </button>
  );
}

export default Button;
