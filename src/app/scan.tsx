import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function ScanScreen() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      router.push("/analysis");
    }, 800);
  };

  return (
    <View className="flex-1 bg-background justify-center px-6">
      <View className="items-center mb-10">
        <View className="w-24 h-24 bg-[#E8F0F6] rounded-full items-center justify-center mb-6">
          <Text className="text-4xl">📷</Text>
        </View>
        <Text className="text-3xl font-bold text-text mb-4">Scan your work</Text>
        <Text className="text-center text-textSecondary text-lg px-4 leading-relaxed">
          Take a photo of your handwritten solution and StudyLens will find where you went wrong.
        </Text>
      </View>

      <View className="gap-4">
        <TouchableOpacity 
          className={`rounded-full p-4 items-center shadow-sm ${isScanning ? 'bg-primary/70' : 'bg-primary'}`}
          onPress={handleScan}
          disabled={isScanning}
        >
          {isScanning ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white text-lg font-bold">Use Camera</Text>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-white border-2 border-gray-200 rounded-full p-4 items-center shadow-sm"
          onPress={handleScan}
          disabled={isScanning}
        >
          <Text className="text-text text-lg font-bold">Upload Work</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
