import React, { createContext, useState } from "react";

type ActiveTagsContextProps = {
  activeTags: string[];
  updateActiveTags: (tags: string[]) => void;
};

const ActiveTagsContext = createContext<ActiveTagsContextProps>({
  activeTags: [],
  updateActiveTags: () => {},
});

const ActiveTagsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const updateActiveTags = (tags: string[]) => {
    setActiveTags(tags);
  };

  const contextValue: ActiveTagsContextProps = {
    activeTags,
    updateActiveTags,
  };

  console.log(activeTags, "tags");

  return (
    <ActiveTagsContext.Provider value={contextValue}>
      {children}
    </ActiveTagsContext.Provider>
  );
};

export { ActiveTagsContext, ActiveTagsProvider };
