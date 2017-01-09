import React from 'react';
import {observer} from 'mobx-react';
import ReadingTime from './reading-time';
import DevTool from 'mobx-react-devtools';

/*
  NOTE: So this whole time, every example I see is constructing their stateless component (es6) as so...

    const MyStatelessComponent = ({prop}) => return <Markup />

    The {prop} value is in curly braces, I think this is where I dun goofed. Theres probably some es6 destructuring happening here
    that I was totally ignorant of. If im not destructuring properly, than we would end up with the 'undefined' errors I
    was getting. Since im not really doing that here, ditch the braces for now. Working for now
*/

const ReactReadingTime = observer((props) => {
  const {text, textColor} = props;

  return (
    <div className='container' style={{ marginTop: '50px' }}>
      <DevTool />
      <div className='col-lg-8 col-lg-offset-2 form-group'>
        <textarea
          value={text}
          className='form-control'
          style={{ height: '500px', resize: 'none' }}>
        </textarea>
      </div>
      <ReadingTime text={text} textColor={textColor} className='col-lg-2 well' />
    </div>
  );
});

export default ReactReadingTime;
