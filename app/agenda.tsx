import React, { SetStateAction, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from 'react-native-calendars';

import { getDataAgenda } from "./utils/actions/get-data";



export default function Agenda() {
    const [selected, setSelected] = useState('');
    const [events, setEvents] = useState([])
    const [dia, setDia] = useState('')    

    useEffect(() => {
        async function loadData() {
            const { objects } = await getDataAgenda();
    
            // Mapeie os objetos e adicione os eventos ao estado
            const newEvents = objects.map((r: { title: any; metadata: { data: { agenda_data: any;}; tittle_event: any;  }; }) => ({
                title: r.title,
                title_event: r.metadata.tittle_event,
                date: r.metadata.data.agenda_data
            }));
            
            
            setEvents(newEvents);
            setDia(newEvents.date)
            
        }
        
        loadData();
    }, [selected]);



    return (
        <View>
            <Calendar
                // Restante das configurações do calendário...

                onDayPress={(day: { dateString: SetStateAction<string>; }) => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                       [selected]: { selected: true, disableTouchEvent: false, selectedDotColor: 'orange' }
                }}
            />
            {events.map((event, index) => (
                selected === event.date ? (
                    
                    <Text style={{textAlign:'center', fontSize: 30, marginTop:10}} key={index}>{event.title_event}</Text>
                ) : null
            ))}
            {selected !== '' && events.every(event => event.date !== selected) && (
                <Text style={{textAlign:'center', fontSize: 30, marginTop: 10}}>Não tem evento</Text>
            )}
        </View>
    
    );
}

  
  