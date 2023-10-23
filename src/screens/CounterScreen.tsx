import { Button, SafeAreaView, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

const CounterScreen = () => {
    const count = useSelector((state: any) => state.count.value);
    const dispatch = useDispatch();

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 72, textAlign: 'center', color: 'black' }} >{count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
            <Button title="Decrement" onPress={() => dispatch(decrement())} />
        </SafeAreaView>
    )
}

export default CounterScreen