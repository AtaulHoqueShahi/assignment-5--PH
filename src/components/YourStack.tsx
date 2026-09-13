

import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 sticky top-24">
      <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>
      <p className="text-sm text-gray-500 mb-5">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="text-center py-12 text-gray-400 text-sm leading-relaxed">
          No technology selected yet.
          <br />
          Click “Add to Stack” to start.
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 object-contain"
                />
                <div>
                  <p className="text-sm font-medium text-gray-800 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 text-lg font-medium"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 border border-red-300 text-red-500 hover:bg-red-50 py-2.5 rounded-full text-sm font-medium transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
