import AxiosRequestConfig from 'axios';

export interface ComponentProps {               
        classes: ClassesProps                                             
}                                                                      

export interface SchemaGraphQL<T> {
	createMess(mess: T): T
}

export interface RequestResolve<T> {
	pullData(data: T): void
}

export interface RequestConfig extends AxiosRequestConfig{};


export interface ClassesProps {         
        title: string                   
        menuButton: string                      
        rigthPosition: string
}


