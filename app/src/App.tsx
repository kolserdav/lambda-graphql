import React from 'react';
import './App.css';
import * as dotenv from 'dotenv';
import Navbar from './components/navbar';
import { 
	ClassesProps, 
	RequestConfig, 
	RequestResolve, 
	SchemaGraphQL
} from './types';
import Schema from './schemas';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { red, yellow, brown } from '@material-ui/core/colors';
import request from './request';

import axios from 'axios';



dotenv.config();


const theme = createMuiTheme({
	palette: {
		type: 'light',
		secondary: {
			main: yellow[500]
		},
		primary: {
			main: red[300],
		}
	}
});

const useStyles = makeStyles(theme => ({
	title: {
		color: theme.palette.primary.dark
	},
	menuButton: {
		color: 'yellow'
	},
	rigthPosition: {
		color: 'brown'
	},
	wrapper: {
		margin: 'auto'
	}
}));

function typeRequest() {
	const vari: string = 'audiocapt343';
	const query: string = Schema.createMess(vari)
	const argv: RequestConfig = {
		url: 'http://localhost:3002',
		method: 'post',
		data: {query: query},
		headers: {
			'Content-Type': 'application/json'
		}
	}
	const resolve: RequestResolve<object> = {
		pullData: (data: string) => { 
			console.log({sd: data}) 
		}
	}
	request(argv, resolve);
}

function App() {
	React.useEffect(() => {
		console.log('mounted')
	}, []);
	const [dataState, setDataState] = React.useState(true);
	const classes: ClassesProps = useStyles(theme);
	const api = process.env.REACT_APP_LOCAL_API;
	const load = true;
	return (
		<div className="App">
			<ThemeProvider theme={ theme }>
				{dataState? <CircularProgress color="secondary" /> : <Navbar classes={ classes } />}
			</ ThemeProvider> 
		</div>
	);
}

export default App;
