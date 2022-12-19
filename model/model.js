import db from "../configuration/config.js"
import { Sequelize } from "sequelize"
const footballmodel=db.define(
    "arsenal",{Team_Name:{type:Sequelize.STRING},
    Home_Color:{type:Sequelize.STRING},
    Away_Color:{type:Sequelize.STRING},
    Numbers_of_Players:{type:Sequelize.INTEGER},
     Player_First_Name:{type:Sequelize.STRING},
     Player_Last_Name:{type:Sequelize.STRING},
     Player_Age:{type:Sequelize.INTEGER},
     Player_Country:{type:Sequelize.STRING},
     Player_Jersey_Number:{type:Sequelize.INTEGER},
     Player_SIgning_Fee:{type:Sequelize.DOUBLE},
     Club_Owner_Name:{type:Sequelize.STRING}
              
},{ freezeTableName: true
    })
export default footballmodel