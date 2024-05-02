import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className=" mx-auto absolute bottom-10 left-0">

      <ul className="flex">
        <li className="inline">
          <Link to="/">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              1.Show and Hide
            </button>
          </Link>
        </li>

        <li className="inline">
          <Link to="/Progressbar"  className="inline">
            <button className="p-[7%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              2.Progressbar
            </button>
          </Link>
        </li>

        <li>
          <Link to="/Formdata"  className="inline">
            <button className="p-[7%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              3.Formdata
            </button>
          </Link>
        </li>

        <li>
          <Link to="/Hovercounter"  className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              4.Hover Counter
            </button>
          </Link>
        </li>

        <li>
          <Link to="/Enableanddisablebtn"  className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              5.Button Enable, Disable
            </button>
          </Link>
        </li>

        <li>
          <Link to="/Localstorage"  className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              6.Local Storage
            </button>
          </Link>
        </li>
        
        <li>
          <Link to="/Temperatureconvertor"  className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              7.Temperature Convertor
            </button>
          </Link>
        </li>

        <li>
          <Link to="/Copytoclipboard"  className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              8.Copy to Clipboard
            </button>
           </Link>
        </li>

        <li>
          <Link to="/Lightanddarktheme"  className="inline">
            <button className="p-[3%] bg-black text-lg text-lime-400 font-extrabold rounded-2xl m-4">
              9.Light and Dark theme
            </button>
          </Link>
        </li>
      </ul>

    </div>
  );
}

export default Navigation;