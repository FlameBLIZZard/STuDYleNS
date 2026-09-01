/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#2B5B84',
        secondary: '#48A07A',
        background: '#F8F9FA',
        card: '#FFFFFF',
        text: '#1F2937',
        textSecondary: '#6B7280',
        error: '#EF4444',
        success: '#10B981',
      },
    },
  },
  plugins: [],
}
