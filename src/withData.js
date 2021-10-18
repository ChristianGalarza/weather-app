import React from 'react'

import axios from 'axios'

import Load from './components/load/load.component'

const withData = WrappedComponent =>{
    class WithData extends React.Component{
        constructor(props){
            super(props)
            this.state={
                weatherData:[],

            }
        }

        componentDidMount(){
            setTimeout(()=>{
                axios.get(this.props.dataSource)
                .then(
                    res => {
                        this.setState({weatherData:res.data})
                    }
                )
            },1500)
        }

        componentDidUpdate(prevProps){
            if(this.props.dataSource !== prevProps.dataSource){
                this.componentDidMount()
            }
        }

        render(){
            
            const { dataSource, ...otherProps } = this.props;
            return this.state.weatherData.length < 1 ? (
            <Load />
            ) :(
                <WrappedComponent data={this.state.weatherData} {...otherProps} />
            )
        }
    }
    return WithData
}

export default withData