import { React, useState, useEffect} from 'react'
import {createContext } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [wordList, setWordList] = useState([])

    useEffect(() => {
        getVocabulary()
    }, [] )



  function getVocabulary() {
    fetch('/vocabulary' ,{
        method: 'GET',
    })    
        .then(res => res.json())
        .then(
            (result) => {
                setWordList(result)
            }
        )
    }
    return(
        <GlobalContext.Provider value={{wordList}}>
          {props.children}  
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;
