import { type PropsWithChildren } from "react";

// interface componetProps {
//   name:string,
//    id:number
//    children?:React.ReactNode
//   }

  type ComponentProps = PropsWithChildren< {
    name:string ,
    id:number
  }>

function Component({name, id, children}: ComponentProps) {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Id:{id}</h1>
      {children}
    </div>
  );
}
export default Component;
