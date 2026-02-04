import '../../index.css'

type Advanced = {
  type: 'advanced',
  email: string,
  name: string
}


type  Basic = {
  type : 'basic',
  name: string
}


function Component(props : Basic | Advanced) {
  const alertType = props.type=== 'basic'? 'alert' : 'danger';
  const classname = `alert alert-${alertType}`

  return (
    <div className={classname}>
      <h2>React & Typescript</h2>
      <h2 className= {classname}> user:{props.name}</h2>
      <h3>{props.type}</h3>
       {props.type === 'advanced'?  <h2>{props.email}</h2> : null }
    </div>
  );
}
export default Component;
