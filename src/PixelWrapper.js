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
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={9}>
                        <Paper className={classes.paper}>
                          <PixelWindow load={load} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>
                            <PixelLogWindow 
                            addResponseEventListener={addResponseEventListener} 
                            removeResponseEventListener={removeResponseEventListener}
                            logs={logs}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={12}>
                        <Paper className={classes.paper}>
                            <button onClick={()=>this.execPrintString("1")}>C2 xs=6 sm=12</button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default PixelWrapper;

const style = {
    display:"flex",
}        

