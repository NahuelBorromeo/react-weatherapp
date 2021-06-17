import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css';
import { WeatherForm } from './components/WeatherForm';


const App = () => {
  return (
    <div className="container p-4 my-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <WeatherForm />
        </div>
      </div>
    </div>
  )
}

export default App
