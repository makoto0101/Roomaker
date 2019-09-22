import React from 'react';

class PixelWindow extends React.Component{
    constructor(props){
        super(props);
        this.state={
        };
    }

    componentDidMount(){
        // PixelStreamingのロード
        this.props.load();
    }

    componentWillUnmount(){
    }

    render(){
        return(
            <div id ="player" className="fixed-size" />
        )
    }
}

const style = {
}




export default PixelWindow;


