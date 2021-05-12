import axios from "axios";
import { URL } from "../res/url";

export function FetchData(){
    const res = axios.get(URL.common).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
    return res
}