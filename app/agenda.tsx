import { SetStateAction, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { getDataAgenda } from "./utils/actions/get-data";
import { AgendaProps } from "./utils/actions/agenda.type";


export default function Agenda() {
    const [selected, setSelected] = useState('');
    const [title, setTitle] = useState<any['']>([]);
    const [datas, setDatas] = useState<any['']>([]);



    useEffect(() => {
        async function loadData() {
            const { objects }: AgendaProps = await getDataAgenda();

          objects.map(r =>{
              
            setTitle(r.title)
            setDatas(r.metadata.data.agenda_data)
             
            console.log(r.title)
            console.log(r.metadata.data.agenda_data)

          })
            

        //   debug para ver se a data esta sendo clicada,,
            console.log("DATA SELECIONADA " + selected);
        }
        loadData();
    }, [selected]);

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

                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: false, selectedDotColor: 'orange' }
                }}
            />
            {
                selected === datas ? <Text>{title}</Text> : <Text>Não tem evento</Text>  
            }
            {/* <Text style={{ fontSize: 20, textAlign: "center" }}>
                {title}
            </Text> */}
        </View>
    )
}



