import { PropsWithChildren } from "react"
interface ComponentTypes{
  name:string, 
  id: number,
  // children?:React.ReactNode
}

type component = PropsWithChildren<ComponentTypes>

const Component = ({name, id, children}: component) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
      {children}
    </div>
  )
}

export default Component