# vue3-vite-env-demo

## 集成内容

### vite-plugin-checker

> [官网](https://vite-plugin-checker.netlify.app/)
> Vite插件，提供TypeScript, ESLint, vue-tsc等检查

浏览器界面可以阅览到项目中的代码错误提示

### @vitejs/plugin-vue-jsx

> [官网](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

在vue环境下提供jsx写法

```tsx
import { defineComponent } from 'vue'

// named exports w/ variable declaration: ok
export const Foo = defineComponent({})

// named exports referencing variable declaration: ok
const Bar = defineComponent({ render() { return <div>Test</div> }})
export { Bar }

// default export call: ok
export default defineComponent({ render() { return <div>Test</div> }})

// default export referencing variable declaration: ok
const Baz = defineComponent({ render() { return <div>Test</div> }})
export default Baz
```
