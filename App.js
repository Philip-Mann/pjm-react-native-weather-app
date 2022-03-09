import { useState } from 'react';
import { ActivityIndicator, StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function App() {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [currentTemp, setCurrentTemp] = useState('');
  // const [feelsLike, setFeelsLike] = useState('');
  // const [minTemp, setMinTemp] = useState('');
  // const [maxTemp, setMaxTemp] = useState('');
  // const [pressure, setPressure] = useState('');
  // const [humidity, setHumidity] = useState('');
  // const [windSpeed, setWindSpeed] = useState('');
  // const [windDegree, setWindDegree] = useState('');
  // const [date, setDate] = useState('');

  

  const api = {
    url: "https://api.openweathermap.org/data/2.5/",
    key: "2e7d702ab251babde4b714ed88c48e60"
  }

  const handleFetch = () => {
    setIsLoading(true);
    console.log('searchQuery', searchQuery);
    fetch(`${api.url}weather?q=${searchQuery}&units=imperial&appid=${api.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCurrentTemp(data.main.temp);
        setIsLoading(false);
        setSearchQuery('');
      });
  }

  return (
    <>
      <View>
        <TextInput
                  style={styles.input}
                  onChangeText={(query) => setSearchQuery(query)}
                  placeholder="Search by City"
                  defaultValue={searchQuery}
                  keyboardType='default'
        />
        <Button 
          style={styles.searchButton}
          onPress={handleFetch}
          title="Search"
        />
        {isLoading ? <ActivityIndicator size="large"/> : currentTemp === '' ? <Text></Text> : <Text>Current: {currentTemp}</Text>}
      </View>
    </>
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
  searchButton: {
    margin: 10
  }
});
