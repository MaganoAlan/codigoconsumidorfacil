import { useEffect } from "react";
import { VStack, Text, ScrollView, View } from "native-base";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

const titulo1 = require("../data/titulos/titulo1.json");

export function Articles() {
  useEffect(() => {
    console.log(titulo1);
  });
  return (
    <VStack w="full" flex={1} bgColor="background">
      <Header title="Listagem dos artigos" />
      <Title title="Artigos" mt={2} />
      <ScrollView>
        <Text>{titulo1.titulo}</Text>
        {titulo1.map((item, index) => (
          <View px={4} key={index}>
            <Text textAlign="justify">{item.capitulo && item.capitulo}</Text>
            <Text textAlign="justify">{item.ses && item.ses}</Text>
            <Text textAlign="justify">{item.art && item.art}</Text>
            <Text textAlign="justify">{item.pu && item.pu}</Text>
            <Text textAlign="justify">{item.par && item.par}</Text>
            <Text textAlign="justify">{item.inc && item.inc}</Text>
            <Text textAlign="justify">{item.lin && item.lin}</Text>
          </View>
        ))}
      </ScrollView>
    </VStack>
  );
}
