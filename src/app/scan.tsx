import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Animated, { FadeInUp } from "react-native-reanimated";
import { NotebookPaper } from "../components/NotebookPaper";

export default function ScanScreen() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      router.push("/analysis");
    }, 1200);
  };

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="pt-6 px-6 pb-12 items-center flex-1">
        <Animated.View entering={FadeInUp.delay(100).duration(500)} className="items-center mb-6 w-full">
          <Text className="text-3xl font-bold text-text mb-2 text-center">Scan your work</Text>
          <Text className="text-center text-textSecondary text-lg px-4 leading-relaxed">
            Show StudyLens how you solved it.
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(300).duration(500)} className="w-full relative mb-10">
          {/* Scan Frame */}
          <View className="p-4 bg-gray-100 rounded-3xl relative">
            {/* Viewfinder corners */}
            <View className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl z-10" />
            <View className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-primary rounded-tr-xl z-10" />
            <View className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl z-10" />
            <View className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-primary rounded-br-xl z-10" />
            
            {/* The Paper */}
            <NotebookPaper />
            
            {/* Scanning Overlay Effect */}
            {isScanning && (
              <Animated.View 
                className="absolute inset-0 bg-primary/20 rounded-3xl"
              />
            )}
          </View>
        </Animated.View>

        <Animated.View entering={FadeInUp.delay(500).duration(500)} className="w-full gap-4 pb-10">
          <TouchableOpacity 
            className={`rounded-full p-4 items-center shadow-sm ${isScanning ? 'bg-primary/70' : 'bg-primary'}`}
            onPress={handleScan}
            disabled={isScanning}
          >
            {isScanning ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text className="text-white text-lg font-bold">Analyze my work</Text>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="bg-white border border-gray-200 rounded-full p-4 items-center shadow-sm"
            onPress={() => router.back()}
            disabled={isScanning}
          >
            <Text className="text-text text-lg font-bold">Choose another</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </ScrollView>
  );
}


