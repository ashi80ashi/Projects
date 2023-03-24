import Card from "./Card"
import { useState } from "react";
function Cards({data}) {
    
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(data.length - 1);
          
        }
        else {
            setIndex(index - 1);
          
        }
    }
    
    function rightShiftHandler() {
        if(index + 1 >=data.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    return (
              <Card details={data[index]} leftShiftHandler={leftShiftHandler} rightShiftHandler={rightShiftHandler}/>
    )
}
export default Cards