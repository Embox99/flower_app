import { images, offers } from "@/constans";
import { Fragment } from "react";
import { FlatList, Pressable, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import cn from "clsx";

export default function Index() {
  return (
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-5xl  text-center font-bold text-primary font-quicksand-bold">
    //     Welcome to Nativewind!
    //   </Text>
    // </View>

    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-between flex-row w-full my-5 px-5">
        <View className="flex-start">
          <Text className="small-bold text-primary">DELIVER TO</Text>
        </View>
      </View>
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven = index % 2 == 0;
          return (
            <View>
              <Pressable
                className={cn(
                  "offer-card",
                  isEven ? "flex-row-reverse" : "flex-row"
                )}
                style={{ backgroundColor: item?.color }}
                android_ripple={{ color: "#ffffff" }}
              >
                {({ pressed }) => (
                  <Fragment>
                    <View className={"h-full w-1/2"}>
                      <Image
                        source={item.image}
                        className={"size-full"}
                        resizeMode={"contain"}
                      />
                    </View>
                    <View
                      className={cn(
                        "offer-card__info",
                        isEven ? "pl-10" : "pr-10"
                      )}
                    >
                      <Text className="h1-bold text-white leading-tight">
                        {item.title}
                      </Text>
                      <Image
                        source={images.arrowRight}
                        className="size-10"
                        resizeMode="contain"
                        tintColor="#ffffff"
                      />
                    </View>
                  </Fragment>
                )}
              </Pressable>
            </View>
          );
        }}
        contentContainerClassName="pb-28 px-5"
      />
    </SafeAreaView>
  );
}
