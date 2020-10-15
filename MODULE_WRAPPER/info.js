console.log(__filename);
console.log(__dirname);
console.log(exports);
console.log(require);


/*
--------------------OUTPUT--------------------------


/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js
/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER
{}
[Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER',
    exports: {},
    parent: null,
    filename: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js',
    loaded: false,
    children: [],
    paths: [
      '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/node_modules',
      '/home/root1/Desktop/STUDY/NODEJS/node_modules',
      '/home/root1/Desktop/STUDY/node_modules',
      '/home/root1/Desktop/node_modules',
      '/home/root1/node_modules',
      '/home/node_modules',
      '/node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function],
    '.json': [Function],
    '.node': [Function]
  },
  cache: [Object: null prototype] {
    '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js': Module {
      id: '.',
      path: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER',
      exports: {},
      parent: null,
      filename: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js',
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
}
[nodemon] clean exit - waiting for changes before restart
[nodemon] restarting due to changes...
[nodemon] starting `node info.js`
/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js
/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER
{}
[Function: require] {
  resolve: [Function: resolve] { paths: [Function: paths] },
  main: Module {
    id: '.',
    path: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER',
    exports: {},
    parent: null,
    filename: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js',
    loaded: false,
    children: [],
    paths: [
      '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/node_modules',
      '/home/root1/Desktop/STUDY/NODEJS/node_modules',
      '/home/root1/Desktop/STUDY/node_modules',
      '/home/root1/Desktop/node_modules',
      '/home/root1/node_modules',
      '/home/node_modules',
      '/node_modules'
    ]
  },
  extensions: [Object: null prototype] {
    '.js': [Function],
    '.json': [Function],
    '.node': [Function]
  },
  cache: [Object: null prototype] {
    '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js': Module {
      id: '.',
      path: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER',
      exports: {},
      parent: null,
      filename: '/home/root1/Desktop/STUDY/NODEJS/MODULE_WRAPPER/info.js',
      loaded: false,
      children: [],
      paths: [Array]
    }
  }
}


*/