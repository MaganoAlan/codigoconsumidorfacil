import { useEffect } from "react";
import { VStack, Text, ScrollView, View } from "native-base";
import { Header } from "../components/Header";
import { Title } from "../components/Title";

const titulo4 = require("../data/titulos/titulo4.json");

export function Titulo4() {
  useEffect(() => {
  
  });
  return (
    <VStack w="full" flex={1} bgColor="background">
      <Header title="Listagem dos artigos" />
      <Title title="Artigos" mt={2} />
      <ScrollView>
        <Text py={6}>{titulo4.map((t) => t.titulo)}</Text>
        {titulo4.map((item, index) => (
          <View px={4} key={index}>
            {
              <Text color="red.800" textAlign="justify">
                {item.capitulo}
              </Text>
            }
            {item.ses && <Text textAlign="justify">{item.ses}</Text>}
            {item.art && <Text textAlign="justify">{item.art}</Text>}
            {item.pu  && <Text textAlign="justify">{item.pu}</Text>}
            {item.par && <Text textAlign="justify">{item.par}</Text>}
            {item.inc && <Text textAlign="justify">{item.inc}</Text>}
            {item.lin && <Text textAlign="justify">{item.lin}</Text>}
          </View>
        ))}
      </ScrollView>
    </VStack>
  );
}
