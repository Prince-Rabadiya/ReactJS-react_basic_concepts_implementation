import React from "react";

const UserContext = React.createContext('prince') // passing in default value

const UserContextProvider = UserContext.Provider
const UserContextConsumer = UserContext.Consumer

export { UserContextProvider, UserContextConsumer }