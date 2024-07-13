import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

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
    <View
        style={styles.centralizado}>
      <Text style={{fontWeight: 'bold'}}>Versículo Diário</Text>
      {verse && <Text style={{fontWeight:"bold", color: 'black', display: 'flex', alignContent: 'center', textAlign: 'center'}}>{verse}</Text>}
    </View>
  );
}


const styles = StyleSheet.create({
  centralizado: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: "column",
      gap: 2
  }
})