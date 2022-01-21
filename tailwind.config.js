module.exports = {
  content: [
    "./pages/index.js",
    "./pages/[id].js",
    "./components/Sidebar.js",
    "./components/SidebarLink.js",
    "./components/Feed.js",
    "./components/Input.js",
    "./components/Login.js",
    "./components/Post.js",
    "./components/Modal.js",
    "./components/Widgets.js",
    "./components/Trending.js",
  ],
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
