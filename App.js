import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, PlatformColor } from 'react-native';
import { Host, Text as ExpoUIText, Column } from '@expo/ui';

const ReactNativeDemo = () => {
  return (
    <>
      <Text>React-Native color box:</Text>
      <Text style={{ color: PlatformColor('?attr/colorPrimary') }}>Example</Text>
    </>
  )
}

const ExpoUIDemo = () => {
  return (
    <Host matchContents>
      <Column>
        <ExpoUIText>@expo/ui color text:</ExpoUIText>
        <ExpoUIText textStyle={{ color: PlatformColor('?attr/colorPrimary') }}>Example</ExpoUIText>
      </Column>
    </Host>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <ReactNativeDemo />
      <ExpoUIDemo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
