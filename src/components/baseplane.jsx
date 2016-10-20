import * as React from 'react'

export class Baseplate extends React.Component {

    constructor(props, context) {
        super(props, context);
        var screen = {
            width : window.innerWidth,
            height : window.innerHeight
        } ;

        var sizeX = screen.width / this.props.width ;
        sizeX = sizeX > 40 ? 40 : Math.floor(sizeX) ;
        var sizeY = screen.height / this.props.height ;
        sizeY = sizeY > 40 ? 40 : Math.floor(sizeY) ;

        if(sizeX < sizeY) sizeY = sizeX;
        if(sizeY < sizeX) sizeX = sizeY;

        var size = sizeX ;

        var grid = {
            nbOfCellsX : Math.ceil(Math.ceil(screen.width / size) / 2) * 2 ,
            nbOfCellsY : Math.ceil(Math.ceil(screen.height / size) / 2) * 2 ,
        };

        grid.minX = grid.nbOfCellsX / -2 ;
        grid.maxX = grid.nbOfCellsX / 2 + 1 ;
        grid.minY = grid.nbOfCellsY / -2 ;
        grid.maxY = grid.nbOfCellsY / 2 + 1 ;
        grid.width = grid.nbOfCellsX * size ;
        grid.height = grid.nbOfCellsY * size ;

        this.state = {width: grid.width, height : grid.height, size: size} ;
    }

    render() {

      let style = {
        width: this.state.size,
        height: this.state.size
      }

      var divs = [];
      for (var i=0; i < this.props.height; i++) {
        for (var j=0; j < this.props.width; j++) {
          divs.push(<div key={i+"_"+j} className="lego darkgrey" style={style}/>);
        }
      }
        return (
          <div className="baseplate" style={{width: this.state.width, height: this.state.height}}>
            {divs}
          </div>
        );
    }

}

Baseplate.defaultProps = {
    height: 10,
    width: 10
};
