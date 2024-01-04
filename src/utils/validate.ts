import { User } from "../types/User";

type Error = {
    [key: string]: string;
};

export const validate = (data: User) => {
    const errors: Error = {};

    if(!data.name) {
        errors["name"] = "O nome é obrigatório";
    }
    
    if(!data.email) {
        errors["email"] = "O email é obrigatório";
    }

    if(!data.agree) {
        errors["agree"] = "Concordar com os termos é obrigatório";
    }

    return errors;
}