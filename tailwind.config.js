/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "afenoid-green": "#224D20",
        "afenoid-yellow": "#CCD311",
        "afenoid-lemon": "#76A62E",
        "afenoid-light-lemon": "#F0F7E2",
        "afenoid-dark-green": "#0F261A",
        "afenoid-white":"#F8FAF4",
        "floral-white": "#FFF9F2",
        "afenoid-light-grey": "#EBEEEB",
        "afenoid-dark-grey": "#9FA39B"
      },
      fontFamily: {
        gambetta: ["Gambetta", "serif"],
        "proxima-nova": ["Proxima Nova", "sans-serif"],
        "playfair-display": ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      screens: {
        xs: "320px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        mxl: { max: "1279px" },
        mlg: { max: "1023px" },
        mmlg: { max: "976px" },
        mmd: { max: "768px" },
        msm: { max: "639px" },
        mxs: { max: "480px" },
        mxxs: { max: "400px" },
        mxxss: { max: "375px" },
        mxxssw: { max: "355px" },
        mxxxs: { max: "320px" },
        "ms-height": { raw: "(max-height: 700px)" },
        "mxl-height": { raw: "(max-height: 850px)" },
      },
      fontSize: {
        //Header element styles
        "h1": ["3.25rem", ],
        "h2": ["2.5rem", ],
        "h3": ["2.00rem", ],
        "h4": ["1.75rem", ],
        "h5": ["1.25rem", ],
        "h6": ["1.125rem", ],

        // Body variant styles - [Large, Medium, Regular, Small]
        "body-reg": ["1rem", ],
        "caption-mid": ["0.875rem", ],
        "caption-reg": ["0.875rem", ],
      }
    },
  },
  plugins: [],
}

