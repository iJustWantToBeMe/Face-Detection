import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOpts = {
	particles: {
		number: {
			value: 130,
			density: {
				enable: true,
				value_area: 900
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'repulse'
			},
			onclick: {
				enable: true,
				mode: 'bubble'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 800,
				line_linked: {
					opacity: 1
				}
			},
			bubble: {
				distance: 500,
				size: 20,
				duration: 1,
				opacity: 0.8,
				speed: 3,
				color: '#FFFAFA'
			},
			repulse: {
				distance: 75,
				duration: 0.4
			},
			push: {
				particles_nb: 4
			},
			remove: {
				particles_nb: 2
			}
		}
	},
	retina_detect: true
};

const initialState = {
	input: '',
	imageUrl: '',
	box: [],
	route: 'login',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: ''
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	loadUser = data => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined
			}
		});
	};

	calcutlateFaceLocation = data => {
		const image = document.getElementById('inputImage');
		const width = Number(image.width);
		const height = Number(image.height);
		return data.outputs[0].data.regions.map(faces => {
			const clarifaiFaceBox = faces.region_info.bounding_box;
			return {
				leftCol: clarifaiFaceBox.left_col * width,
				topRow: clarifaiFaceBox.top_row * height,
				rightCol: width - clarifaiFaceBox.right_col * width,
				bottomRow: height - clarifaiFaceBox.bottom_row * height
			};
		});
	};

	displayFaceBox = box => {
		this.setState({ box: box });
	};

	onInputChange = evt => {
		this.setState({ input: evt.target.value });
	};

	onImgSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		fetch('http://localhost:3000/imageurl', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				input: this.state.input
			})
		})
			.then(response => response.json())
			.then(response => {
				if (response) {
					fetch('http://localhost:3000/image', {
						method: 'put',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							id: this.state.user.id
						})
					})
						.then(response => response.json())
						.then(count => {
							this.setState(Object.assign(this.state.user, { entries: count }));
						})
						.catch(console.log);
				}
				this.displayFaceBox(this.calcutlateFaceLocation(response));
			})
			.catch(err => console.log(err));
	};

	onRouteChange = route => {
		this.setState({ route: route });
		route === 'logout'
			? this.setState(initialState)
			: route === 'home'
			? this.setState({ isSignedIn: true })
			: this.setState({ isSignedIn: false });
	};

	// 			Alt. Code
	// onRouteChange = (route) => {
	//   if (route === 'logout') {
	//     this.setState({ isSignedIn: false })
	//   } else if (route === 'home') {
	//     this.setState({ isSignedIn: true })
	//   }
	//   this.setState({ route: route });
	// }

	render() {
		const { isSignedIn, imageUrl, box, route } = this.state;
		return (
			<div className='App'>
				<Particles className='particles' params={particlesOpts} />
				<Navigation
					isSignedIn={isSignedIn}
					onRouteChange={this.onRouteChange}
				/>
				{route === 'home' ? (
					<div>
						<Logo />
						<Rank
							name={this.state.user.name}
							entries={this.state.user.entries}
						/>
						<ImageLinkForm
							onInputChange={this.onInputChange}
							onImgSubmit={this.onImgSubmit}
						/>
						<FaceDetection box={box} imageUrl={imageUrl} />
					</div>
				) : route === 'login' ? (
					<Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
				) : (
					<Register
						loadUser={this.loadUser}
						onRouteChange={this.onRouteChange}
					/>
				)}
			</div>
		);
	}
}

export default App;
