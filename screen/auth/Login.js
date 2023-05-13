import { StyleSheet, Text, View, Button } from "react-native";

function Login({ navigation }) {

    return <View style={style.container}>
        <Text style={style.text}>Login Screen</Text>
        <View style={style.buttonContainer}>
            <Button style={style.button} title="Login"
                onPress={() => navigation.navigate('Home')}
            />
            <Button style={style.button} title="Sign up"
                onPress={() => navigation.replace('Signup', {})} />
        </View>
    </View>
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    buttonContainer: {
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: 'space-between',
        width: 300
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        margin: 16,
        height: "20%"
    },
    button: {
        margin: 16,
        padding: 8,
        width: '40%'
    }
});

export default Login;