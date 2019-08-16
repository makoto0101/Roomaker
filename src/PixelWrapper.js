import React from 'react';
import PixelWindow from './PixelWindow';
import PixelLogWindow from './PixelLogWindow';


class PixelWrapper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            load: window.load,
            logs: [],
            addResponseEventListener: window.addResponseEventListener,
            removeResponseEventListener: window.removeResponseEventListener,
            emitUIInteraction: window.emitUIInteraction,
        };
        // this.myHandleResponseFunction = this.myHandleResponseFunction.bind(this);
    }

    myHandleResponseFunction =(data)=>{
        console.log(data);
        this.setState({
            logs: this.state.logs.concat(data)
        });
    }

    componentDidMount(){
        this.state.addResponseEventListener("handle_responses", this.myHandleResponseFunction);
        console.log("atached handler");
    }

    componentWillUnmount(){
        this.state.removeResponseEventListener("handle_responses");
        console.log("removed handler");
    }

    execPrintString(text) {
        let descriptor = {
            Command: 'PrintString',
            Value: text
        }

        this.state.emitUIInteraction(descriptor);
    }

    render(){
        const {load, addResponseEventListener, removeResponseEventListener, logs} = this.state;
        return(
        <div style={style}>
            <PixelWindow load={load} />
            <PixelLogWindow 
                addResponseEventListener={addResponseEventListener} 
                removeResponseEventListener={removeResponseEventListener}
                logs={logs}
            />
            <button onClick={()=>this.execPrintString("1")}>Button</button>
        </div>
        )
    }
}

export default PixelWrapper;

const style = {
    display:"flex",
}        

