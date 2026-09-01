import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Animated, { FadeInUp, FadeIn } from "react-native-reanimated";
import { useProgress } from "../context/ProgressContext";

export default function ProgressScreen() {
  const router = useRouter();
  const { mastery, recentActivity } = useProgress();

  return (
    <ScrollView className="flex-1 bg-background pt-6 px-4 pb-12">
      {/* HEADER */}
      <Animated.View entering={FadeInUp.delay(100).duration(500)} className="mb-6 px-2">
        <Text className="text-3xl font-bold text-text mb-2">Your Progress</Text>
        <Text className="text-textSecondary text-lg font-medium leading-relaxed">
          You're getting better at the things you struggled with.
        </Text>
      </Animated.View>

      {/* TOPIC PROGRESS */}
      <Animated.View 
        entering={FadeInUp.delay(300).duration(500)}
        className="bg-card rounded-3xl p-6 shadow-sm border border-gray-100 mb-6"
      >
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold text-text">Solving Linear Equations</Text>
          <Text className="text-xl font-bold text-secondary">{mastery}%</Text>
        </View>
        <View className="h-3 bg-gray-100 rounded-full w-full overflow-hidden mb-2">
          <Animated.View 
            entering={FadeIn.delay(800).duration(1000)}
            className="h-full bg-secondary rounded-full" 
            style={{ width: `${mastery}%` }} 
          />
        </View>
        <Text className="text-textSecondary text-xs font-bold text-right">MASTERY</Text>
      </Animated.View>

      {/* RECENT IMPROVEMENT */}
      <Animated.View 
        entering={FadeInUp.delay(500).duration(500)}
        className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6"
      >
        <Text className="text-secondary font-bold text-xs uppercase tracking-wider mb-4">Recent Improvement</Text>
        
        <View className="mb-3">
          <Text className="text-xs text-textSecondary font-bold mb-1">Original mistake</Text>
          <Text className="text-text font-medium bg-red-50 p-3 rounded-xl border border-red-100">
            Incorrectly isolating x
          </Text>
        </View>
        
        <View>
          <Text className="text-xs text-secondary font-bold mb-1">What changed</Text>
          <Text className="text-text font-medium bg-[#E8F4F1] p-3 rounded-xl border border-[#CDE5DF]">
            Successfully solved a similar equation
          </Text>
        </View>
      </Animated.View>

      {/* LEARNING PATTERN */}
      <Animated.View 
        entering={FadeInUp.delay(700).duration(500)}
        className="bg-primary/5 rounded-3xl p-6 border border-primary/20 mb-6"
      >
        <Text className="text-primary font-bold text-xs uppercase tracking-wider mb-2">Your learning pattern</Text>
        <Text className="text-text font-medium text-lg leading-relaxed">
          You're improving at isolating variables. Keep up the great work!
        </Text>
      </Animated.View>

      {/* RECENT ACTIVITY */}
      <Animated.View 
        entering={FadeInUp.delay(900).duration(500)}
        className="mb-8 px-2"
      >
        <Text className="text-lg font-bold text-text mb-4">Recent Activity</Text>
        <View className="gap-4">
          {recentActivity.map((activity, index) => (
            <View key={activity.id} className="flex-row items-center">
              <View className={`w-8 h-8 rounded-full items-center justify-center mr-4 ${activity.completed ? 'bg-secondary' : 'bg-gray-200'}`}>
                {activity.completed ? <Text className="text-white text-xs">✓</Text> : null}
              </View>
              <Text className={`text-base font-medium ${activity.completed ? 'text-text' : 'text-textSecondary'}`}>
                {activity.label}
              </Text>
            </View>
          ))}
        </View>
      </Animated.View>

      {/* RECOMMENDED NEXT STEP */}
      <Animated.View 
        entering={FadeInUp.delay(1100).duration(500)}
        className="bg-[#E8F4F1] rounded-3xl p-6 mb-10"
      >
        <Text className="text-sm font-bold text-secondary mb-1 uppercase tracking-wider">Recommended next step</Text>
        <Text className="text-xl font-bold text-text mb-4">Practice 3 more linear equations</Text>
        <TouchableOpacity 
          className="bg-primary px-6 py-4 rounded-full items-center shadow-sm"
          onPress={() => router.navigate("/")}
        >
          <Text className="text-white font-bold text-lg">Continue Learning</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
}
