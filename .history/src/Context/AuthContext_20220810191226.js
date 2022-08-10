import React, { useState } from 'react';
const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
