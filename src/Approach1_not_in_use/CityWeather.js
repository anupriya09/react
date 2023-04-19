import WeatherCard from "./WeatherCard";
import './CityWeather.css';


function CityWeather(props){
    return (
        <div className="WeatherCards">
          {props.weatherData.map(weatherDatum => <WeatherCard {...weatherDatum}/>)}
        </div> 
    );
}

export default CityWeather;