import footballmodel from "../model/model.js";
// get all
export const getallplayer=async(req,res)=>{
    try {const allplayer=await footballmodel.findAll();
        if (allplayer) {
            res.send(allplayer)
            
        } else {
            res.send("Unable to fetch data")
        }
        
    } catch (error) {
        res.send(error.message)
    }

}
// to get one
export const getoneplayer=async(req,res)=>{
    try {
        const id =req.params.id
        const oneplayer=await footballmodel.findAll({where:{id:id}});
        if (oneplayer) {
            res.send(oneplayer)
            
        } else {
            res.send("Unable to fetch data")
        }
        
    } catch (error) {
        res.send(error.message)
    }

}
//update 
export const update=async(req,res)=>{
    try {const playersnum =req.body.Numbers_of_Players
        const id =req.params.id
        const player=await footballmodel.update(req.body,
            {where:{id:id &&playersnum >=22 &&playersnum <=26 } } 
            );
        if ( player[0] ===0){
            res.send("Nothing changed due to technical error")
            
        } else { if(player){res.send("SUCESSFULLY UPDATED")}

            else{res.send("Unable to update data")}
        }
        
    } catch (error) {
        res.send(error.message)
    }

}
// delete one
export const deleteall=async(req,res)=>{
    try {
        const id =req.params.id
        const deleteoneplayer=await footballmodel.destroy({where:{id:id}});
        if (deleteoneplayer) {
            res.send("ID  deleted")
            
        } else {
            res.send("UNABLE TO DELETE DATA DUE TO ID ERRORS")
        }
        
    } catch (error) {
        res.send(error.message)
    }

}