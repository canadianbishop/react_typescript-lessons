import { useState } from "react";
import { boolean } from "zod";


interface Link{
  id:number,
  url:string,
  text:string
}

const navLinks: Array<Link> = [
  {
    id: 1,
    url: 'url1',
    text: 'some text'
  },
  {
    id: 2,
    url: 'url2',
    text: 'some text'
  },
  {
    id: 2,
    url: 'url3',
    text: 'some text'
  },
]


function Component() {
  
  // const [isActive, setIsActive] = useState(false);
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [list, setList] = useState<string[]>([]);
  const [links, setLinks]= useState(navLinks)



  return (
    <div>
      <h2 className="mb-2">React & Typescript</h2>
      <button className=" btn  btn-center " onClick={()=> 
        {setIsActive(true)
          setLinks([...links, {id:27, url: 'fjdj', text: 'th'}])
        }}>click me </button>
    </div>
  );
}
export default Component;
