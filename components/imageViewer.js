import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ placeholderImageSourse, selectedImage }) {
  
  const imageSourse = selectedImage ? {uri: selectedImage} : placeholderImageSourse;

  return (
  <Image source={imageSourse} style={styles.image} />
);
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
