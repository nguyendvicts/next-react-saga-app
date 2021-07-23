import { makeStyles } from "@material-ui/core/styles";

export const styles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    height: theme.spacing(8),
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 500,
    color: theme.colors.black,
  },
  content: {
    display: "flex",
    flex: 1,
    // height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
  childs: {
    display: "flex",
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));
