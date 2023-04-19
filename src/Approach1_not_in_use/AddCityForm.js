import './AddCityForm.css';

function AddCityForm(){
    return (       
        <div className="AddCityFormHeader">
          <span className="AppName">MyWeather</span>
          <input type="text" className="CityInput" placeholder="Enter a city"></input>
        </div>
    );
}

export default AddCityForm;