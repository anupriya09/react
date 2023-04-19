import CityWeather from './CityWeather';
import AddCityForm from './AddCityForm';
import './WeatherDashboard.css';

const testData = [
  {
    city:"Toronto",current:"8",high:"11",low:"2",humidity:"70"
  },
  {
    city:"Kitchener",current:"9",high:"13",low:"1",humidity:"80"
  },
  {
    city:"Oakville",current:"10",high:"15",low:"0",humidity:"90"
  }
];


function WeatherDashboard(){

  return (       
     <div className="WeatherDashboard">
        <AddCityForm />
        <CityWeather weatherData = {testData} />
      </div>
    );
}

export default WeatherDashboard;