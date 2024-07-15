import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";

import { getDataHome } from "./utils/actions/get-data";
import { HomeProps } from "./utils/actions/home.type";


export default function Index() {
  const [verse, setVerse] = useState('')
  const [img, setImg] = useState('')

  useEffect(() => {
    async function loadData() {
      const { object }: HomeProps = await getDataHome();
      let rData = object.metadata.banner.url
      setImg(rData)

    }

    loadData()
  }, [])


  useEffect(() => {
    const generateVerse = () => {

      fetch(`https://bible-api.com/?random=verse&translation=almeida`)
        .then(response => response?.json())
        .then(data => setVerse(`${data?.reference}: ${data?.text}`));
    };
    generateVerse();
  }, [])

  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Text style={{marginTop: '-90%', fontWeight: 'bold', fontSize: 25, textAlign:'center'}}>Jovens e Adolescentes da São Jerônimo</Text>
      <View style={{ alignItems: 'center' }}>
        <Ionicons name="book" size={100} color={'#272727'} />
        <Text style={{ fontWeight: 'bold' }}>Versículo Diário</Text>
        {verse && <Text style={{ fontWeight: "bold", color: '#272727', display: 'flex', alignContent: 'center', textAlign: 'center' }}>{verse}</Text>}
      </View>
    </View>
  );
}


