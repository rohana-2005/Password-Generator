import React, { useCallback, useEffect, useRef, useState } from 'react'

const Password = () => {
    const [len, setLen] = useState(0);
    const [num, setNum] = useState(false);
    const [char, setChar] = useState(false);
    const [pass, setPass] = useState("");

    useEffect(()=>{
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let p = '';
        if(num)
        {
            str += '0123456789';
        }
        if(char)
        {
            str += '!@#$%^&*()_+~`|}{[]:;?><';
        }
        for(let i=0; i<len; i++)
        {
            let l = Math.floor(Math.random()*str.length);
            p+=str[l];
        }
        setPass(p);
    }, [len, num, char]);

    const copyPass = useCallback(()=>{
        window.navigator.clipboard.writeText(pass);
    }, [pass]); 
  return (
    <div className='bg-orange-100 p-8 w-max m-28 flex flex-col justify-center align-middle'>
      <h1><b>Password Generator</b></h1>
      <div>
      <input className='bg-white p-3'
      type="text"
      readOnly
      placeholder='Password'
      value={pass}
      />
      <button onClick={copyPass} className='bg-white p-3'>Copy</button><br/>
      </div>
      <div className='flex flex-row gap-10'>
      <p>Length: {len}</p>
      <input
      type='range'
      value={len}
      onChange={(e) => { setLen(parseInt(e.target.value, 10)) }}

      min={1}
      max={20}
      />
      </div>
      <div className='flex flex-row gap-7'>
      <p>Numbers: </p>
      <input
      type='checkbox'
      onChange={()=>{setNum(prev=>(!prev))}}
      />
      </div>
      <div className='flex flex-row gap-7'>
      <p>Characters: </p>
      <input
      type='checkbox'
      onChange={()=>{setChar(prev=>(!prev))}}
      />
      </div>
    </div>
  )
}

export default Password
