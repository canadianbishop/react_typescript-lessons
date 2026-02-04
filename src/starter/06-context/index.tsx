import { ThemeProvider, UseTheme } from "./context";


function ParentComponent(){
  return (
    <ThemeProvider>
       <Component/>
    </ThemeProvider>
  )
}



const Component = () => {
const context = UseTheme();

console.log(context)

  return (
    <div> 
     <h2>react Context </h2>
    </div>
  )
}


export default ParentComponent