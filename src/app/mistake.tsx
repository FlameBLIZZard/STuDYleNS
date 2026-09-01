import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function MistakeScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-background pt-4 px-4 pb-12">
      
      {/* Alert Header */}
      <View className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 flex-row items-center shadow-sm">
        <View className="bg-red-100 w-12 h-12 rounded-full items-center justify-center mr-4">
          <Text className="text-xl">⚠️</Text>
        </View>
        <View className="flex-1">
          <Text className="text-lg font-bold text-red-800">Mistake detected</Text>
          <Text className="text-red-600 font-medium text-sm mt-0.5">Your error is in Step 4</Text>
        </View>
      </View>

      {/* Notebook UI */}
      <View className="bg-[#FAFAFA] rounded-3xl shadow-sm border border-gray-200 mb-6 overflow-hidden">
        {/* Notebook Header */}
        <View className="bg-gray-100 px-6 py-3 border-b border-gray-200 flex-row justify-between items-center">
          <Text className="text-textSecondary font-bold text-xs uppercase tracking-wider">Your Work</Text>
          <Text className="text-textSecondary text-xs">Solve for x</Text>
        </View>

        {/* Notebook Content - Lines styling */}
        <View className="p-6 relative">
          {/* Faint blue lines like a notebook background (simulated using border-b) */}
          <View className="absolute inset-0 top-6 left-6 right-6 opacity-30">
            {[...Array(6)].map((_, i) => (
              <View key={i} className="h-12 border-b border-blue-200" />
            ))}
          </View>

          <View className="gap-5">
            {/* Step 1 */}
            <View>
              <Text className="text-gray-400 text-xs font-bold mb-1">Step 1</Text>
              <Text className="text-text text-xl font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x + 3 = 11</Text>
            </View>

            {/* Step 2 */}
            <View>
              <Text className="text-gray-400 text-xs font-bold mb-1">Step 2</Text>
              <Text className="text-text text-xl font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 11 - 3</Text>
            </View>

            {/* Step 3 */}
            <View>
              <Text className="text-gray-400 text-xs font-bold mb-1">Step 3</Text>
              <Text className="text-text text-xl font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
            </View>

            {/* Step 4 (Mistake) */}
            <View className="bg-red-50 border border-red-300 rounded-xl p-3 relative shadow-sm">
              <Text className="text-red-800 text-xs font-bold mb-1">Step 4</Text>
              <Text className="text-red-900 text-xl font-mono tracking-widest font-bold" style={{ fontFamily: 'monospace' }}>x = 3</Text>
              <View className="absolute right-3 top-1/2 -translate-y-3">
                <Text className="text-red-500 text-xl">❌</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Teacher/AI Analysis Card */}
      <View className="bg-card rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
        <View className="mb-4">
          <View className="flex-row items-center mb-1">
            <Text className="text-lg mr-2">✅</Text>
            <Text className="text-text font-medium leading-relaxed">
              You correctly reached <Text className="font-bold font-mono">2x = 8</Text>.
            </Text>
          </View>
          <View className="flex-row items-start">
            <Text className="text-lg mr-2">❌</Text>
            <Text className="text-text font-medium leading-relaxed flex-1">
              But when isolating x, you divided incorrectly.
            </Text>
          </View>
        </View>
        
        <View className="bg-[#E8F4F1] border border-[#CDE5DF] rounded-xl p-4 mt-2">
          <Text className="text-secondary font-bold text-xs uppercase tracking-wider mb-3">Correction</Text>
          <View className="items-center">
            <Text className="text-text text-lg font-mono tracking-widest" style={{ fontFamily: 'monospace' }}>2x = 8</Text>
            <Text className="text-secondary text-base font-mono tracking-widest my-1" style={{ fontFamily: 'monospace' }}>÷2   ÷2</Text>
            <View className="h-px bg-secondary w-24 my-1 opacity-50" />
            <Text className="text-text text-xl font-bold font-mono tracking-widest mt-1" style={{ fontFamily: 'monospace' }}>x = 4</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        className="bg-primary rounded-full p-4 items-center shadow-sm mb-10"
        onPress={() => router.push("/explanation")}
      >
        <Text className="text-white text-lg font-bold">Explain my mistake</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
