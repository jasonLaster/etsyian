SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],

  globalEvaluationScope: false,

  babelOptions: {
    blacklist: []
  },

  transpiler: "plugin-babel",

  map: {
    "jquery": "npm:jquery@2.2.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.2",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "react": "npm:react@0.14.7",
    "react-dom": "npm:react-dom@0.14.7"
  },

  packages: {
    "etsyian": {
      "format": "esm"
    },
    "npm:react@0.14.7": {
      "map": {
        "fbjs": "npm:fbjs@0.6.1"
      }
    }
  }
});
