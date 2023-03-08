import { Dimensions } from "react-native";

export const constants = {
    ProductSansRegular: 'Product Sans Regular',
    ProductSansBold: 'Product Sans Bold',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    white: '#FFFFFF',
    green: '#027F3D' ,
    center: {
       display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center',
    },
    mt0:{
        marginTop: 10,
    },
    mt2:{
    marginTop: 50,
    }
    ,
    mt3:{
    marginTop:100,
    }, 
    MarginVertical:{
        MarginVertical:50,
    },
    h2:{
        fontWeight: '700',
        fontSize: 30,
    }
} 