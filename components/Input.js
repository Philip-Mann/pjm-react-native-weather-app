import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Input = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQuery = () => {
        console.log(searchQuery);
    }
    handleSearchQuery();

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={(query) => setSearchQuery(query)}
                placeholder="Search by City"
                defaultValue={searchQuery}
                keyboardType='default'
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});

export default Input;