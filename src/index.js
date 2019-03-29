import React from 'react';
import faker from 'faker';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
      <div>
        <h4>KAMEJAMEJA!!!</h4>
        LA CUMBIA DE GOKU
      </div>
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail pic={faker.image.avatar()} author="PanchoDelRancho" timeAgo="Today at 4:45PM" text="I love fucking pulque"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail pic={faker.image.avatar()} author="KittyFilth" timeAgo="Today at 7:15PM" text="CRADDDDLEEEEE"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail pic={faker.image.avatar()} author="ElChiquilin" timeAgo="Today at 6:66PM" text="Un tequilita, dos tequilita"/>
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));

// http://semantic-ui.com let's install it!
// https://cdnjs.com/libraries/semantic-ui
// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
