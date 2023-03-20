import React, {
    createContext,
    useCallback,
    useContext,
    useState,
    useEffect,
} from "react";
import { getProfileData, updateProfileData } from "../utils/IPC/ProfileIpc";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [profile, setProfile] = useState(null);

    const getProfile = useCallback(async () => {
        const result = await getProfileData();
        setProfile(result);
    }, []);

    const updateProfile = async (newModel) => {
        const newData = await updateProfileData(newModel);
        console.log("data received", newData);
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <AppContext.Provider value={{ profile, updateProfile }}>
            {children}
        </AppContext.Provider>
    );
};
