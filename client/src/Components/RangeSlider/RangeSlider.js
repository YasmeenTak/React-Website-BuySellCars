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
const marks = [
  {
    value: 0,
    label: '3000$',
  },

  {
    value: 100,
    label: '30000$',
  },
];
class RangeSlider extends Component {
  // const [value, setValue] = React.useState([20, 37]);
  state = {
    value: [0, 30],
  };

  handleChange(e, newValue) {
    this.setState({ value: newValue });
  }
  render() {
    return (
      <div className={useStyles.root} style={{ direction: 'rtl' }}>
        <Typography id='range-slider' gutterBottom>
          متوسط السعر
        </Typography>
        <Slider
          style={{ color: '#FF6C37', direction: 'ltr' }}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          valueLabelDisplay='auto'
          aria-labelledby='range-slider'
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
    );
  }
}
export default RangeSlider;
