import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";
import Icon from "../components/Icon";
import Label from "../components/Label";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ValueLabel from "../components/ValueLabel";
import colors from "../config/colors";
import color from "../config/colors";

function AdminHomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.headerSection}>
        <ImageBackground
          style={styles.banner}
          source={require("../assets/headerBanner.png")}
          resizeMode="contain"
          imageStyle={{ opacity: 0.2 }}
        >
          <View style={styles.profileContainer}>
            <ListItem
              imageSrc={require("../assets/Icon/admin.png")}
              imageSize={50}
              text={"Admin"}
              textStyle={{ color: color.galleryWhite, marginLeft: -10 }}
            />
          </View>

          <View style={styles.detailsContainer}>
            <ValueLabel
              text={"Total"}
              value={100000}
              fontSize={12}
              fontColor={"green"}
            />
            <ValueLabel
              text={"Asset"}
              value={60000}
              fontSize={12}
              fontColor={"green"}
            />
            <ValueLabel
              text={"Investment"}
              value={40000}
              fontSize={12}
              fontColor={"green"}
            />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.iconSection}>
        <Menu>
          <MenuTrigger>
            <Icon
              title="Statement"
              image={require("../assets/Icon/statement.png")}
              size={60}
              backgroundColor={color.iconBackground}
            />
          </MenuTrigger>

          <MenuOptions customStyles={optionsStyles}>
            <MenuOption
              onSelect={() => navigation.navigate("SummaryStatementNavigator")}
            >
              <ListItem
                imageSrc={require("../assets/Icon/summaryStatement.png")}
                imageSize={30}
                text={"Summary Statement"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
            <MenuOption onSelect={() => alert(`Save`)}>
              <ListItem
                imageSrc={require("../assets/Icon/individualStatement.png")}
                imageSize={30}
                text={"Individual Statement"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
            <MenuOption onSelect={() => alert(`Save`)}>
              <ListItem
                imageSrc={require("../assets/Icon/overallStatement.png")}
                imageSize={30}
                text={"Overall Statement"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
          </MenuOptions>
        </Menu>

        <TouchableOpacity onPress={() => navigation.navigate("Deposit")}>
          <Icon
            title="Deposit"
            image={require("../assets/Icon/deposit.png")}
            size={60}
            backgroundColor={color.iconBackground}
          />
        </TouchableOpacity>

        <Menu>
          <MenuTrigger>
            <Icon
              title="Investment"
              image={require("../assets/Icon/investment.png")}
              size={60}
              backgroundColor={color.iconBackground}
            />
          </MenuTrigger>

          <MenuOptions customStyles={optionsStyles}>
            <MenuOption onSelect={() => navigation.navigate("Add Investment")}>
              <ListItem
                imageSrc={require("../assets/Icon/add.png")}
                imageSize={30}
                text={"Add Investment"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
            <MenuOption onSelect={() => alert(`Touched`)}>
              <ListItem
                imageSrc={require("../assets/Icon/edit.png")}
                imageSize={30}
                text={"Update Investment"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
          </MenuOptions>
        </Menu>

        <Menu>
          <MenuTrigger>
            <Icon
              title="Asset"
              image={require("../assets/Icon/asset.png")}
              size={60}
              backgroundColor={color.iconBackground}
            />
          </MenuTrigger>

          <MenuOptions customStyles={optionsStyles}>
            <MenuOption onSelect={() => alert(`Touched`)}>
              <ListItem
                imageSrc={require("../assets/Icon/create1.png")}
                imageSize={30}
                text={"Create Asset Type"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
            <MenuOption onSelect={() => alert(`Touched`)}>
              <ListItem
                imageSrc={require("../assets/Icon/create.png")}
                imageSize={30}
                text={"Create Asset Holder"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
            <MenuOption onSelect={() => alert(`Touched`)}>
              <ListItem
                imageSrc={require("../assets/Icon/add.png")}
                imageSize={30}
                text={"Add Asset"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
          </MenuOptions>
        </Menu>

        <Menu>
          <MenuTrigger>
            <Icon
              title="Iron Bank"
              image={require("../assets/Icon/bank.png")}
              size={60}
              backgroundColor={color.iconBackground}
            />
          </MenuTrigger>

          <MenuOptions customStyles={optionsStyles}>
            <MenuOption onSelect={() => alert(`Touched`)}>
              <ListItem
                imageSrc={require("../assets/Icon/add.png")}
                imageSize={30}
                text={"Add Loan Info"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
            <MenuOption onSelect={() => alert(`Touched`)}>
              <ListItem
                imageSrc={require("../assets/Icon/edit.png")}
                imageSize={30}
                text={"Update Loan Info"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
          </MenuOptions>
        </Menu>

        <Menu>
          <MenuTrigger>
            <Icon
              title="Settlement"
              image={require("../assets/Icon/transfer.png")}
              size={60}
              backgroundColor={color.iconBackground}
            />
          </MenuTrigger>

          <MenuOptions customStyles={optionsStyles}>
            <MenuOption onSelect={() => alert(`Touched`)}>
              <ListItem
                imageSrc={require("../assets/Icon/transferAsset.png")}
                imageSize={30}
                text={"Transfer Asset"}
                textStyle={{ marginLeft: -10 }}
              />
            </MenuOption>
          </MenuOptions>
        </Menu>

        <Icon
          title="Members"
          image={require("../assets/Icon/member.png")}
          size={60}
          backgroundColor={color.iconBackground}
        />

        <Icon
          title="Information"
          image={require("../assets/Icon/information.png")}
          size={60}
          backgroundColor={color.iconBackground}
        />

        <Icon
          title="Rules"
          image={require("../assets/Icon/rules.png")}
          size={60}
          backgroundColor={color.iconBackground}
        />
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.footer}>
          <View style={styles.settingsIcon}>
            <Icon image={require("../assets/Icon/settings.png")} size={40} />
          </View>
          <View style={styles.notificationIcon}>
            <Icon
              image={require("../assets/Icon/notification.png")}
              size={40}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    height: "25%",
    backgroundColor: colors.deepBlue,
    paddingTop: 20,
  },
  banner: {
    flex: 1,
  },
  profileContainer: {
    marginTop: 3,
    marginLeft: 5,
    height: "20%",
  },
  detailsContainer: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSection: {
    height: "50%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: color.wildSand,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  bottomSection: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: colors.wildSand,
  },
  footer: {
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
  },
  settingsIcon: {
    flex: 1,
    marginHorizontal: 40,
  },
  notificationIcon: {
    flex: 1,
    marginHorizontal: 40,
  },
});

const optionsStyles = {
  optionsContainer: {
    width: 250,
  },
  optionWrapper: {
    margin: 2,
    backgroundColor: colors.wildSand,
  },
};
export default AdminHomeScreen;
