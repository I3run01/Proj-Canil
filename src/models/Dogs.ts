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
    new Dog('sd', 'Pastor Alemão', 'Amarelo e Preto', 'Masculino')
]