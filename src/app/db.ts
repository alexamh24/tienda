export interface producto{
    nombre: string
    precio: number
    url: string
}

export class Db{
    private producto : producto[] = [
        {
            nombre : "Asiatic lilies",
            precio : 500,
            url : "Asiatic_lilies.jpg"
        },
        {
            nombre : "Crisantemo",
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "3",
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "4",
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "5",
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "6",
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "7",
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "8",
            precio : 600,
            url : "crisantemo.jpg"
        },
        {
            nombre : "9",
            precio : 600,
            url : "crisantemo.jpg"
        }

    ]
    getProducto(){
        return this.producto
    }
}