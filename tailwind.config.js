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
            },
            backgroundImage: {
                'welcome-image': "url('/src/assets/img/welcome_bg.png')",
            },
            backgroundPosition: {
                "right-center": 'right center',
            },
            backgroundSize: {
                'size-50': "50%",
            }
        },
    },
    plugins: [],
}

