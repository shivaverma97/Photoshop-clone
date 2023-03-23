import './App.css';
import Slider from './Slider';
import Sidebar from './Sidebar';
import { useState } from 'react';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  }
]

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const selectedOption = options[selectedOptionIndex]

  function handleOnChangeSlider(e){
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if(index !== selectedOptionIndex) return option
        return {...option, value : e.target.value}
      })
    })
  }

  function setImageStyle(){
    const filter =  options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`
    })
    
    return {filter : filter.join(' ')}
  }

  return (
    <div className='container'>
      <div className='image' style={setImageStyle()}></div>
      <div className='sidebar'>
        {options.map((option, index) => {
          return (
                <Sidebar key={index} name={option.name} selectedOption = {index === selectedOptionIndex} handleOnClick = {()=> setSelectedOptionIndex(index)}/>
        )})}
      </div>
      <Slider min = {selectedOption.range.min} max = {selectedOption.range.max} value = {selectedOption.value} handleOnChangeSlider = {handleOnChangeSlider}/>
    </div>
  );
}

export default App;
