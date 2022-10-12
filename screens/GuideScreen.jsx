import { useCallback, useState, useRef } from "react";
import { Image } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Loading from "../components/Loading";
import { Text, View } from "../components/Themed";

export default function Guide({ route }) {
  const guide = route.params.guide;

  const [playing, setPlaying] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);

  const onVideoStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  });

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const getMedia = () => {
    if (guide.media.type == "image") {
      return (
        <Image source={{ uri: guide.media.source }} style={Styles.guideImage} />
      );
    } else {
      return (
        <View>
          <Loading
            style={!videoVisible ? Styles.guideVideo : { display: "none" }}
            media="video"
          />
          <View style={videoVisible ? Styles.guideVideo : { display: "none" }}>
            <YoutubePlayer
              height={300}
              play={playing}
              videoId={guide.media.videoId}
              onChangeState={onVideoStateChange}
              onReady={() => {
                setVideoVisible(true);
              }}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.titleText}>{guide.title}</Text>
      {getMedia()}
      <Text style={Styles.guideText}>{guide.text}</Text>
    </View>
  );
}

const Styles = {
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontSize: 25,
    maxWidth: "70%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  guideImage: {
    height: 180,
    width: 320,
    marginVertical: 20,
  },
  guideVideo: {
    height: 180,
    width: 320,
    marginVertical: 10,
  },
  guideText: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
};
