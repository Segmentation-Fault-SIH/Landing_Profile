import type { Config } from 'tailwindcss'

const config: Config = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/profile/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '90screen': '90vh',
        '85screen': '85vh',
        '80screen': '80vh',
        '70screen': '70vh',
        '60screen': '60vh',
        '90h':'90%',
        '85h':'85%',
        '30h': '30%',
        '40h': '40%',
        '40screen': '40vh',
        '20screen': '20vh', // You can name it whatever you want, but '90p' is concise and clear.
      },
      width: {  
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '95screen': '95vw',
      '20screen': '20vw',
    },
    spacing: {
      '100': '100px', // Custom spacing value
      '128': '32rem', // Another custom spacing value
    },
  },
  },
  plugins: [],
}
export default config
