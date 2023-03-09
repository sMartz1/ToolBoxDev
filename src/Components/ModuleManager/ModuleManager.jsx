import React, { useEffect, useState} from 'react'
import modules from './Modules';
import ComponentRenderer from './ComponentRenderer';
export const ModuleManager =()=> {

  const [modulesState,setModulesState] = useState([]);

  useEffect(() => {
    setModulesState(modules)
  }, []);

  return (
    <div className="module-manager">
      {modulesState.map((Component,index)=>
        <ComponentRenderer key={index}><Component /></ComponentRenderer>
      )}
    </div>
  )
}
