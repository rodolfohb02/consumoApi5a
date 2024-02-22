import { ActivityIndicator, Alert, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { estilos } from './stylos'

const Producto = () => {
    const [dato,setDato]=useState(null)
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((res)=>res.json())
        .then((obj)=>{
            setDato(obj)
            setLoad(true)
        })
        .catch((err)=>Alert.alert('Ocurrio un error : '+err))
    },[])

    const screenL=()=>{
        return(
        <View>
            <Text style={estilos.texto}>Nombre : {dato.status}</Text>
            <Text style={estilos.texto}>Imagen :</Text>
            <Image source={{uri:dato.message}} style={{height:200,width:280, borderRadius:5}}/>

            <Text style={estilos.texto}>Nombre : {dato.status}</Text>
            <Text style={estilos.texto}>Imagen :</Text>
            <Image source={{uri:dato.message}} style={{height:200,width:280, borderRadius:5}}/>
            
            <Text style={estilos.texto}>Nombre : {dato.status}</Text>
            <Text style={estilos.texto}>Imagen :</Text>
            <Image source={{uri:dato.message}} style={{height:200,width:280, borderRadius:5}}/>
        </View>
        )
    }

    const screenU=()=>{
        return(
            <View>
                <Text>Recopilando Informacion</Text>
                <ActivityIndicator/>
            </View>
        )
    }

  return (
    <View>
    {load?screenL():screenU()}
    </View>
  )
}

export default Producto