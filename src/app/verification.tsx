import { View, Text, TouchableOpacity } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function VerificationScreen() {
  const router = useRouter();
  const { status } = useLocalSearchParams();
  const isSuccess = status === 'success';

  return (
    <View className={`flex-1 justify-center px-6 ${isSuccess ? 'bg-[#E8F4F1]' : 'bg-red-50'}`}>
      <View className="items-center mb-10">
        <View className={`w-32 h-32 rounded-full items-center justify-center mb-8 border-8 ${isSuccess ? 'bg-white border-[#CDE5DF]' : 'bg-white border-red-100'}`}>
          <Text className="text-6xl">{isSuccess ? '🏆' : '🤔'}</Text>
        </View>
        
        <Text className={`text-4xl font-bold mb-4 text-center ${isSuccess ? 'text-secondary' : 'text-red-700'}`}>
          {isSuccess ? 'Correct!' : 'Not quite.'}
        </Text>
        
        <Text className="text-center text-textSecondary text-xl px-4 leading-relaxed">
          {isSuccess 
            ? 'You fixed the mistake from your previous attempt. You got this!' 
            : 'Looks like you made a similar mistake. Do you want to review the explanation?'}
        </Text>
      </View>

      <View className="gap-4">
        <TouchableOpacity 
          className={`rounded-full p-4 items-center shadow-sm ${isSuccess ? 'bg-secondary' : 'bg-red-600'}`}
          onPress={() => isSuccess ? router.push("/progress") : router.back()}
        >
          <Text className="text-white text-lg font-bold">
            {isSuccess ? 'View Progress' : 'Try Again'}
          </Text>
        </TouchableOpacity>
        
        {isSuccess && (
          <TouchableOpacity 
            className="bg-white border-2 border-[#CDE5DF] rounded-full p-4 items-center shadow-sm"
            onPress={() => router.navigate("/")}
          >
            <Text className="text-secondary text-lg font-bold">Back to Dashboard</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
