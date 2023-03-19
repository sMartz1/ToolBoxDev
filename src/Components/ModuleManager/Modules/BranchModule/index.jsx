import React from 'react'
import ModuleCard from "../ModuleCard";

const title = "Branch MODULE";
export const BranchModule = (props)=> {
  const { isSelected, setSelectedModule } = props;

  if (isSelected) {
    return (
      <div>BranchModule</div>
    );
  } else {
    return (<ModuleCard title={title} onClick={setSelectedModule} />);
  }
}
