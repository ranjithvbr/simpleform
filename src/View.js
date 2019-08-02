import React from 'react';

class View extends React.Component {
render(){
  return(
    <div className="headingmargin ">
    Name:{this.props.title[this.props.indexvalue].name}<br />
    Email:{this.props.title[this.props.indexvalue].email}<br />
    Address:{this.props.title[this.props.indexvalue].address}<br />
    Phone:{this.props.title[this.props.indexvalue].phone}<br />
    <a href="/">Back</a>
    </div>
  )
}
}

export default View;
