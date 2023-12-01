import {CharactersModel} from "../../../domain/characters/characters.model";


export interface ContactFormI {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    characters: CharactersModel[]
}

export interface ContactFormValidateI {
    name: string;
    lastName: string;
    email: string;
    phone: string;
}