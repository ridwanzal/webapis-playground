module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '1.5em': '1.5em',
      '4.5xl': '2.5rem',
      '18px': '18px',
      '25px': '25px',
      '30px': '30px',
    },
    borderWidth: {
      '1': '1px',
      '3': '3px',
    },
    borderRadius: {
      '0.5em': '0.5em',
      '4px': '4px',
      '5px': '5px',
      '10px': '10px',
      '30px': '30px',
      'half': '50%',
    },
    extend: {
      colors: {
        'prod': '#00ebff',
        'item': '#ec1c76',
        'box': '#666',
        'payments': '#ebebeb',
        'demo': '#f4f4f4',
        'link': '#551A8B',
      },
      spacing: {
        '300px': '300px',
        '100px': '100px',
        '4px': '4px',
        '5px': '5px',
        '10px': '10px',
        '13px': '13px',
        '75px': '75px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
};
