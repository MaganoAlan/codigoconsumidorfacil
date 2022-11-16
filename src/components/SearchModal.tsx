import React, { Dispatch, SetStateAction } from "react";
import { Button, Input, Modal, Pressable, ScrollView, Text } from "native-base";

interface IProps {
  isVisible: boolean;
  setIsVisible: (b: boolean) => void;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  onSearch: () => void;
  results: Array<string>;
  goToLocation: (location: string) => void;
}

export function SearchModal({
  isVisible,
  setIsVisible,
  value,
  onChange,
  onSearch,
  results,
  goToLocation,
}: IProps) {
  return (
    <Modal isOpen={isVisible} onClose={() => setIsVisible(!isVisible)}>
      <Modal.Content
        w="90%"
        h="60%"
        p={6}
        alignContent="center"
        justifyContent="center"
      >
        <Modal.CloseButton />
        <Text textAlign="center" fontSize="16px" fontWeight="bold" mb={4}>
          Digite a palavra para pesquisa:
        </Text>
        <Input value={value} onChangeText={onChange} />
        <Button bg="emerald.500" my={2} onPress={onSearch}>
          <Text fontWeight="bold" color="#fdfdfd">
            Pesquisar
          </Text>
        </Button>
        <ScrollView>
          {results.length > 0 &&
            results.map((result: any, index: number) => (
              <Pressable
                key={index}
                onPress={() => {
                  goToLocation(result?.cfi);
                  setIsVisible(!isVisible);
                }}
              >
                <Text>{result?.excerpt}</Text>
              </Pressable>
            ))}
        </ScrollView>
      </Modal.Content>
    </Modal>
  );
}
