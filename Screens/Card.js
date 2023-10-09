
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');
const responsiveSize = (number) => {
    const currentScreen = Dimensions.get('window');
    return (currentScreen.height / currentScreen.width) * number;
};

const CardA = ({ element }) => {
    return (
        <TouchableOpacity
            style={styles.MSBack}
        >
            <LinearGradient
                colors={['#04266D', '#5C07AB']}
                style={styles.MindfullCont}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.c1Container}>
                    <View>
                        <Text style={styles.r1Text}>{element.first_name} {element.last_name}</Text>
                        <Text style={styles.r2Text}>{element.gender}{element.id}</Text>
                    </View>
                    <View style={styles.r2}>
                        <Text style={styles.r2Text}>📧 {element.email}</Text>
                        <Text style={styles.r2Text}>💼 {element.domain}</Text>
                    </View>
                </View>
                <View style={styles.c2Container}>
                    <SafeAreaView style={styles.c2Back}>
                        <Image source={{ uri: element.avatar }} style={styles.c2Icon} />
                    </SafeAreaView>
                    {/* <TouchableOpacity style={styles.AddButton}>
                        <Text >
                            Add to Team
                        </Text>
                    </TouchableOpacity> */}

                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    c1Container: {
        width: '70%',
        justifyContent: 'space-around',
        padding: '5%',
    },
    r2: {
        flexDirection: 'row',
        gap: responsiveSize(5),
    },
    r1Text: {
        fontFamily: 'Rubik',
        fontSize: 20,
        color: '#FFFFFF',
    },
    r2Text: {
        fontFamily: 'Rubik',
        fontSize: 14,
        color: '#FFFFFF',
    },
    c2Container: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },
    c2Back: {
        height: responsiveSize(30),
        width: responsiveSize(30),
        borderRadius: 9999,
        backgroundColor: '#9B51E0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    c2Icon: {
        height: "80%",
        width: "80%",
        resizeMode: 'contain',
    },
    MindfullCont: {
        height: responsiveSize(60),
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
    },
    MSBack: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        alignSelf: 'center',
        marginVertical: '2%',
    },
});
export default CardA;
