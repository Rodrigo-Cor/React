import React, { useState } from 'react';
import RFC from '../pages/RFC';

const RFCContainer = () =>{
    //////////////////////////////("PPMNAAMMDD-###")
    //////////////////////////////("012345678910")
    const [rfc, setRFC] = useState("**********-###");
    const [form, setForm] = useState({nombre: '', paterno:'',materno:'',fechaNacimiento:''});
    
    const onChange = (e) =>{
        let name = e.target.name;
        let value = String( e.target.value ).toUpperCase();
        
        setForm({...form, [name] : value});
        if( name === "nombre" ){
            let sub1 = rfc.substring(0,3);
            let sub2 = rfc.substring(4, 14);
            if( value.length === 1 ){
                let nombre = value.substring(0, 1);
                if(((sub1 ==="PEN" || sub1 === "MAM" || sub1 === "COG" || sub1 === "COJ") && nombre === "E") ||
                    ((sub1 ==="CAC" || sub1 === "CAG" || sub1 === "CAK" || sub1 === "MUL" || sub1 === "PUT" || sub1 === "COJ" || sub1 === "KAC"
                    || sub1 === "KAG" || sub1 === "KAK" || sub1 === "PED" || sub1 === "RAT") && nombre === "A") ||
                    ((sub1 ==="COJ" || sub1 === "FET" || sub1 === "JOT" || sub1 === "KAC" || sub1 === "KAG" || sub1 === "KOJ" || sub1 === "KUL"
                    || sub1 === "MAM" || sub1 === "PED" || sub1 === "QUL" || sub1 === "CAC" || sub1 === "CAG" || sub1 === "CAK" || 
                    sub1 === "CUL" || sub1 === "MOC" || sub1 === "PUT") && nombre === "O") || ((sub1 ==="COJ" || sub1 === "BUE") 
                    && nombre === "I") || ((sub1 ==="MEA") && nombre === "S") || ((sub1 ==="RUI") && nombre === "N") || 
                    ((sub1 ==="BUE") && nombre === "Y") || ((sub1 ==="GUE") && nombre === "Y") || ((sub1 ==="MEA") && nombre === "R") || 
                    ((sub1 ==="MEO") && nombre === "N") || ((sub1 ==="MEA") && nombre === "R")){
                    nombre= "X";
                }
                setRFC( sub1 + nombre  + sub2 );
            }
            else if( value.length < 2 ){
                setRFC(sub1 + "*" + sub2 );
            }
        }
        else if( name === "paterno" ){
            let sub = rfc.substring(2,14);
            if( value.length === 2 ){
                let paterno = value.substring(0, 2);
                setRFC( paterno + "" + sub );
            }
            else if( value.length < 2 ){
                setRFC("**" + sub );
            }
        }
        else if( name === "materno" ){
            let sub1 = rfc.substring(0,2);
            let sub2 = rfc.substring(3, 14);
            
            if( value.length === 1 ){
                let materno = value.substring(0, 1);
                setRFC( sub1 + materno + sub2 );
            }
            else if( value.length < 2 ){
                setRFC(sub1 + "*" + sub2);
            }
        }


        else{
            let sub1 = rfc.substring(0,4);
            let sub2 = rfc.substring(10, 14);
            let arr = value.split("-");
            setRFC( sub1 + arr[0].substring(2,5) + arr[1] + arr[2] + sub2 );
            // aaaa - mm - dd
        }    
    }

    return(
        <RFC 
            rfc={rfc} 
            form={form} 
            onChange={onChange} 
        />
    )
};

export default RFCContainer;