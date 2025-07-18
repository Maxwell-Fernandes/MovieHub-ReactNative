import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return <GluestackUIProvider mode="light">
      <StatusBar hidden={true} />

<Stack>
  <Stack.Screen
    name="(tabs)"
    options={{
      headerShown: false,
    }}
  />
  <Stack.Screen
    name="movie/[id]"
    options={{
      headerShown: true,
    }}
  />
</Stack>
    </GluestackUIProvider>;
}
