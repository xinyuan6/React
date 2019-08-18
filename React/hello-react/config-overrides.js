const {
    override,
    fixBabelImports
} = require ("customize-cra");

module.exports = override (
    fixBabelImports("import", {
        libraryName: "antd-mobile", style: 'css' // changing importing css to less
    }),
);