import { useState } from "react";
import "./App.css";
import "./index.css";
import logo from '../public/weather.svg'
import SearchIcon from "@mui/icons-material/Search";
import { useStateContext } from "./Context";
import BackgroundLayout from "./components/BackgroundLayout";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";

function App() {
  const [input, setInput] = useState("");

  const { weather, location, values, place, setPlace } = useStateContext();
  console.log(weather.iconString);

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white">
      
      <nav className="navbar navbar-expand-sm glassCard ">
        <div className="container-fluid ">
          <div className="w-100 flex justify-center ">
            <a
              className="navbar-brand font-bold tracking-wide text-3xl text-black flex "
              href="#"
            >
             <img className="me-1" src={logo} alt="weather_app_logo"/>WeatherWise
            </a>
          </div>
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <div className="flex justify-center my-3">
        <div className="bg-white w-[18rem] overflow-hidden shadow-2xl rounded flex items-center  p-2 gap-2 ">
          <SearchIcon style={{ color: "black" }} />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                //submit form
                submitCity();
              }
            }}
            placeholder="Search City"
            type="text"
            className="focus:outline-none w-fuull text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          
        </div>
        <button className="btn btn-primary ms-1" onClick={()=>submitCity()}>Search</button>
      </div>

      <main className=" w-full flex flex-warp px-[10%] items-center justify-center">
        <div className="row container-fluid">
          <div
            className="col-12 col-lg-6 flex justify-center mb-2"
            
          >
            <WeatherCard
              place={location}
              windSpeed={weather.wspd}
              humidity={weather.humidity}
              temperature={weather.temp}
              heatIndex={weather.heatindex}
              iconString={weather.conditions}
              conditions={weather.conditions}
            />
          </div>
          <div className="col-12 col-lg-6 mt-2">
            <div
              className="flex justify-center gap-8 flex-wrap"
              
            >
              {values?.slice(1, 7).map((curr) => {
                return (
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
                    temp={curr.temp}
                    iconString={curr.conditions}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
