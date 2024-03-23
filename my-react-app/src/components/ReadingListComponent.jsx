import KI_Section from "./KI_Component.jsx"
import ReadingListNav from "./ReadingListNavComponent.jsx";
import IdeaSection from "./IdeaSectionComponent.jsx";
import IISection from "./II_Compnent.jsx";
import { useState } from "react"

function ReadingList(){

    const [navListToggle,setnavListToggle] = useState(false);
    const [KI_toggle, setKI_toggle] = useState(true);
    const [idea_toggle, setIdea_toggle] = useState(true);
    const [ii_toggle, set_ii_toggle] = useState(true);


    return(
        <>
            {!navListToggle ? <ReadingListNav 
            setnavListToggle = {setnavListToggle} navListToggle = {navListToggle}
            KI_toggle = {KI_toggle} setKI_toggle = {setKI_toggle}
            idea_toggle = {idea_toggle} setIdea_toggle = {setIdea_toggle} 
            ii_toggle = {ii_toggle} set_ii_toggle = {set_ii_toggle}
            />
             : null}

             {navListToggle && !KI_toggle ?  <KI_Section 
                setnavListToggle = {setnavListToggle} navListToggle = {navListToggle}
                KI_toggle = {KI_toggle} setKI_toggle = {setKI_toggle}
             /> : null}

             {navListToggle && !idea_toggle ? <IdeaSection 
                setnavListToggle = {setnavListToggle} navListToggle = {navListToggle}
                setIdea_toggle = {setIdea_toggle} idea_toggle = {idea_toggle}
             /> : null}          

             {navListToggle && !ii_toggle ? <IISection 
                setnavListToggle = {setnavListToggle} navListToggle = {navListToggle}
                ii_toggle = {ii_toggle} set_ii_toggle = {set_ii_toggle}
             /> : null}                   
        </>
    ) 

    
}

export default ReadingList