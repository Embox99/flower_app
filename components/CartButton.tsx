import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { images } from "@/constans";

const cardButton = () => {
  const totalItems = 10;
  return (
    <TouchableOpacity className="card-btn" onPress={() => {}}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className="card-badge">
          <Text className="small-bold text-white">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default cardButton;
