import CityWeather from './CityWeather';
import AddCityForm from './AddCityForm';
import './WeatherDashboard.css';

function WeatherDashboard(){
    return (       
     <div className="WeatherDashboard">
        <AddCityForm />
        <CityWeather />
      </div>
    );
}

export default WeatherDashboard;