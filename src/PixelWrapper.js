import React from 'react';
import PixelWindow from './PixelWindow';
import PixelLogWindow from './PixelLogWindow';
import InfoBarGrid from './InfoBarGrid';
import InfomationCard from './InfomationCard';
import Appbar from './Appbar';
import BreadCrumbs from './BreadCrumbs';
import ListTab from './listTab'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


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
                <Container maxWidth="100%">
                    <Appbar/>
                    <BreadCrumbs/>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm>
                            <Paper className='playerwrapper'>
                               <PixelWindow load={load}/>
                            </Paper>
                            <ListTab/>
                        </Grid>
                        <Grid item xs={12} sm={4} className='sidebar'>
                            <InfoBarGrid/>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid item xs={12} sm={9}>
                            <Paper className={classes.paper}>C2 xs=12 sm=9</Paper>
                        </Grid>
                    </Grid>
                </Container>
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
      flex:0,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

  }));

