import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20, 
        paddingHorizontal: 20,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1, 
        paddingBottom: 20,
    },
    logo: {
        width: 200,
        height: 200,
    },
    ptext: {
        marginTop: 20,
        fontSize: 35,
        fontWeight: '900',
    },
    text: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: '400',
        color: 'gray',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    plusContainer: {
        marginTop: 40,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        cursor: 'pointer',
    },
    plusicon: {
        width: 100, 
        height: 100,
    },
});

export default styles;