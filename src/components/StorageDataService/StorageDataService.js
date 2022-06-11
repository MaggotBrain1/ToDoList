import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (name, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(name, jsonValue)
        console.log("La donnée " + name + " à été stockée , sa valeur est "+ value )

    } catch (e) {
        console.log("impossible de sauvegarder la donnée")
    }
}

export const getStoreData = async (name)=> {
    const nbTasks = await AsyncStorage.getItem(name);
    return JSON.parse(nbTasks);
}