# SVG to React Component
This repo uses [SVGR](https://react-svgr.com/) and allows you to convert svg file to React components

## Setup

1. Install dependencies
```bash
  yarn
```
2. Create svg (input) and components (ouput) folders
```bash
  yarn setup
```
3. Put your svgs in the `svg` folder

## Run script
```bash
yarn build:svg
```

The components will be created in the `components` folder

## Customise the output
### `svgr.config.js`
In this file you can customise the [SVGR options](https://react-svgr.com/docs/options/). Here you can specify
- Which props you want to add to the SVG tag
- Which values in the svg file you want to replace and the new values to use
- A lot more... (you can find more info in the [SVGR docs](https://react-svgr.com/docs/options/))

### `.prettierrc`
The script uses prettier, so you can just add rules here to modify the output

### `template.js`
This is the template for the SVG React component.

### `indexTemplate.js`
This is the template for the barrel file that will export all the components created
