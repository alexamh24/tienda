export interface producto{
    nombre: string
    precio: number
    url: string
}

export class Db{
    private producto : producto[] = [
        {
            nombre : "Asiatic Lilies",
            precio : 500,
            url : "AsiaticLilyOrange.jpg"
        },
        {
            nombre : "Crisantemo",
            precio : 60,
            url : "crisantemo.jpg"
        },
        {
            nombre : "Tulipan",
            precio : 100,
            url : "TulipanTriunfo.jpg"
        },
        {
            nombre : "Orquídea",
            precio : 250,
            url : "orquidea.jpg"
        },
        {
            nombre : "Gerbera",
            precio : 100,
            url : "gerberas.jpg"
        },
        {
            nombre : "Girasol",
            precio : 260,
            url : "girasoles.jpg"
        },
        {
            nombre : "Astromelias",
            precio : 600,
            url : "astromelias.jpg"
        },
        {
            nombre : "Impatiens",
            precio : 200,
            url : "impatiens.jpg"
        },
        {
            nombre : "NocheBuena",
            precio : 250,
            url : "nochebuena.jpg"
        }

    ]
    getProducto(){
        return this.producto
    }
}