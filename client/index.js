import React from "react";
import ReactDOM from "react-dom";
import {Router} from "./router.js";
import {Home} from "./home/home.js";
import {Footer} from "./footer/footer.js";

export class App extends React.Component{
	render(){
		return(
			<div>
				<div>
					<Router />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />,document.getElementById('app'));
