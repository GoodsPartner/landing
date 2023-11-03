/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'black-primary': '#333333',
                "black-secondary": "#414141",
                "blue-primary": "#1976D2",
                "gray-secondary": "#D3D3D3",
            }
        },
    },
    plugins: [],
}

