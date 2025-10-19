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
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "Tulipan",
            precio : 600,
            url : "TulipanTriunfo.jpg"
        },
        {
            nombre : "Orquídea",
            precio : 600,
            url : "orquidea.jpg"
        },
        {
            nombre : "Gerbera",
            precio : 600,
            url : "gerberas.jpg"
        },
        {
            nombre : "Girasol",
            precio : 600,
            url : "girasoles.jpg"
        },
        {
            nombre : "Astromelias",
            precio : 600,
            url : "astromelias.jpg"
        },
        {
            nombre : "Impatiens",
            precio : 600,
            url : "impatiens.jpg"
        },
        {
            nombre : "NocheBuena",
            precio : 600,
            url : "nochebuena.jpg"
        }

    ]
    getProducto(){
        return this.producto
    }
}