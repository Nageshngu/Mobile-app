import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log("Error saving data", error);
  }
};

// Get data
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.log("Error reading data", error);
  }
};

// Remove data
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleting data", error);
  }
};
