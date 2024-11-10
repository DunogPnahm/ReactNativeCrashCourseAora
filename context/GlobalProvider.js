import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCurrentUser } from '../lib/appwrite';

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load initial login state from AsyncStorage
    const loadLoginState = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        const loggedIn = storedUser !== null;
        setIsLoggedIn(loggedIn);
        setUser(loggedIn ? JSON.parse(storedUser) : null);
      } catch (error) {
        console.log("Failed to load login state:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadLoginState();
  }, []);

  const handleLogin = async (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    await AsyncStorage.setItem("user", JSON.stringify(userData)); // Store user data
  };

  const handleLogout = async () => {
    setIsLoggedIn(false);
    setUser(null);
    await AsyncStorage.removeItem("user"); // Clear user data on logout
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        user,
        isLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
