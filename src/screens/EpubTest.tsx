import React, { useState, useEffect } from "react";
import { VStack } from "native-base";
import { useWindowDimensions } from "react-native";
import { Reader, ReaderProvider } from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function EpubTest() {
  const { width, height } = useWindowDimensions();

  const [lastLocation, setLastLocation] = useState("");
  const [read, setRead] = useState("");

  console.log(read);

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

  return (
    <VStack flex={1}>
      <ReaderProvider>
        <Reader
          src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          initialLocation={lastLocation}
          width={width}
          height={height}
          fileSystem={useFileSystem}
          onReady={(totalLocations, currentLocation, progress) =>
            console.log(currentLocation)
          }
          onLocationChange={(
            totalLocations,
            currentLocation: any,
            progress
          ) => {
            console.log(currentLocation);
            saveLastLocation(currentLocation?.end?.cfi);
            setRead(currentLocation?.displayed?.percentage);
          }}
        />
      </ReaderProvider>
    </VStack>
  );
}
