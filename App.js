import {  StyleSheet, Text,  View, Image } from 'react-native';
import Producto from './apiDog';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
    
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Text style={styles.textoB}>Dog API</Text>
      <View style={styles.contenedor}> 
        <Producto/>
        <Image style={styles.imgDog}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#FDFEFE',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 25,
  },
  encabezado:{
    flex:1.4,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#566573'
  },
  cuerpo:{
    flex:8
  },
  imagenlog:{
    width:70,
    height:70,
    marginTop: 25,
    marginRight:15,
    marginLeft: 15,
  },
  textoB:{
    color:'#F0B27A',
    fontSize:25,
    textAlign: 'center',
    marginTop: 100,
  },
  imgDog:{
    alignSelf: 'center',
    width:100,
    height:100,
    marginTop: 25,
  },
  contenedor:{
    alignSelf: 'center',
    borderColor: 'black',
  },

  
});