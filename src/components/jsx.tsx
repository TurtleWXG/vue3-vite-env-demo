import { defineComponent } from 'vue'

const Foo = defineComponent({
  setup() {
    const foo = 'foo'
    return () => <div>{foo}</div>
  }
})

export default Foo
