import { createContext, useContext, useState } from "react";

type Theme = 'light' | 'Dark' | 'System';



type ThemeProviderState = {
    theme:Theme,
    setTheme: (theme:Theme)=>void
}

type ThemeProviderProps = {
    children: React.ReactNode,
    defaultTheme? : Theme
}



const ThemeProviderContext = createContext<ThemeProviderState| undefined>(undefined);

const [theme, setTheme] = useState<Theme>('Dark')

export function ThemeProvider({children, defaultTheme = 'System'}: ThemeProviderProps){
    return <ThemeProviderContext.Provider value={{theme, setTheme}}>
       {children}
    </ThemeProviderContext.Provider>
}



export function UseTheme(){
    const  context = useContext(ThemeProviderContext);
    if(context === undefined){
       throw  new Error('context must be used within a provider')
    }return context
}