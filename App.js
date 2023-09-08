import { StatusBar } from 'expo-status-bar';
import { Text, View, Switch } from 'react-native';
import { useColorScheme } from 'nativewind';
import { Provider } from 'react-redux'
import { store } from './components/Store/store';
export default function App() {
  const { colorScheme, toggleColorScheme} = useColorScheme()
  return (
    <Provider store={store}>
    <View className="flex h-screen w-screen m-auto justify-center items-center bg-slate-300 dark:bg-black"  >
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme}  />
      <Text className="  bg-sky-500 p-2 rounded-md" >up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}
