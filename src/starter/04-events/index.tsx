import React, { useState } from 'react';
import { object } from 'zod';



function Component() {
 
  const [text, setText] = useState<string>('')
const [email, setEmail] = useState<string>('')

function handleEmail(e:React.ChangeEvent<HTMLInputElement>):void{
    setEmail(e.target.value)
}

const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();

  // const formdat = new FormData(e.currentTarget)
  // const formdata = new FormData(e.target as HTMLFormElement);
  // const data = Object.fromEntries(formdata);

  // const text = formdata.get('text') as string;

}



  return (
    <section>
      <h2>Events</h2>
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
          value={text}
          name='text' 
           className='form-input mb-1' 
           onChange={e=> setText(e.target.value)}
         />
        <input 
        type="email"
          value={email} 
           className='form-input mb-1'
           name='email'
           onChange={handleEmail}
         />

         <button className='btn btn-block' type='submit'>submit</button>
      </form>
    </section>
  );
}
export default Component;
