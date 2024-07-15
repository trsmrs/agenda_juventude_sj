import { View, Text } from "react-native";
import { getListaPregadores } from "./utils/actions/get-data";
import { useEffect, useState } from "react";

export default function Pregador() {
    const [listaPregadores, setListaPregadores] = useState([])


    useEffect(() => {
        async function loadData() {
            const { objects } = await getListaPregadores();

            // Mapeie os objetos e adicione os eventos ao estado
            const newEvents = objects.map((r: { title: any; metadata: { nome: any; endereco: any; telefone: any; rede_social: any; }; }) => ({
                title: r.title,
                nome: r.metadata.nome,
                endereco: r.metadata.endereco,
                phone: r.metadata.telefone,
                social: r.metadata.rede_social
            }));


            setListaPregadores(newEvents);

        }

        loadData();
    }, [listaPregadores]);

    return (
        <>
            
            <View >
                {listaPregadores.map((event, index) => (

                    <View style={{ width: '100%', flexDirection: 'column', alignItems: 'center', borderWidth: 1, borderColor: '#01669E', padding: 10, borderBottomWidth: 10 }} key={index}>
                        <Text style={{ fontSize: 20 }}>Nome: {event.nome}</Text>
                        <Text style={{ fontSize: 20 }}>Endereço: {event.endereco}</Text>
                        <Text style={{ fontSize: 20 }}>Telefone: {event.phone}</Text>
                        <Text style={{ fontSize: 20 }}>Redes Sociais: {event.social}</Text>
                    </View>
                ))}
            </View>
        </>
    );
}