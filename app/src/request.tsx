import React from 'react';
import axios from 'axios';
import { RequestConfig, RequestResolve } from './types';

const request = (args: RequestConfig, resolve: RequestResolve<object>) => {
	axios(args).
		then(response => {
			resolve.pullData(response.data);
		});
}


export default request;
