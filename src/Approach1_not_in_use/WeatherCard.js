import './WeatherCard.css';

function WeatherCard(props) {
    return (
    <div className="WeatherCard">
      <div>Weather Summary</div>
      <div>{props.city}</div>
      <div>{props.current} °C</div>
      <div>{props.low} °C</div>
      <div>{props.high} °C</div>
      <div>{props.humidity} %</div>
      </div>
    );
  }
  
  export default WeatherCard;