import React, { Component } from 'react';
//import Showrats from '/components/Showrats'
//import './App.css';

class Showrats extends Component {
  render() {
    return (
      <div className="showrats">
        <h3>Rat's Favorite Food</h3>
        <h4>Rat Pellet</h4>
        <p>
          Most pet rats handily eat and thrive on basic diets of rat pellet, also known as "lab blocks." Rat pellet, commercially produced, is specially formulated and balanced to satisfy the specific nutritional requirements of rats, including minerals and vitamins. The ASPCA recommends rat pellet that features soy meal as its predominant component.
        
          <h4>Fresh Items</h4>
          Apart from the pellet foundation of a rat's diet, the little guys require fresh vegetables and fruits on a daily basis, the ASPCA website says. Fresh items are nutritious for rats, who like eating them -- a win-win for sure. Chop rat-friendly veggies and fruits into small and manageable pieces and offer them to your pet. Suitable options include melons, broccoli, peas, pears, bananas, apples, carrots and peaches.
        
  </p>
  
        <span>
        <a href="rats-3.jpg" alt="another-cute-rat">
          
            <img src="rat-3.jpg" alt="awesome-rat" class="rat-image"/>
        </a>
        </span>
        <span>
          <a href="rat4.jpg" alt="awesome-rat">
            <img src="rat4.jpg" alt="awesome-rat" class="rat-image"/>
          </a>
        </span>



      </div>
    );
  }
}

export default Showrats;
