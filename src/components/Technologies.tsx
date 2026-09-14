
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import type { Technology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load technologies:", err);
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {

    const alreadyAdded = stack.find(
      (item) => item.id === tech.id
    );

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    
    const categoryAlreadyAdded = stack.find(
      (item) => item.category === tech.category
    );

    if (categoryAlreadyAdded) {
      toast.warning(
        `${tech.category} technology is already selected!`
      );
      return;
    }

    setStack([...stack, tech]);

    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.info("Technology removed");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed");
  };

  return (
    <section
      id="technologies"
      className="bg-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

       
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-gray-500 mt-2">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            Loading technologies...
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isSelected={stack.some(
                    (item) => item.id === tech.id
                  )}
                  onAdd={handleAddToStack}
                />
              ))}
            </div>

          
            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;