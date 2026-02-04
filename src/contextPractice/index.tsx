import { useState } from "react"
import { User } from "./context"
import { DashboardContext } from "./context"
import Dashboard from "./dashboard"



const Demo = () => {

    const [user] = useState<User>({
      name: 'bishop',
      isActive: false
    })   
  return (
    <DashboardContext.Provider value={user}>
      <Dashboard/>
    </DashboardContext.Provider>
  )
}

export default Demo