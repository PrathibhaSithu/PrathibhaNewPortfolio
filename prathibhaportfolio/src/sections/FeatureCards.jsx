import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg bg-[#8C715A] pt-5 pb-6">
    <div>
    <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#FFF5DE] mb-8">
        Soft Skills
    </h1>
    </div>
    <div className="mx-auto grid-4-cols">
      {abilities.map(({ imgPath, title }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;