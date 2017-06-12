import React from "react";
import PropTypes from 'prop-types';

export class Header extends React.Component{
	constructor(props){
		super()
		this.state = {
			age: props.age,
			status: 0,
			linkName: props.initialName
		};
		setTimeout( 
			() => {this.setState({
				status: 1
			})},3000);
	};

	handleClick(){
		this.setState({
			age: this.state.age + 3
		})
	};

	changeLink(){
		this.props.homeLink(this.state.linkName)
	}

	handleChange(event){
		this.setState({
			linkName: event.target.value
		})
	}

	render(){
		return (
			<div>
				<p>Hi, my name is {this.props.name} and my age is {this.state.age}!</p>
				<p>{this.state.status}</p>
				<hr/>
				{this.props.children}
				<div>
					<p>I am a {this.props.user.sex}</p>
					<h4>Hobbies</h4>
					<ul>
						{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
					</ul>
				</div>
				<button onClick={() => this.handleClick()} className="btn btn-primary">Click Me!</button>
				<button onClick = {this.props.click} className="Try me">Try Me</button>
				<hr/>
				<input type="text" value={this.state.linkName} onChange={(event) => this.handleChange(event)}/>
				<button onClick = {() => this.changeLink()}>Change Link Name</button>

			</div>			
		);
	}
}

Header.propTypes ={
	name: PropTypes.string,
	age: PropTypes.number,
	user: PropTypes.object,
	children: PropTypes.element.isRequired
};