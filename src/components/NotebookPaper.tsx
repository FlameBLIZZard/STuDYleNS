import { View, Text, StyleSheet, Platform } from "react-native";

export function NotebookPaper({ scale = 1 }: { scale?: number }) {
  // Use a more natural handwritten-looking font stack on web, fallback to monospace
  const handwritingFont = Platform.OS === 'web' 
    ? '"Comic Sans MS", "Chalkboard SE", "Comic Neue", cursive, sans-serif' 
    : 'monospace';

  return (
    <View 
      className="bg-[#FFFDF8] rounded-xl shadow-md border border-gray-200 overflow-hidden w-full" 
      style={{ aspectRatio: 3/4, transform: [{ scale }] }}
    >
      {/* Red margin line - slightly faded for realism */}
      <View className="absolute left-[15%] top-0 bottom-0 w-px bg-red-200 opacity-70" />
      
      {/* Header spacing */}
      <View className="h-[12%] border-b border-blue-100 opacity-60" />
      
      {/* Content lines with slight organic imperfections in placement and tilt */}
      <View className="px-[20%] py-1">
        <Text className="text-gray-700 text-lg tracking-widest mb-1" style={[{ fontFamily: handwritingFont, transform: [{ rotate: '-0.5deg' }] }]}>
          Solve for x:
        </Text>
      </View>
      
      <View className="h-[10%] border-b border-blue-100 opacity-60 px-[20%] justify-center pl-[21%]">
        <Text className="text-gray-800 text-[19px] tracking-widest" style={[{ fontFamily: handwritingFont, transform: [{ rotate: '-1.5deg' }] }]}>
          2x + 3 = 11
        </Text>
      </View>
      
      <View className="h-[10%] border-b border-blue-100 opacity-60 px-[20%] justify-center pl-[19%]">
        <Text className="text-gray-800 text-[19px] tracking-widest" style={[{ fontFamily: handwritingFont, transform: [{ rotate: '-0.5deg' }] }]}>
          2x = 11 - 3
        </Text>
      </View>
      
      <View className="h-[10%] border-b border-blue-100 opacity-60 px-[20%] justify-center pl-[22%]">
        <Text className="text-gray-800 text-[19px] tracking-widest opacity-90" style={[{ fontFamily: handwritingFont, transform: [{ rotate: '-2deg' }] }]}>
          2x = 8
        </Text>
      </View>
      
      <View className="h-[10%] border-b border-blue-100 opacity-60 px-[20%] justify-center pl-[20%]">
        <Text className="text-gray-800 text-[19px] tracking-widest font-medium" style={[{ fontFamily: handwritingFont, transform: [{ rotate: '0.5deg' }] }]}>
          x = 3
        </Text>
      </View>
      
      {/* Remaining lines */}
      {[...Array(4)].map((_, i) => (
        <View key={i} className="h-[10%] border-b border-blue-100 opacity-60" />
      ))}
    </View>
  );
}
