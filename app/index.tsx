import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [verse, setVerse] = useState('')

  useEffect(() => {
    const generateVerse = () => {

      fetch(`https://bible-api.com/?random=verse&translation=almeida`)
        .then(response => response.json())
        .then(data => setVerse(`${data.reference}: ${data.text}`));
    };
    generateVerse();
  }, [])

  return (
    <View style={[styles.centralizado, {gap: 10}]}>
      <View style={{alignItems: 'center'}}>
        <Ionicons name="book" size={100} color={'#272727'}/>
        <Text style={{ fontWeight: 'bold' }}>Versículo Diário</Text>
        {verse && <Text style={{ fontWeight: "bold", color: '#272727', display: 'flex', alignContent: 'center', textAlign: 'center' }}>{verse}</Text>}
      </View>
    </View>
  );
}


