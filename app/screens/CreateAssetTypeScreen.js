import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Keyboard,
} from "react-native";

import AppButton from "../components/AppButton";
import InputBox from "../components/InputBox";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemWithButtons from "../components/ListItemWithButtons";

const data = [
  {
    id: 1,
    name: "Item 1",
  },
  {
    id: 2,
    name: "Item 2",
  },
];

function CreateAssetTypeScreen(props) {
  const [type, setType] = useState();
  const [id, setId] = useState(2);
  const [assetTypeData, setAssetTypeData] = useState(data);

  const onChangeText = (type) => {
    setType(type);
  };

  const onPress = () => {
    Keyboard.dismiss();
    const name = type;
    setId(id + 1);
    const obj = { name: name, id: id + 1 };
    assetTypeData.push(obj);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <InputBox text={"Type Name"} onChangeText={onChangeText} />
        <AppButton name={"Save"} onPress={onPress} />

        <View style={styles.listView}>
          <Text style={styles.listTitle}>Asset Type</Text>
          <View style={styles.list}>
            <FlatList
              data={assetTypeData}
              extraData={id}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ListItemWithButtons text={item.name} />
              )}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },
  listView: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  listTitle: {
    fontSize: 18,
    padding: 10,
    backgroundColor: colors.wildSand,
  },
  list: {
    marginTop: 10,
    flexGrow: 1,
  },
});
export default CreateAssetTypeScreen;
