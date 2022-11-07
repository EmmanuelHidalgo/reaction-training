import React, {createContext, useState} from "react";
export const reactionTrainingContext = createContext();

export const ReactionTrainingProvider = ({children}) => {
 const [techniques, setTechniques] = useState([]);
 const [time, setTime] = useState(1)
 return (
    <reactionTrainingContext.Provider value={{techniques, setTechniques, time, setTime}}>
      {children}
    </reactionTrainingContext.Provider>
 );
};