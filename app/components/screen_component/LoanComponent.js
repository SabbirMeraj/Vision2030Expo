import React from 'react';
import { View } from 'react-native';

import InputBox from '../InputBox';
import CalendarPicker from '../CalendarPicker';
import Dropdown from '../Dropdown';

const persons = ["Sabbir", "Siam", "Zahir", "Sadik", "Tanvir", "Akhiar", "Rafi", "Shuvo"];


function LoanComponent(props) {
    return (
       <View>
           <Dropdown dataArray={persons} text={'Borrower'}/>
           <InputBox text={"Borrowed Amount"} />
           <CalendarPicker label={"Borrowed Date"} />
           <CalendarPicker label={"Promised Return Date"} />
       </View>
    );
}

export default LoanComponent;