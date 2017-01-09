import React from 'react';
import {observer} from 'mobx-react';
import DevTool from 'mobx-react-devtools';
import _ from 'lodash/fp';

const ReadingTime = observer((props) => {
  const {text, textColor, ...rest} = props;
  const minutes = readTime === 1 ? 'minute' : 'minutes';

  const countWords = (text) => text.split(/\s+/).length;
  const wordsPerMinute = (words) => Math.round(words / 720);
  const readTime = _.flow(countWords, wordsPerMinute);

  return(
    <div {...rest}>
      <DevTool />
      <p style={{ color: textColor }}>
        Estimated Read Time:<br /><br />
        <span>{readTime(text)} {minutes}</span>
      </p>
    </div>
  );
});

export default ReadingTime;
