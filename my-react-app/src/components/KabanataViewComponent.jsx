import { useState } from "react";
import KabanataNav from "./KabanataNavComponent.jsx";
import K4Section from "./K4Component.jsx";
import K33Section from "./K33Component.jsx";
import K6Section from "./K6Component.jsx";
function KabanataView(){

    const [kabanataNavToggle,setKabanataNavToggle] = useState(false);
    const [k4_toggle, set_k4_toggle] = useState(true);
    const [k33_toggle, set_k33_toggle] = useState(true);
    const [k6_toggle, set_k6_toggle] = useState(true);


    return(
        <>
        <div className=" h-screen overflow-y-auto bg-[#B093A8]">

            {!kabanataNavToggle ? <KabanataNav 
            kabanataNavToggle = {kabanataNavToggle} setKabanataNavToggle = {setKabanataNavToggle}
            k4_toggle = {k4_toggle} set_k4_toggle = {set_k4_toggle}
            k33_toggle = {k33_toggle} set_k33_toggle = {set_k33_toggle} 
            k6_toggle = {k6_toggle} set_k6_toggle = {set_k6_toggle}
            />
             : null}

             {kabanataNavToggle && !k4_toggle ?  <K4Section 
                setKabanataNavToggle = {setKabanataNavToggle} kabanataNavToggle = {kabanataNavToggle}
                k4_toggle = {k4_toggle} set_k4_toggle = {set_k4_toggle}
             /> : null}

            {kabanataNavToggle && !k33_toggle ?  <K33Section 
                setKabanataNavToggle = {setKabanataNavToggle} kabanataNavToggle = {kabanataNavToggle}
                k33_toggle = {k33_toggle} set_k33_toggle = {set_k33_toggle}
             /> : null}

             {kabanataNavToggle && !k6_toggle ?  <K6Section 
                setKabanataNavToggle = {setKabanataNavToggle} kabanataNavToggle = {kabanataNavToggle}
                k6_toggle = {k6_toggle} set_k6_toggle = {set_k6_toggle}
             /> : null}

        </div>                 
        </>
    ) 

    
}

export default KabanataView