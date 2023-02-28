// TODO - perform redesign on this component

const Card = () => {
  return (
    <div className="relative h-96 w-full min-w-full cursor-pointer rounded-lg bg-slate-400 p-6 shadow-xl duration-200 hover:scale-105 hover:shadow-2xl">
      <div className="absolute bottom-0 py-8">
        <h1 className="text-3xl font-bold">Project Title</h1>
      </div>
    </div>
  );
};

export default Card;
