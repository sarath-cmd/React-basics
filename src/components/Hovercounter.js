import {useState} from 'react'

function Hovercounter() {

  const [Count, setCount] = useState(0)

  const handleHover = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <section>
      <div>
        <h1 className='flex justify-center text-3xl font-bold bg-black text-lime-400 p-[1.5%]'>Hover counter</h1>
        <div className="flex justify-center mt-56">
          <button onMouseEnter={handleHover} className='bg-black text-2xl font-bold text-lime-400 p-[1%] rounded-2xl'>Hover over me to count</button>
        </div>
        <h2 className='mt-10 font-bold text-2xl flex justify-center'>No.of times Hovered: {Count} Times</h2>
      </div>
    </section>
  );
}

export default Hovercounter;
