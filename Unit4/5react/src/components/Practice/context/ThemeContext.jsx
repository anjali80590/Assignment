import{createContext,useState}from 'react';
export let ThemeContext =createContext();
export let ThemeProvider=({children})=>{
    let[theme,setTheme]=useState('light');
    function handleTheme(){
        setTheme((prev)=>prev=='light'?'black':'light')
    }
    return(
        <div>
            <ThemeContext.Provider value={{theme,handleTheme}}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}