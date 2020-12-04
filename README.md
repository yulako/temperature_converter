# temperature_converter

This webapp easily converts temperature from Celsius and Fahrenheit or vice versa.

# Documentation


## Technologies used
  
  - Webpack 
    - webpack was used for its customizable feature, better development process, easy to implement with React and supports hot module replacement. 

  - React 
    - React was used because of its components reusability and modularity 
  

## Design decisions

The App component should have a title that allows the user to know what this project is. I then thought that I needed some component that will allow me to convert Fahrenheit to Celsius and vice versa. 
When I started creating my conversion component, I knew that it had to contain some state. I decided to use react hooks because I found it very easy to manipulate state. My hook contained two properties, c and f which will store the values of Celsius and Fahrenheit. I then thought that I needed a function in order to convert from Celcius to Fahrenheit and vice versa so I created two functions. One converts to Celsius and the other to Fahrenheit. Next I decided to create two input fields which will hold the value of Celsius and Fahrenheit. I wanted these inputs to update the value dynamically so I made it so that each time a user types it updates on that change instead of having a button that does that action. 
I designed the conversion box to be a target of interest, therefore I placed it in the center of the user’s screen with a pink background.

In order to implement dark mode I decided to use hooks that holds the current mode I am (Darkmode or Lightmode). Because React has one way data flow, I decided to hold state in the parent component which is App so that I can track the mode in both the parent and child component. I created a button which invokes my hook, switch dark, which sets the state to be the opposite of the mode you are currently on. Depending on the current mode, I made it so that it sets the current class to be either light-mode or dark-mode for the container div.


## Getting started

### Setup

  - Install dependencies 
      `npm install`

### How to build

  `npm run build`

### Run locally
  
  - Run server
      `npm start`, browse at http//localhost:3000
  
### How to run on production

  `npm run dev`



