import { Request,Response} from "express";
import {translate} from 'google-translate-api-x'
import shortCode from '../languageCodes/shortCode.json'  assert {type:'json'}

async function handleToTranslate(req :Request,res : Response) {
   const {message,toLang} :{[x:string]:string} = req.body
   // const toCode= shortCode.find(value=>toLang===value.name)
   console.log( typeof toLang)
   if(!toLang) return res.render('home')
//    const inputMessage = message
   const getTranslated =  await translate(message,{to:toLang , autoCorrect:true})
   console.log(getTranslated.text)
   const newTranslation = getTranslated.text
   
   //res.status(200).json({translation: getTranslated.text})
   return res.render('mesg',{newTranslation,message,shortCode})
}

export{
    handleToTranslate,
    
}
