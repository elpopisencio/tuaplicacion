import React, { Component } from 'react';
import logo from './logo.svg';
import startup from'./icons/014-startup.png';
import './App.css';

class App extends Component {
  render() {
    return (
		 <div>
      <div className="Primera">
          <img src={startup} className="Startup" alt="logo" />
			 <h1 className="Principal">¿Tenes un negocio o una idea que necesita una aplicación para despegar?</h1>
			 <div className="Principal Boton">
				 <a href="#next">¡Dejanos ayudarte!</a>
      </div>
      </div>
      <div id="next" className="Segunda">
			 <h1 className="Principal">En tuaplicacion.com te ayudamos a que la aplicación de tus sueños deje de estar solo en tus sueños</h1>
		  <div>Icons made by <a href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov">Dimitry Miroliubov</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
      </div>
    );
  }
}

export default App;
