import { UserModel } from "./db_models";

class Services {
  static getPets = async () => {};
  //todo: check if upload is by name then fetch using the name if by the variety thrn fetch using the variety
  //todo: -> if(payload == name) findMany(name: req.name)
  static queryPet = async (payload) => {}; //should be universal
  static uploadPets = async (payload) => {};
}

export default Services;
