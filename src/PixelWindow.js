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
        <div style={style}>
            <div id ="player" className="fixed-size" />
        </div>
        )
    }
}

const style = {
}

let styleAdditional = 'width:100%;	width: 100%; max-width: 100%; height: auto;';   



export default PixelWindow;


