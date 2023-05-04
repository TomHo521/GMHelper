import React, { createContext, useState } from "react";

// Create a context for your object
export const PlayerContext = createContext(null);

// Create a component to provide the context
export const PlayerContextProvider = ({ children }) => {
  const [thisPlayer, setThisPlayer] = useState({ 
    name: 'Zovinar',
    class: 'Fighter',
    level: 8,
    hp: 54,
    str: 15,
    dex: 15,
    cha: 15,
    int: 15,
    wis: 15,
    con: 15,

  });

  return (
    <PlayerContext.Provider value={{ thisPlayer, setThisPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};