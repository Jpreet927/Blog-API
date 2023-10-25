import React, { createContext, useState, ReactNode } from "react";
import { User } from "../ts/types/User";

type Context = {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const contextDefault: Context = {
    user: null,
    setUser: () => null,
};

export const UserContext = createContext<Context>(contextDefault);

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
