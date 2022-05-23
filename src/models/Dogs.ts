class Dog {
    photo: string
    name: string
    color: string
    gender: string

    constructor (photo: string, name: string, color: string, gender: string ) {
        this.photo = photo,
        this.name = name,
        this.color = color,
        this.gender = gender
    }
}

let DogsList = [
    new Dog('images', 'Pastor Alemão', 'Amarelo e Preto', 'Masculino'),
    new Dog('images', 'Labrador-retriever', 'Branco', 'Masculino'),
    new Dog('images', 'Zwergspitz', 'Amarelo', 'Masculino'),
    new Dog('images', 'Husky Siberiano', 'Branco e Preto', 'Masculino'),
    new Dog('images', 'Golden Retriever', 'Amarelo', 'Masculino'),
    new Dog('images', 'Poodle', 'Branco ', 'Masculino'),
    new Dog('images', 'Bulldog', 'Branco e Amarelo ', 'Masculino'),
    new Dog('images', 'Persa', 'Amarelo ', 'Amarelo'),
    new Dog('images', 'Maine Coon', 'Preto e Branco ', 'Masculino'),
    new Dog('images', 'Bengal', 'Branco, Preto e Amarelo ', 'Masculino'),
    new Dog('images', 'Siamês', 'Amarelo e Preto ', 'Masculino'),
    new Dog('images', 'Sphynx', 'Branco ', 'Masculino'),
    new Dog('images', 'Limpa Vidro', 'Verde e Branco ', 'Masculino'),
    new Dog('images', 'Tanictis', 'Vermelho ', 'Masculino'),
    new Dog('images', 'Acará Bandeira', 'Preto ', 'Masculino'),
]