/* craco.config.js */
const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@Components': path.resolve(__dirname, 'src/components'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@Hooks': path.resolve(__dirname, 'src/Hooks'),
            '@So_on': path.resolve(__dirname, 'src/so_on'),
        },
    },
};