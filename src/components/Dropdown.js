import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icons } from '../res/Icons'

export const Dropdown = (props) => {
    const [data, setdata] = useState("All")
    const [open, setopen] = useState(false)
    return(
        <View>
            <View style={styles.cont1}>
                <Text style={styles.text1}>State</Text>
                <TouchableOpacity onPress={()=>setopen(!open)} style={styles.dropdown}>
                    <Text>{data}</Text>
                    <Image source={Icons.drop} style={{width:15, height:15}}/>
                </TouchableOpacity>
                {
                    open ?
                    <ScrollView>
                        {
                            props.data.map((_,i)=>(
                                <Text>{props.data[i].state}</Text>
                            ))
                        }
                    </ScrollView> : null
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cont1:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    dropdown:{
        width:Dimensions.get('window').width/3,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:5,
        alignItems:'center',
        borderColor:'#000',
        borderWidth:0.5
    },
    text1:{
        paddingRight:20,
        fontSize:16
    }
})