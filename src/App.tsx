// If prg is not exist then
// npm create vite@latest my-project -- --template react
// cd my-project
//
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
// tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

//npm run dev
// npm install -D @tailwindcss/forms

// npm install -D prettier prettier-plugin-tailwindcss


function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
