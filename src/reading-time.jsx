import React from 'react'

export default class ReadingTime extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      readTime: 0
    };
  }

  // NOTE: Convention is to place lifecycle hooks directly after constructor() and before other functions

  // Initial Render
  componentWillMount() {
    this.updateReadingTime(this.props);
  }

  // New Props recieved upon update
  componentWillReceiveProps(nextProps) {
    this.updateReadingTime(nextProps);
  }

  // Add lodash magic to this
  updateReadingTime(props) {
    const words = this.countWords(props.text),
          readTime = Math.round(words / props.wordsPerMinute);

    this.setState({ readTime }); //ES2015 magic, shorthand for key/val pairs
  }

  countWords = (text) => text.split(/\s+/).length;

  static propTypes = {
    wordsPerMinute: React.PropTypes.number
  };

  static defaultProps = {
    wordsPerMinute: 270,
    textColor: 'blue'
  };

  // NOTE: PROPS ARE IMMUTABLE -> USE STATE TO CHANGE PROPS (PASSED DOWN FROM PARENT)

  render() {
    // NOTE: Spread operator {x, ...y} etc. allows for more extensible props, + it's DRY
    // NOTE: Also, destructuring assignment -> const { props } = scope etc. will come in handy. Also, const for consistency and posterity
    const { textColor, ...rest } = this.props;
    const { readTime } = this.state;
    const minutes = readTime === 1 ? 'minute' : 'minutes';

    return(
      <div {...rest}>
        <p style={{ color: textColor }}>
          Estimated Read Time:<br /><br />
          <span>{readTime} {minutes}</span>
        </p>
      </div>
    )
  }
}
