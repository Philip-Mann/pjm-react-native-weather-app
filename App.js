import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View } from 'react-native';
import Input from './components/Input';

export default function App() {
  
  const [searchQuery, setSearchQuery] = useState('');

  const api = {
    url: "https://api.openweathermap.org/data/2.5/",
    key: "2e7d702ab251babde4b714ed88c48e60"
  }

  const handleFetch = (query) => {
    // setSearchQuery(query);
    fetch(`${api.url}weather?q=${query}&units=imperial&appid=${api.key}`)
      .then(res => res.json())
      .then(data => console.log(data));
  }

  // TODO: Capture text input and use it to fetch
  // READ THIS: https://stackoverflow.com/questions/60091873/how-to-get-values-from-textinput

  return (
    <View >
      <TextInput
                style={styles.input}
                onEndEditing={(query) => handleFetch(query)}
                placeholder="Search by City"
                defaultValue={searchQuery}
                keyboardType='default'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
