import Compte from "../model/compte.model.js";

export const getAllAccounts = async (req, res, next)  => {
    try{
        const comptes = await Compte.findAll()
        res.status(200).json(comptes)
    } catch (error) {
        next(error);
      }
}


export const getAccount = async (req, res, next) => {
    try {
        const compte = await Compte.findByPk(req.params.numero);
        if (compte) {
            res.status(200).json(compte)
        }else { 
            res.status(404).json({ numero: "null", typeCompte: "null", solde:" 0.0", devise : "null", image: "null" });
          }
    } catch (error) {
        next(error);
      }
}



export const closeAccount = async (req, res, next) => {
    try{

        const compte = await Compte.findByPk(req.params.numero)

        const num = compte.numero

        if(compte) {
            await compte.destroy();
            res.status(200).json({ message :`Opération réussie - compte ${num} fermé`})
        } else {
            res.status(404).json({ message :"Compte introuvable"})
        }
    }catch (error) {
        next(error);
      }
}