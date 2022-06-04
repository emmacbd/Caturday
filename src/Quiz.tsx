import React from 'react';
import { CatObject, errorCat } from './Interfaces';


type CatData = {
    catData: CatObject[],
  }

export const Quiz: React.FC<CatData> = ({catData}) => {




    return (
        <form>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Option 3
          </label>
        </div>
        <button className="btn btn-default" type="submit">SHOW ME MY CAT</button>
      </form>
    )
}

//actual questions
//Do you declare that you'd despair if your new kitty cat bears any hair - hairless -if  send em hairless 
//I DO DECLAIHR
//0 or 1 binary baby

//curled up by the campfire or lone ranger- affection - 
//if answers below 3 get sent angele's savage roast
//1-5, <= 4 is affectionate, less than 4 gets a rock

//ol yeller - dog friendly
//1-5, if yes get cats 4-5


//barn burner(party animal) or like to stay home on the range
// stranger friendly
//yes
//1-5, 

// how do you feel about screaming cowboy song vocalization 
//1-5, that was purrfection!  i'm feline sad now



//red herring questions
//favorite jerky
//do you put beans in your chili 
//Ford or Chevy or Rivian
//it's your off day, you going to cabela's or bass pro?
//Wrangler or Carhhartyharr
//did you wake up and choose violence???? sherrif or MEOWST WANTED


