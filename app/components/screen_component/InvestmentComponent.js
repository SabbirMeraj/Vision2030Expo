import React from 'react';
import { View } from 'react-native';

import InputBox from '../InputBox';
import CalendarPicker from '../CalendarPicker';
function InvestmentComponent(props) {
    return (
       <View>
           <InputBox text={"Sector"} />
           <InputBox text={"Invested Amount"} />
           <CalendarPicker label={"Invested Date"} />
           <InputBox text={"Returned Amount"} />
           <CalendarPicker label={"Returned Date"} />
       </View>
    );
}

export default InvestmentComponent;