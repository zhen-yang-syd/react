import React from 'react';
//invoke API
const API_key = 'c8e76c9b4fa36112b0d8aff693cee1fc';
const city = 'Sydney';
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;

class Weather extends React.Component{
    constructor(){
        super()
        this.state={
            //是否拿到API的数据，isLoading正在加载
            isLoading: true,
            sunrise:0,

        }    
    }
    async componentDidMount(){
        //转换成json，正常写法await fetch(api)就可以了
        const response = await(await fetch(api)).json();
        console.log(response)
        const sunrise = response.city.sunrise;
        //or const {city:{sunrise}} =response;
        this.setState({
            sunrise,
            isLoading:false
        })
    }
    render(){
        const {isLoading, sunrise} = this.state;
        return(
            <>
                <h1>Sydney Weather</h1>
                {isLoading && <h1>Loading...</h1>}
                {!isLoading && sunrise}
            </>
        )
    }
}

export default Weather;
