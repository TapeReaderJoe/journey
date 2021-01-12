module.exports = {
  title: 'Journey',
  description: 'Unlock your true potential.',
  base: '/journey/',
  dest: 'dist/',
  theme: require.resolve('../../'),
  themeConfig: {
    defaultTheme: 'dark',
    showThemeButton: true,
    cover: '/cover.jpg',
    //logo: '/logo.png',
    search: true,
    backgroundImage: false,
    pageGroup: 5,
    // postTime: {
    //   createTime: 'Create Time',
    //   lastUpdated: 'Last Updated',
    //   options: {
    //     dateStyle: 'full',
    //     timeStyle: 'short',
    //     hour12: false,
    //     weekday: 'long'
    //   }
    // },
    nav: [
      { text: 'Hem', link: '/' },
      { text: 'Artiklar', link: '/posts/' },
      { text: 'Taggar', link: '/tag/' },
      { text: 'Kategorier', link: '/category/' },
      { text: 'Om', link: '/about/' }
    ],
    footer: [
      //{ text: 'Twitter', link: 'https://www.twitter.com/yourney' }
    ]
  },
    postcss: {
     plugins: [
       require('css-prefers-color-scheme/postcss'),
       require('autoprefixer')
     ]
   } 
}
