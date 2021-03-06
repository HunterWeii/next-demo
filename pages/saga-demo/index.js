import { Provider } from "react-redux";
import { store } from "stores/saga-demo";
import Counter from "components/pages/saga-demo/Counter";

console.log("test web hook")

export default function SagaDemo() {
  return (
    <Provider store={ store }>
      <Counter />
    </Provider>
  )
}