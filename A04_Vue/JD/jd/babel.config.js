module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    //按需引入element框架
    ["@babel/preset-env", { "modules": false }],
    
  ],
    //按需引入element框架
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]

}
