class DateHelper {

    constructor() {
        throw new Error("DateHelper can't be instantiated.") // aviso para os programadores que não pode ser insciado pois os metodos são estaticos
    }

    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) {throw new Error("Deve estar no formato aaaa-mm-dd");}
        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
    }

    static dataParaTexto(data) {
        return `${data.data.getDate()}/${data.data.getMonth() + 1}/${data.data.getFullYear()}`;
    }
}