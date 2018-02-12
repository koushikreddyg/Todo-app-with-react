import React from 'react';

var listStyle = {
    color: 'black',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    
  };



const List = props => (
    <div>
          <ul>
    {
      props.items.map((item, index) => <li style={listStyle}key={index}>{item}</li>)
    }
  </ul>
    </div>
  
);

export default List;