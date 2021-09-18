import React, { useState } from "react";
import { View, StyleSheet, FlatList, Modal, Text } from "react-native";

import Screen from "../components/Screen";
import ListItemWithButtons from "../components/ListItemWithButtons";
import InvestmentComponent from "../components/screen_component/InvestmentComponent";
import AppButton from "../components/AppButton";

const data = [
  {
    id: 1,
    name: "Evaly",
    amount: 70000,
  },
  {
    id: 2,
    name: "Dhamaka",
    amount: 26000,
  },
];

function UpdateInvestmentScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const onEdit = () => {
    setModalVisible(true);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ListItemWithButtons text={item.name} onEdit={onEdit} />
          )}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.updateContainer}>
          <InvestmentComponent />
          <AppButton name={"Update"} />
        </View>
      </Modal>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  updateContainer: {
    marginTop: 50,
  },
});
export default UpdateInvestmentScreen;
