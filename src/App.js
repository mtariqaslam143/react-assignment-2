import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentCard(props){
 return(  
   <div className='col-md-4'>
    <div className='card shadow p-3 mb-4 rounded'>
      <div className='card-body text-center'>
        <h4 className='card-title'>{props.name}</h4>
        <p className='card-text'>course: {props.course}</p>
        <p>ROLL NO: {props.roll}</p>

      </div>
    </div>

  </div>
 );
}
//function app
function App(){
  return(
    <div className='container mt-4'>
      <h1 className='text-center mb-4'>Students ID</h1>
      <div className='row'>
        <StudentCard name="ali" course="react" roll="102"/>
        <StudentCard name="fahad" course="jquery" roll="130"/>
        <StudentCard name="sara" course="html" roll="150"/>
      </div>

    </div>
  );
}
export default App;