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
import { sepia, unset, dark } from "../style/readerTheme";
import {
  ArrowCircleLeft,
  CaretLeft,
  CaretRight,
  MagnifyingGlass,
  SunHorizon,
  TextAa,
} from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { SearchModal } from "./SearchModal";

export function EpubReader() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const {
    goNext,
    goPrevious,
    changeTheme,
    changeFontSize,
    search,
    searchResults,
    goToLocation,
  }: any = useReader();

  const [lastLocation, setLastLocation] = useState("");
  const [read, setRead] = useState("");
  const [readMode, setReadMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
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
      changeTheme(dark);
      return;
    }
    changeTheme(unset);
  }, [readMode]);

  useEffect(() => {
    changeFontSize(fontS);
  }, [fontS]);

  const moby = "https://s3.amazonaws.com/moby-dick/OPS/package.opf";

  function handleSearch() {
    search(searchText);
  }

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
      <SearchModal
        isVisible={isSearch}
        setIsVisible={() => setIsSearch(!isSearch)}
        value={searchText}
        onChange={setSearchText}
        onSearch={handleSearch}
        results={searchResults}
        goToLocation={goToLocation}
      />
      <HStack justifyContent="space-between" alignItems="center">
        <IconButton
          onPress={() => navigation.goBack()}
          icon={<ArrowCircleLeft size={32} color="#000" />}
        />

        <IconButton
          onPress={() => setIsVisible(true)}
          icon={<TextAa size={26} color="#000" />}
        />
        <IconButton
          onPress={() => setIsSearch(true)}
          icon={<MagnifyingGlass size={26} color="#000" />}
        />

        <IconButton
          onPress={() => setReadMode(!readMode)}
          icon={<SunHorizon size={32} color="#000" />}
        />
      </HStack>
      <ScrollView>
        <Reader
          src="https://firebasestorage.googleapis.com/v0/b/studio-fitness-piratini.appspot.com/o/avalia%C3%A7%C3%B5es%2F1867%2Fteste%2Fcdc_epub.epub?alt=media&token=ace946fb-7fe2-4a16-87d3-36a37b39c7f1"
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
        <Text>{pages && ((pages.page / pages.total) * 100).toFixed(2)}%</Text>
        <IconButton
          onPress={() => goNext()}
          icon={<CaretRight size={32} color="#000" />}
        />
      </HStack>
    </VStack>
  );
}
