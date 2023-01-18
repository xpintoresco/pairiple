import React from 'react';
import { View, SafeAreaView, ImageBackground, StyleSheet} from 'react-native';
import Logo from '../../../assets/images/logo_pairible.png';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const StartUpScreen = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    
    const navigation = useNavigation()

    return (
            <SafeAreaView style={styles.root}>
                <ImageBackground source={Logo} style={styles.logo} resizeMode="cover"/> 

                <View style={styles.button}>
                <CustomButton
                    text="EXPLORE!"
                    onPress={() => navigation.navigate('FillInfo')}
                />

                </View>

            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    button: {
        height: 200,
        alignItems: "center",
        backgroundColor: "#fff8f0"
    },
    logo: {
        flex: 1,
        justifyContent: "center"
    },
});

export default StartUpScreen;