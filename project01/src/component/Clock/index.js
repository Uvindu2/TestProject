import React from "react";
class Clock extends React.Component{

    constructor(props)
    {
        super(props);
        
        this.state={
            date:new Date(),
            name:"Uvindu"
        }

    }

    tick()
    {
        this.setState({
            date:new Date(),
        })
        console.log("Timer is work")
    }

    componentDidMount(){
        console.log("Mounted")
        this.timer=setInterval(()=>{
            this.tick()
        },1000);
    }
    componentWillUnmount()
    {
        console.log("will unmount")
        clearInterval(this.timer)
    }

    render(){
        return(
            <div>
            <div>Time is: {this.state.date.toISOString()}</div>
            <div>Name is: {this.state.name}</div>
            </div>
        )
    }
}
export default Clock;