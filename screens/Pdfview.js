import { useState } from "react";
import { WebView } from "react-native-webview";
import Loading from "../components/Loading";
import { View } from "../components/Themed";

export default function Pdfview({ route }) {
  const [pageVisible, setPageVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Loading
        style={!pageVisible ? Styles.webView : { display: "none" }}
        media="page"
      />
      <WebView
        source={{ uri: route.params.source }}
        style={pageVisible ? Styles.webView : { display: "none" }}
        onLoadEnd={() => {
          setPageVisible(true);
        }}
      />
    </View>
  );
}

const Styles = {
  webView: {
    flex: 1,
  },
};
