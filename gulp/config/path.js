import * as nodePath from 'path';
const rootFolger = nodePath.basename(nodePath.resolve());


const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/scripts/`,
        images: `${buildFolder}/images/`,
        css: `${buildFolder}/styles/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/files/`
    },
    src: {
        deploy: `${buildFolder}/**/*`,
        js: `${srcFolder}/scripts/app.js`,
        images: `${srcFolder}/images/**/*.{png,jpeg,jpg,gif,webp,ico}`,
        svg: `${srcFolder}/images/**/*.svg`,
        scss: `${srcFolder}/styles/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/scripts/**/*.js`,
        images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
        scss: `${srcFolder}/styles/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolger: rootFolger,
    ftp: ''
}