import React from 'react';
import {observer} from 'mobx-react';
import ReadingTime from './reading-time';
import DevTool from 'mobx-react-devtools';

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
