import React, { useState, useEffect } from "react";
import {
  HStack,
  IconButton,
  Modal,
  Radio,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { useWindowDimensions } from "react-native";
import { Reader, useReader } from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sepia, unset } from "../style/readerTheme";
import {
  ArrowCircleLeft,
  CaretLeft,
  CaretRight,
  SunHorizon,
  TextAa,
} from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export function EpubReader() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const { goNext, goPrevious, changeTheme, changeFontSize, search }: any =
    useReader();

  const [lastLocation, setLastLocation] = useState("");
  const [read, setRead] = useState("");
  const [readMode, setReadMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [pages, setPages] = useState<any>();

  const sm = "14px";
  const md = "16px";
  const lg = "18px";
  const xl = "20px";

  const [fontS, setFontS] = useState(md);
  console.log("READ", read);

  async function saveLastLocation(location: string) {
    try {
      await AsyncStorage.setItem("@lastLocation", location);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    async function getLocation() {
      try {
        const value = await AsyncStorage.getItem("@lastLocation");

        if (value !== null) {
          setLastLocation(value);
        }
      } catch (e) {
        console.log("primeira vez aberto!");
      }
    }
    getLocation();
  });

  useEffect(() => {
    if (readMode) {
      changeTheme(sepia);
      return;
    }
    changeTheme(unset);
  }, [readMode]);

  useEffect(() => {
    changeFontSize(fontS);
    const response = search("a");
    console.log("response", response);
  }, [fontS]);

  return (
    <VStack w="full" flex={1}>
      <Modal isOpen={isVisible} onClose={() => setIsVisible(false)}>
        <Modal.Content
          w="80%"
          h="40%"
          p={6}
          alignContent="center"
          justifyContent="center"
        >
          <Modal.CloseButton />
          <Text textAlign="center" fontSize="16px" fontWeight="bold" mb={4}>
            Selecione o tamanho da fonte:
          </Text>
          <Radio.Group
            name="FontSizes"
            accessibilityLabel="Tamanho das fontes"
            value={fontS}
            onChange={(nextValue) => {
              setFontS(nextValue);
            }}
          >
            <Radio value={sm} my={1}>
              Pequena
            </Radio>
            <Radio value={md} my={1}>
              Média
            </Radio>
            <Radio value={lg} my={1}>
              Grande
            </Radio>
            <Radio value={xl} my={1}>
              Extra grande
            </Radio>
          </Radio.Group>
        </Modal.Content>
      </Modal>
      <HStack justifyContent="space-between" alignItems="center">
        <IconButton
          onPress={() => navigation.goBack()}
          icon={<ArrowCircleLeft size={32} color="#000" />}
        />
        <HStack alignItems="center">
          <IconButton
            onPress={() => setIsVisible(true)}
            icon={<TextAa size={26} color="#000" />}
          />
        </HStack>
        <IconButton
          onPress={() => setReadMode(!readMode)}
          icon={<SunHorizon size={32} color="#000" />}
        />
      </HStack>
      <ScrollView>
        <Reader
          src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          initialLocation={lastLocation}
          width={width}
          height={height - 100}
          fileSystem={useFileSystem}
          onLocationChange={(
            totalLocations,
            currentLocation: any,
            progress
          ) => {
            console.log(totalLocations);
            console.log(currentLocation);
            console.log(progress);
            saveLastLocation(currentLocation?.end?.cfi);
            setRead(currentLocation?.end?.percentage);
            setPages(currentLocation?.end?.displayed);
          }}
        />
      </ScrollView>
      <HStack justifyContent="space-around" w="full" alignItems="center">
        <IconButton
          onPress={() => goPrevious()}
          icon={<CaretLeft size={32} color="#000" />}
        />
        <Text>
          {pages && pages.page} de {pages && pages.total} neste capítulo
        </Text>
        <Text>{Math.fround(parseFloat(read)).toFixed(2)}%</Text>
        <IconButton
          onPress={() => goNext()}
          icon={<CaretRight size={32} color="#000" />}
        />
      </HStack>
    </VStack>
  );
}
