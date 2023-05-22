//FUNÇÃO PARA GERAR ID RANDOMICO E EVITAR ERRO DE ID REDUNDANTE

export function uuid(): string{
    let dateTime = new Date().getTime()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxx'.replace(
        /[xy]/g,
        (i: string) => {
            let random = (dateTime + Math.random() * 16) | 0 
            dateTime = Math.floor(dateTime / 16)
            return (i == 'x' ? random : (random & 0x3) | 0x3).toString(16)
        },
    )
    return uuid
}
