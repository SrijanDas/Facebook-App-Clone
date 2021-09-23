import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "white",
  },
  screenHeader: {
    fontWeight: "700",
    fontSize: 22,
    marginBottom: 5,
  },
  userCard: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  userInfo: {
    marginLeft: 15,
  },
  displayName: {
    fontSize: 18,
    fontWeight: "700",
  },
  cardBtns: {
    marginTop: 5,
    flexDirection: "row",
  },
});

export default styles;
