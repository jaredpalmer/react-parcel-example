# React Parcel Example

A minimum viable React app with [Parcel Bundler](https://parceljs.org).

## Getting started

Clone and install deps
```
git clone git@github.com:jaredpalmer/react-parcel-example.git
cd react-parcel-example
yarn 
yarn start
```

Then open `http://localhost:1234` and edit `index.js` and press save. Parcel with automagically hot reload you files whenever you make changes.


## Building for Production

```
npm run build
```

This will compile your JS and copy your `index.html` to the `dist` folder which you can deploy whereever as as a good ol' webpage.

**Note: [There is a bug in Parcel right now messing up builds with uglifyjs](https://github.com/parcel-bundler/parcel/issues/8).**

In the meantime you can replace the `build` in `package.json` with the following:

```
NODE_ENV=production parcel build index.html --no-minify
```





