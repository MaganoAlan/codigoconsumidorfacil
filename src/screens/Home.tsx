import { VStack, Text } from "native-base";
import { Title } from "../components/Title";

export function Home() {
  return (
    <VStack w="full" flex={1} px={2} bgColor="background">
      <Title title="Código de defesa do consumidor" mt={2} textAlign="center" />
    </VStack>
  );
}
