import React from "react";
import { useState } from "react";
import { actionType } from "./Developer";

function DeveloperForm ( { dispatch } ) {
    const [programmingLanguage, setProgrammingLanguage] = useState( "" );
    const [techUsed, setTechUsed] = useState( "" );
    const [favFood, setFood] = useState( "" );
    const [favDrink, setDrink] = useState( "" );
    const [name, setName] = useState( "" );


    const handleSubmit = ( e ) => {
        e.preventDefault();
        if( !name ) return;
        dispatch( {
            type: actionType.ADD_DEVELOPER,
            payload: {
                name: name,
                programmingLanguage: programmingLanguage,
                techUsed: techUsed,
                Food: Food,
                Drink: Drink
            }
        } )
        setName( "" );
        setProgrammingLanguage( "" );
        setTechUsed( "" );
        setFood( "" );
        setDrink( "" );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="name">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={ name } onChange={ ( e ) => setName( e.target.value ) } />
            </div>
            <div className="programing">
                <label htmlFor="programmingLanguage">Programming Language</label>
                <select type="select" name="programmingLanguage" value={ programmingLanguage } onChange={ ( e ) => setProgrammingLanguage( e.target.value ) } >

                 <option value="JavaScript">JavaScript</option>
                 <option value="Java">Java</option>
                 <option value="Python">Python</option>
                 <option value="C#">C#</option>
                 <option value="C++">C++</option>
                 <option value="C">C</option>
                 <option value="Ruby">Ruby</option>
                 <option value="PHP">PHP</option>
                 <option value="Swift">Swift</option>
                 <option value="Other">Other</option>

                </select>
            </div>

            <div className="tech">
                <label htmlFor="techUsed">Tech Used</label>
                <select type="select" name="techUsed" value={ techUsed } onChange={ ( e ) => setTechUsed( e.target.value ) } >
                    <option value="">Select a tech</option>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="Vue">Vue</option>
                    <option value="Node">Node</option>
                    <option value="Express">Express</option>
                    <option value="Django">Django</option>
                    <option value="Flask">Flask</option>
                    <option value="Other">Other</option>

                </select>

            </div>


            <div className="food">
                <label htmlFor="Food">Favorite Food</label>
                <input type="text" name="Food" value={ Food } onChange={ ( e ) => setFood( e.target.value ) } />
            </div>

            <div className="drink">
                <label htmlFor="Drink">Favorite Drink</label>
                <input type="text" name="Drink" value={ Drink } onChange={ ( e ) => setDrink( e.target.value ) } />
            </div>

            <div className="submit">
            <button type="submit">Add Developer</button>
            </div>
            </form>  
            
    )
}

export default DeveloperForm;