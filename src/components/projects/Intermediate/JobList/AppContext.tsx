import React, { createContext, useEffect, useState } from "react";

type ActiveTagsContextProps = {
  activeTags: string[];
  updateActiveTags: (tags: string[]) => void;
  deleteActiveTags: (tag: string) => void;
  clearAllTags: () => void;
};

const ActiveTagsContext = createContext<ActiveTagsContextProps>({
  activeTags: [],
  updateActiveTags: () => {},
  deleteActiveTags: () => {},
  clearAllTags: () => {},
});

const ActiveTagsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let [activeTags, setActiveTags] = useState<string[]>([]);

  const updateActiveTags = (tags: string[]) => {
    if (tags.length < 10) {
      setActiveTags(tags);
    }
  };

  const deleteActiveTags = (tag: string) => {
    const removedTagIndex = activeTags.findIndex((t) => t === tag);
    if (removedTagIndex !== -1) {
      const updatedTags = [...activeTags];
      updatedTags.splice(removedTagIndex, 1);
      setActiveTags(updatedTags);
    }
  };

  const clearAllTags = () => {
    setActiveTags([]);
  };

  useEffect(() => {
    const storedTags = localStorage.getItem("activeTags");
    if (storedTags) {
      setActiveTags(JSON.parse(storedTags));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeTags", JSON.stringify(activeTags));
  }, [activeTags]);

  const contextValue: ActiveTagsContextProps = {
    activeTags,
    updateActiveTags,
    deleteActiveTags,
    clearAllTags,
  };

  return (
    <ActiveTagsContext.Provider value={contextValue}>
      {children}
    </ActiveTagsContext.Provider>
  );
};

export { ActiveTagsContext, ActiveTagsProvider };
