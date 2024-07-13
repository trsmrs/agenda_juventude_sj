import { DrawerItem } from "@react-navigation/drawer";
import { SetStateAction, useState } from "react";
import { Text, View } from "react-native";
import { Calendar, LocaleConfig } from 'react-native-calendars';


export default function Agenda() {
    const [selected, setSelected] = useState('');


    return (
        <View>
            <Calendar
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    height: 350,
                    calendarBackground: '#3A98FF',
                    textSectionTitleColor: '#b6c1cd',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e'

                }}



                onDayPress={(day: { dateString: SetStateAction<string>; }) => {
                    setSelected(day.dateString);
                    console.log(day.dateString)
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
            />
            <Text style={{fontSize:20, textAlign:"center"}}>
                {selected == '2024-07-23' ? 'Micael irá Pregar' : null}
            </Text>

        </View>
    )
}



