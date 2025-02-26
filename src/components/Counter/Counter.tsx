import Button from "components/Button/Button";
import { ButtonControl, CounterResult, CounterWrapper } from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { counterSliceSelectors, counterSliceActions } from "store/redux/counter/counterSlice";

function Counter() {
  // Вариант контроля компонента через redux
  //8. Забираем значение count из стора
  const count = useAppSelector(counterSliceSelectors.count)
  //9. Создать функцию dispatch, которая диспачить экшен
  const dispatch = useAppDispatch();

  console.log(counterSliceActions)

  const multiplyValue = 5;

  //10. Создаём функции, которые будут диспатчить определённые экшены в
  // ответ на действия эшен криэйтеров (кнопок)
  const onPlus = () => {
    // 11. Диспатчим экшен, для вызова редьюсера, который отвечает з алогику увеличения каунтера на 1
    dispatch(counterSliceActions.add())
  }

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(multiplyValue))
  }

  const onDivide = () => {
    dispatch(counterSliceActions.divide())
  }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-" />
        <Button onButtonClick={onDivide} name="/" />
      </ButtonControl>
      <CounterResult>{count}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
        <Button onButtonClick={onMultiply} name={`* ${multiplyValue}`} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;