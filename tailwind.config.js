module.exports = {
  content: [
    "./pages/index.js",
    "./components/Sidebar.js",
    "./components/SidebarLink.js",
    "./components/Feed.js",
    "./components/Input.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
