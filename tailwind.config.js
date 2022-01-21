module.exports = {
  content: [
    "./pages/index.js",
    "./components/Sidebar.js",
    "./components/SidebarLink.js",
    "./components/Feed.js",
    "./components/Input.js",
    "./components/Login.js",
    "./components/Post.js",
    "./components/Modal.js",
  ],
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
