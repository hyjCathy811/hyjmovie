import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';

class ThreaterMovies extends Component{
constructor(props){
		super(props);
		this.state = {
			movies:[],
			name:''
		}
	}

	componentWillMount(){
		axios.get('../app/json/threaders.json')
		.then(response=>{
			this.setState({
				movies:response.data.subjects
			});
		})
		.catch(error=>{

		})
	}

	render(){
		return (
			<div>
				{
					this.state.movies.map((item,key)=>{
						return (
								<Col span={6} key={key}>
									<img style={{height:'150px',width:'100px'}} src={item.images.small} />
									<h4>{item.title}</h4>
								</Col>
						)
					})
				}
			</div>
		)
	}
}

export default ThreaterMovies;