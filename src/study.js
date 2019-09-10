import React from 'react';

class Renderlist extends React.Component{
    render(){
        const items ={this.props.item};
        return(
            <ul className="shiritori">
                {item.map(item=><li>{item}</li>)}
            </ul>;
        )
    }
}

ReactDOM.render(<Renderlist items={["コアラ","ラッパ","パリ","リンゴ"]}/>)
document.querySelector('#app')

class SelectItem extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected:"",
        };
    }
    this.onChange.bind(this);

    onChange(e){
        this.setState({selected:e.target.value});
    }

    render(){
        const {selected}=this.state;
        return(
            <div>
                <p>現在{selected}が選択されています。</p>
                <label>
                    <input type="radio" value="コアラ" onChange={this.onChange}>コアラ</input>
                    <input type="radio" value="ラッパ" onChange={this.onChange}>ラッパ</input>
                    <input type="radio" value="パリ" onChange={this.onChange}>パリ</input>
                </label>
            </div>

        )
    }
}

ReactDOM.render(<SelectItem/>, document.querySelector('#app'));



<Paper className={classes.paper}>
      <Grid className="sidebar" container spacing={3}>
        <Grid item xs={6} sm={12}>
          <Paper className={classes.selectFeaturedPost}>
            {
            <img 
              style={{display:'none'}}
              src="https://source.unsplash.com/user/erondu"
              alt="background"
            />
            }
          </Paper>
        </Grid>

        <Grid item xs={6} sm={12}>
          <Grid container item xs>
            <Typography variant="h5">
              Item name / W600hH500D300 verR etc...
            </Typography>
          </Grid>
          <Grid container>
            <Grid container item sm={12}>
              <DataRow 
                item={
                  <Typography variant="h7">
                    Maker Name(logo)
                  </Typography>}
                data={
                  <Button variant="contained" className={classes.button}>
                    Maker HomePage Link
                  </Button>}
              />
              <DataRow 
                item={
                  <Typography variant="h7">
                    Item Size
                  </Typography>}
                data={
                  <Typography variant="h7">
                    W:600 H:500 D:300
                  </Typography>}
              />
            </Grid>
            <Grid item>
            </Grid>
            <Button variant="contained" color="primary" className={classes.button}>
              Maker Link
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              link2
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              link3
            </Button>
          </Grid>
        </Grid>
      </Grid>
      </Paper>