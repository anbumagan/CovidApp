import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from '../components/Dropdown'
import { FetchData } from '../utils/Fetch'

export const AppScreen = (props) => {
    const [filter, setfilter] = useState("All")
    const [data, setdata] = useState([])
    const [load, setload] = useState(true)
    const [fail, setfail] = useState(false)
    useEffect(()=>{
        FetchData().then((res)=>{
            if(res.status === 200){
              setdata(res.data.statewise)
            }  
        })
    },[])
    return(
        <View style={styles.cont}>
            <View style={styles.innercont1}>
                <Text style={styles.headText}>Covid 19 Metrics</Text>
                <Text style={styles.text1}>India</Text>
                <Dropdown data={data}/>
            </View>
            <View>
                {
                    load ? 
                    <Text>loading</Text> : 
                    fail ?
                    <Text>failed</Text> :
                    <Text>data</Text>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cont:{
        flex:1,
    },
    innercont1:{
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor: 'lightgrey',
        height:'35%',
        paddingVertical:30
    },
    headText:{
        fontSize:18,
        textTransform:'capitalize',
        color: "#000",
        fontWeight: 'bold'
    },
    text1:{
        fontSize:16,
        textTransform:'capitalize',
        color: "#000",
        paddingVertical:20
    }
})