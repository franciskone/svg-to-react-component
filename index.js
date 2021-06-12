const svgr = require('@svgr/core')

const svgCode = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Icon-Functional-pdf-24px">
        <g id="Group 670">
            <g id="Group 669">
                <path id="Vector"
                      d="M4.93437 20.561H4.71342C4.4074 20.561 4.11391 20.4416 3.89752 20.2291C3.68114 20.0165 3.55957 19.7283 3.55957 19.4277V4.69437C3.55957 4.39379 3.68114 4.10552 3.89752 3.89298C4.11391 3.68044 4.4074 3.56104 4.71342 3.56104H12.8896C13.0412 3.56107 13.1913 3.59044 13.3313 3.64749C13.4714 3.70453 13.5986 3.78812 13.7057 3.89348L18.2219 8.32935C18.329 8.43464 18.414 8.55963 18.4719 8.69717C18.5299 8.83472 18.5596 8.98213 18.5596 9.13099V11.6203"
                      stroke="#003357" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_2"
                      d="M18.1846 9.18603H13.6846C13.3862 9.18603 13.1001 9.06751 12.8891 8.85653C12.6781 8.64555 12.5596 8.3594 12.5596 8.06103V3.56104"
                      stroke="#003357" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <g id="Group 600">
                <path id="Vector_3" d="M8.18457 20.436V14.811" stroke="#003357" stroke-width="1.25"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_4"
                      d="M8.18457 14.811H8.75007C9.19762 14.811 9.62684 14.9888 9.94331 15.3053C10.2598 15.6218 10.4376 16.051 10.4376 16.4985C10.4376 16.9461 10.2598 17.3753 9.94331 17.6918C9.62684 18.0082 9.19762 18.186 8.75007 18.186H8.18757"
                      stroke="#003357" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <path id="Vector_5"
                  d="M12.9375 20.436C13.5342 20.436 14.1065 20.199 14.5285 19.777C14.9504 19.3551 15.1875 18.7828 15.1875 18.186V17.061C15.1875 16.4643 14.9504 15.892 14.5285 15.47C14.1065 15.0481 13.5342 14.811 12.9375 14.811V20.436Z"
                  stroke="#003357" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="Group 599">
                <path id="Vector_6"
                      d="M17.6875 20.436V15.936C17.6875 15.6377 17.806 15.3515 18.017 15.1405C18.228 14.9296 18.5141 14.811 18.8125 14.811H19.9375"
                      stroke="#003357" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Vector_7" d="M17.6875 18.186H19.375" stroke="#003357" stroke-width="1.25"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </g>
    </g>
</svg>
`

const config = {
  ext: 'tsx',
  typescript: true,
  replaceAttrValues: {
    '#003357': 'currentColor',
  },
  svgProps: {
    width: '{props.size}',
    height: '{props.size}',
    style: {color: '{props.color}'},
  },
  outDir: 'output',
}

svgr(svgCode, config, {componentName: 'MyComponent'}).then(jsCode => {
  debugger
  console.log(jsCode)
})