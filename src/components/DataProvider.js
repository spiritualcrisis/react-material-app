import React, { useState, useEffect, createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  //setting an initial state for context with none of the apps are added
  const initialState = [
    { label: "Notion", icon: "notion", id: 0, added: false },
    { label: "slack", icon: "slack", id: 2, added: false },
    { label: "Jira", icon: "jira", id: 3, added: false },
    { label: "MS Azure", icon: "azure", id: 4, added: false },
    { label: "Nginx", icon: "nginx", id: 5, added: false },
    { label: "Zoom", icon: "zoom", id: 6, added: false },
    { label: "webpack", icon: "webpack", id: 7, added: false },
    { label: "AWS", icon: "aws", id: 8, added: false },
  ];

  // set intial state
  const [allApps, setAllApps] = useState(initialState);

  //method to add apps i.e toggle added flag to true
  const addApps = (id) => {
    const modifiedApps = allApps.map((app) => {
      return app.id === id ? { ...app, added: true } : app;
    });
    setAllApps(modifiedApps);
  };

  // Remove Apps : method to add apps i.e toggle added flag to true
  // better version of this would be to ask user if he is sure about removing the app from list.

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
