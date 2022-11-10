import React from "react";
import { VStack } from "native-base";
import { ReaderProvider } from "@epubjs-react-native/core";
import { EpubReader } from "../components/EpubReader";

export function EpubTest() {
  return (
    <VStack flex={1}>
      <ReaderProvider>
        <EpubReader />
      </ReaderProvider>
    </VStack>
  );
}
