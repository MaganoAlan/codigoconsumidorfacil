import { HStack, Heading, IconButton } from "native-base";
import { ArrowUUpLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  const navigation = useNavigation();
  return (
    <HStack
      w="full"
      h={16}
      bgColor="green.600"
      alignItems="center"
      justifyContent="center"
      p={2}
    >
      <IconButton
        ml={2}
        mr="auto"
        onPress={() => navigation.goBack()}
        icon={<ArrowUUpLeft color="#fff" size={20} />}
      />
      <Heading px={2} mr="auto" fontSize="lg" color="white">
        {title}
      </Heading>
    </HStack>
  );
}
