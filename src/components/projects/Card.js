const Card = (props) => {
  return (
    <div className="w-full cursor-pointer border border-[#bdbdbd] duration-200 hover:-translate-y-5">
      <div className="h-64 w-full bg-primary bg-opacity-80"></div>
      <div className="py-4 px-8">
        <h1 className="text-3xl font-bold">{props.project.title}</h1>
        <p className="flex gap-2">
          {props.project.techs.map((tech) => {
            return (
              <span className="my-1 rounded-full bg-gray-300 bg-opacity-50 px-2 py-[.5px] text-sm text-gray-600 duration-200 hover:bg-slate-400 hover:text-gray-900">
                {tech}
              </span>
            );
          })}
        </p>
        <p className="mt-2 text-gray-600">{props.project.description}</p>
      </div>
    </div>
  );
};

export default Card;
