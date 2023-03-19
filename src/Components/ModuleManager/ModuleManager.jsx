import React, { useEffect, useState } from "react";
import modules from "./Modules";
import ComponentRenderer from "./ComponentRenderer";
export const ModuleManager = () => {
  const [modulesState, setModulesState] = useState([]);
  const [selectedModule, setSelectedModule] = useState(-1);

  useEffect(() => {
    setModulesState(modules);
  }, []);
  const changeSelectedModule = (index = -1) => {
    return setSelectedModule(index);
  };
  if (selectedModule < 0) {
    return (
      <div className="module-manager">
        {modulesState.map((Component, index) => {
          return (
            <ComponentRenderer
              setSelectedModule={() => {
                return changeSelectedModule(index);
              }}
              isSelected={false}
              key={index}
            >
              <Component
                isSelected={false}
                setSelectedModule={() => {
                  return changeSelectedModule(index);
                }}
              />
            </ComponentRenderer>
          );
        })}
      </div>
    );
  } else {
    const RenderComponent = modules[selectedModule];
    return (
      <ComponentRenderer
        setSelectedModule={changeSelectedModule}
        isSelected={true}
      >
        <RenderComponent isSelected={true} setSelectedModule />
      </ComponentRenderer>
    );
  }
};
