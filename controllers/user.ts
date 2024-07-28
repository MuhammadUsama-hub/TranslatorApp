import { Request,Response} from "express";
import shortCode from '../languageCodes/shortCode.json'  assert {type:'json'}

async function handleHomePage(req :Request,res : Response) {
    return res.render('home',{shortCode})
}
export{
    handleHomePage
}