


export class CharactersModel {
    public id: string = '';
    public name: string = '';
    public urlImage: string =  '';
    public gender: string = '';
    public species: string = '';
    public status: string = '';

    constructor(init: Partial<CharactersModel> = {}) {
        const { id, name, urlImage, gender, species, status } = init;

        if (id !== undefined) this.id = id;
        if (name !== undefined) this.name = name;
        if (urlImage !== undefined) this.urlImage = urlImage;
        if (gender !== undefined) this.gender = gender;
        if (species !== undefined) this.species = species;
        if (status !== undefined) this.status = status;
    }

}