import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const initialState = [
    { label: "Notion", icon: "notion", id: 0, added: false },
    { label: "NopenSpeed", icon: "", id: 1, added: false },
    { label: "slack", icon: "slack", id: 2, added: false },
    { label: "Jira", icon: "jira", id: 3, added: false },
    { label: "MS Azure", icon: "azure", id: 4, added: false },
    { label: "Nginx", icon: "nginx", id: 5, added: false },
    { label: "Zoom", icon: "zoom", id: 6, added: false },
    { label: "webpack", icon: "webpack", id: 7, added: false },
    { label: "AWS", icon: "aws", id: 8, added: false },
  ];
  const [allApps, setAllApps] = useState(initialState);
  const addApps = (id) => {
    const modifiedApps = allApps.map((app) => {
      return app.id === id ? { ...app, added: true } : app;
    });
    setAllApps(modifiedApps);
  };

  // Remove apps
  const removeApps = (id) => {
    const modifiedApps = allApps.map((app) => {
      return app.id === id ? { ...app, added: false } : app;
    });
    setAllApps(modifiedApps);
  };

  return (
    <AppContext.Provider value={{ allApps, setAllApps, addApps, removeApps }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
