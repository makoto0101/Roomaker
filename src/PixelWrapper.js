import React from 'react';
import PixelWindow from './PixelWindow';
import PixelLogWindow from './PixelLogWindow';
import GridLayout from './GridLayout';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


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
                        <Paper className='playerwrapper'>
                           <PixelWindow load={load}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper className={classes.paper}>C1 xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item xs={6} sm={12}>
                        <Paper className={classes.paper}>C2 xs=6 sm=12</Paper>
                    </Grid>
                </Grid>
            </div>

        //<div style={style}>
        //    <PixelWindow load={load} />
        //    <PixelLogWindow 
        //        addResponseEventListener={addResponseEventListener} 
        //        removeResponseEventListener={removeResponseEventListener}
        //        logs={logs}
        //    />
        //    <button onClick={()=>this.execPrintString("1")}>Button</button>
        //    <GridLayout load={load}/>
        //</div>
        )
    }
}

export default PixelWrapper;

const style = {
    display:"flex",
}        

const classes = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

