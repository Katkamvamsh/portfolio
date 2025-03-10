import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isMoreActive, setIsMoreActive] = useState({});

  const onClickReadMore = (projectId) => {
    setIsMoreActive((prevState) => ({
      ...prevState,
      [projectId]: !prevState[projectId] // Toggle only the clicked project
    }));
  };

  return (
    <Context.Provider value={{ isMoreActive, onClickReadMore }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
