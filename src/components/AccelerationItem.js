import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Moment from "moment";

export default function AccelerationItem(item) {
  const imageBanner = item.data.banner_url;
  const name = item.data.name;
  const location = item.data.location;
  const dataFinal = item.data.finish_at;

  if (imageBanner === "") {
    vImage = "http://denrakaev.com/wp-content/uploads/2015/03/no-image.png";
  }
  if (imageBanner != "") {
    vImage = imageBanner;
  }

  const vDate = Moment(new Date(dataFinal)).format("DD/MM/YYYY");

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: vImage }} style={styles.ImageIco} />
      </View>
      <View>
        <Text style={styles.ListTitle}>{name}</Text>
        <Text style={styles.ListLocal}>{location}</Text>
        <Text style={styles.ListData}>{vDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageIco: {
    paddingTop: 30,
    resizeMode: "stretch",
    width: 120,
    height: 100,
    marginLeft: 2
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginTop: 5,
    borderWidth: 2,
    borderColor: "#F2F2F2"
  },
  ListTitle: {
    fontSize: 25,
    marginLeft: 10
  },
  ListLocal: {
    fontSize: 20,
    marginLeft: 10,
    color: "#7800FF"
  },
  ListData: {
    fontSize: 20,
    marginLeft: 10
  }
});
