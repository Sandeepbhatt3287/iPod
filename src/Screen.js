
import React from 'react';
import Home from './Home';
import Music from './Music';


class Screen extends React.Component{
    render(){
        return(
            <div className="inner-player">
                 {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/>:null}
                 {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/>:null}
            </div>
        )
    }
}


export default Screen;
