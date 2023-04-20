import Form  from 'react-bootstrap/Form';
import { Container,Card } from 'react-bootstrap';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import PostsWithAxios from './PostsWithAxios';

function AddCityForm(){
  return (    
  <Form>
    <Form.Group className="mb-3 weatherForm" controlId="formBasicEmail">
      <Form.Label>My Weather App</Form.Label>
      <Form.Control className="cityName" type="text" placeholder="Enter city"/>
    </Form.Group >
  </Form >
  );
}

interface WeatherData{
  city: string;
  current: string;
  high: string;
  low: string;
  humidity: string;
}

interface WeatherDataArray extends Array<WeatherData>{}

 const weatherDatas= [
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

function CityWeather(props:{weatherData: WeatherData;}){
  return (
    /*<>
      </>{weatherDatas.map((datum) => (*/
      <Card style={{ width: 'fit-content' , border: '0.1rem black solid', padding:'0.5rem', margin:'1rem',textAlign:'center'}}>
        <Card.Body>
          <Card.Title>Weather Summary</Card.Title>
          <Card.Text>{props.weatherData.city}</Card.Text>
                 
        </Card.Body>
      </Card>
   /* ))}
    </>*/
        
  )
}

function App() {

  const [weatherInputData, setWeatherInputData] =  useState<WeatherData>();

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=36f0ce85887320e897dbbc07cf2b74fc');
      const json = await data.json();
      setWeatherInputData(json);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [weatherInputData])

  

  return (
    <Container  className="mainContainer" >
      <AddCityForm />
      <PostsWithAxios/>
      <div   >
      </div>
    </Container>
  );
}
export default App;
