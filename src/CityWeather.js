import WeatherCard from "./WeatherCard";
import './CityWeather.css';

function CityWeather(){
    return (
        <div className="WeatherCards">
          <WeatherCard city="Toronto" current="8" high="11" low="2" humidity="70" />
          <WeatherCard city="Kitchener" current="9" high="13" low="1" humidity="80" />
          <WeatherCard city="Oakville" current="10" high="15" low="0" humidity="90" />
        </div> 
    );
}

export default CityWeather;