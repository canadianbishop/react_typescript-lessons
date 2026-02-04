import {UseDasbordContext } from "./context"


export const Sidebar = () => {

     const user = UseDasbordContext()
  return (
    <div>
      {user.name}
    </div>
  )
}
export const Profile = () => {
      const user = UseDasbordContext()
  return (
    <div>
      {user?.isActive}
    </div>
  )
}
