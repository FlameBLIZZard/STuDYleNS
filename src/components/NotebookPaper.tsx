import { View, Text, StyleSheet } from "react-native";

export function NotebookPaper({ scale = 1 }: { scale?: number }) {
  return (
    <View 
      className="bg-[#FFFDF8] rounded-xl shadow-md border border-gray-200 overflow-hidden w-full" 
      style={{ aspectRatio: 3/4, transform: [{ scale }] }}
    >
      {/* Red margin line */}
      <View className="absolute left-[15%] top-0 bottom-0 w-px bg-red-200" />
      
      {/* Header spacing */}
      <View className="h-[12%] border-b border-blue-100" />
      
      {/* Content lines */}
      <View className="px-[20%] py-1">
        <Text className="text-gray-800 text-lg font-mono tracking-widest mb-1" style={styles.handwriting}>Solve for x:</Text>
      </View>
      <View className="h-[10%] border-b border-blue-100 px-[20%] justify-center">
        <Text className="text-gray-800 text-lg font-mono tracking-widest" style={styles.handwriting}>2x + 3 = 11</Text>
      </View>
      <View className="h-[10%] border-b border-blue-100 px-[20%] justify-center">
        <Text className="text-gray-800 text-lg font-mono tracking-widest" style={styles.handwriting}>2x = 11 - 3</Text>
      </View>
      <View className="h-[10%] border-b border-blue-100 px-[20%] justify-center">
        <Text className="text-gray-800 text-lg font-mono tracking-widest" style={styles.handwriting}>2x = 8</Text>
      </View>
      <View className="h-[10%] border-b border-blue-100 px-[20%] justify-center">
        <Text className="text-gray-800 text-lg font-mono tracking-widest" style={styles.handwriting}>x = 3</Text>
      </View>
      
      {/* Remaining lines */}
      {[...Array(4)].map((_, i) => (
        <View key={i} className="h-[10%] border-b border-blue-100" />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  handwriting: {
    fontFamily: 'monospace',
    transform: [{ rotate: '-1deg' }],
    opacity: 0.85,
  }
});
