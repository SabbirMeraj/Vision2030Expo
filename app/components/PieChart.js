import React from "react";
import { StyleSheet, View } from "react-native";
//import { VictoryLegend, VictoryPie } from "victory-native";

import colors from "../config/colors";

function PieChart({pieData, sliceColor}) {
  return (
    <View style={styles.container}>
      <View style={styles.graphContainer}>
        {/* <VictoryPie
          data={pieData}
          width={450}
          height={250}
          labels={({ datum }) => datum.y}
          innerRadius={30}
          colorScale={sliceColor}
          style={{
            labels: {
              fill: "black",
              fontSize: 12,
              padding: 7,
            },
          }}
        /> */}
      </View>

      <View style={styles.legendContainer}>
        {/* <VictoryLegend
          x={40}
          y={30}
          orientation="horizontal"
          gutter={20}
          colorScale={sliceColor}
          style={{ labels: { fontSize: 10 } }}
          data={pieData}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    alignItems: "center",
    width: "90%",
    height: "40%",
    backgroundColor: colors.wildSand,
    borderRadius: 15,
    marginHorizontal: 20,
  },
  legendContainer: {
    marginTop: -40,
  },
});

export default PieChart;
