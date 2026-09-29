const Country = ({ country, handleVisited }) => {
  const { name, flags, population, independent, cca2, area, region } = country;
  return (
    <div className="h-[416px] w-[280px] m-5 p-5 rounded-xl bg-gray-200 flex flex-col justify-center items-center">
      <img
        className="p-5 rounded-xl h-48 max-w-96"
        src={flags?.svg}
        alt={flags?.alt}
      />
      <h3 className="font-bold uppercase">
        {name?.common} ({cca2})
      </h3>
      <p className="font-bold uppercase text-green-500">
        {independent ? "Independent" : "Not Independent"}
      </p>
      <p className="text-base">
        Area:&nbsp;
        <span className="font-bold text-red-400">{area}</span>
      </p>
      <p className="text-base">
        Region:&nbsp;
        <span className="font-bold text-red-400">{region}</span>
      </p>
      <p className="text-base">
        Population:&nbsp;
        <span className="font-bold text-yellow-400">{population}</span>
      </p>
      <button
        onClick={() => handleVisited(country)}
        className="btn w-full my-5 border-none rounded-xl"
      >
        Add to Visited
      </button>
    </div>
  );
};

export default Country;
