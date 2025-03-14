// @index('./**/index.{ts,tsx}', f => `export { default as ${f.path.split('/').reverse()[1]} } from '${f.path.replace(/\/index$/, '')}';`)
export { default as Button } from './Atoms/Button';
export { default as SwiperMain } from './Molecules/SwiperMain';
// @endindex
