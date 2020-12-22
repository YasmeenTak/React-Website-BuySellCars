import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './style.css';

const useStyles = makeStyles({
  root: {
    width: 550,
  },
});

function valuetext(value) {
  return `${value}°C`;
}
const followersMarks = [
  {
    value: 0,
    scaledValue: 1000,
    label: '1k',
  },
  {
    value: 25,
    scaledValue: 5000,
    label: '5k',
  },
  {
    value: 50,
    scaledValue: 10000,
    label: '10k',
  },
  {
    value: 75,
    scaledValue: 25000,
    label: '25k',
  },
  {
    value: 100,
    scaledValue: 50000,
    label: '50k',
  },
  {
    value: 125,
    scaledValue: 100000,
    label: '100k',
  },
  {
    value: 150,
    scaledValue: 250000,
    label: '250k',
  },
  {
    value: 175,
    scaledValue: 500000,
    label: '500k',
  },
  {
    value: 200,
    scaledValue: 1000000,
    label: '1M',
  },
];
class RangeSlider extends Component {
  // const [value, setValue] = React.useState([20, 37]);
  state = {
    value: [20, 37],
  };

  handleChange(e, newValue) {
    this.setState({ value: newValue });
  }
  render() {
    return (
      <div className={useStyles.root}>
        <Typography id='range-slider' gutterBottom>
          متوسط السعر
        </Typography>
        <Slider
          style={{ color: '#FF6C37' }}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          valueLabelDisplay='auto'
          aria-labelledby='range-slider'
          getAriaValueText={valuetext}
          marks={followersMarks}
        />
      </div>
    );
  }
}
export default RangeSlider;
