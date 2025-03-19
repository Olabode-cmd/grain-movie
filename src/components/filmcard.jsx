const Filmcard= (props)=>{
    return (
      <div className="group">
        <div className="h-[350px] w-full overflow-hidden">
          <img
            src={props.poster}
            alt=""
            className="w-full h-full object-cover group-hover:scale-[1.05] duration-200"
          />
        </div>
        <div>
          <h1 className="font-bold">{props.title}</h1>
          <p>{props.releaseDate}</p>
        </div>
      </div>
    );
}
export default Filmcard