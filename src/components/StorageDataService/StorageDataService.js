import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (name, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(name, jsonValue)
            .then(()=>console.log("La donnée  <='" + name + "'=> à été stockée " ))

    } catch (e) {
        alert("impossible de sauvegarder la donnée")
    }
}
export const updateStoreData = async (name, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(name, jsonValue)
            .then(()=>console.log("task après supression : "+value ))

    } catch (e) {
        alert("impossible de sauvegarder la donnée")
    }
}


export const getStoreData = async (name)=> {
    const nbTasks = await AsyncStorage.getItem(name);
    return JSON.parse(nbTasks);
}

export const readDataObject = async (name) => {
    try {
        const value = await AsyncStorage.getItem(name);
        if (value !== null) {
            return JSON.parse(value);
        }
    } catch (e) {
        alert('Failed to fetch the input from storage');
    }
};

export const clearStorage = async () => {
    try {
        await AsyncStorage.clear();
        alert('Storage successfully cleared!');
    } catch (e) {
        alert('Failed to clear the async storage.');
    }
};

export const clearItemStorage = async (nameItem) => {
    try {
        await AsyncStorage.removeItem(nameItem);
        alert('Storage successfully cleared!');
    } catch (e) {
        alert('Failed to clear the async storage.');
    }
};

export const readAllDatas = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);

        return result.map(req => JSON.parse(req)).forEach(console.log);
    } catch (error) {
        console.error(error)
    }
}