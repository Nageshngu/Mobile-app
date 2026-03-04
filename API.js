import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

export default function API() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json.slice(0,5)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View>
      <Text>API Data</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
}
