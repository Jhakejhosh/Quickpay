/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  	],
  theme: {
    extend: {
    	colors: {
    		bgColor: '#000028',
    		cardColor: '#000030',
    		primary: '#8080ff',
    		secondary: '#eb99ff',
    		subtle: 'rgb(204, 204, 255)',
    		lightbgColor: 'rgba(230, 230, 255, 0.1)',
    		lightbgColor2: 'rgba(230, 230, 255, 0.3)'
    	}
    },
  },
  plugins: [],
}

