import { createContext, useContext } from "react";

export interface User {
      name: string,
      isActive : boolean
}

export const DashboardContext = createContext<User | undefined>(undefined);

export const UseDasbordContext = ()=>{
      const user = useContext(DashboardContext);

      if(user === undefined){
            throw new Error ('user must be used within a useContext provider')
      }return user
}
