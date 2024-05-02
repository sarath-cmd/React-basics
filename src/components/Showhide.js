import {useState} from 'react';

function Showhide() {

  const [Display, setDisplay] = useState(false)

  const handlebtn = () => {
    setDisplay(!Display)
  }

  return (
    <div>
      <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>Show and Hide</h1>
      <div className='flex justify-center mt-[30vh]'>
        <button onClick={handlebtn} className='bg-black text-xl font-semibold text-lime-400 p-[1%] rounded-2xl'>Show/hide</button>
      </div>
      {Display && <h2 className='flex justify-center font-bold text-3xl mt-5'>Welcome to React Challenge</h2>}
    </div>
  );
}

export default Showhide;
