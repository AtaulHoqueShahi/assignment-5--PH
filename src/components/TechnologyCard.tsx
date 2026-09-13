import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  tech: Technology;
  isSelected: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard = ({ tech, isSelected, onAdd }: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
        />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-grow">
        {tech.description}
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-5 text-xs">
        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          {tech.category}
        </span>
        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1 text-gray-600">
          <span className="text-yellow-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isSelected}
        className={`w-full py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
          isSelected
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
