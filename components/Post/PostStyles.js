import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "white",
  },
  postHeader: {
    padding: 12,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderRight: {
    flexDirection: "row",
  },
  profileImg: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  postInfo: {
    marginLeft: 10,
  },
  postUser: {
    fontSize: 16,
    fontWeight: "700",
  },
  postTime: {
    marginTop: 2,
    fontSize: 13,
  },
  postContent: {},
  postCaption: {
    paddingHorizontal: 10,
    marginBottom: 8,
    fontSize: 16,
  },
  postImage: {
    height: 280,
    width: "100%",
  },
  postFooter: {
    marginTop: 5,
  },
  postFooterStats: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  likeIcon: {
    height: 20,
  },
  postFooterStatsLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  postActions: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postActionBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
