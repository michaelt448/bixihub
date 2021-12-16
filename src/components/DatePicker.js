import * as React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {
  makeStyles
} from "@material-ui/core";
import ThemeColor from '../style/color';

const useStyles = makeStyles({
  datePicker:{
    margin: '0px',
    '& .MuiInputBase-formControl':{
      border: `1px solid rgb(196 196 196)`,
      padding: '11px 8px 11px 0px',

      '&.Mui-focused':{
        borderColor: ThemeColor.YellowDark
      },
      
      '&:before, &:after':{
        display: 'none'
      }
    }
  }
});

export default function BasicDatePicker() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        className={classes.datePicker}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}