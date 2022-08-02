class ListaNegociacoes {
    constructor(contexto) {
        this._negociacoes = [];
        this._contexto = contexto;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        //Reflect.apply(this._armadilha, this._contexto, [this]); //(metodo que eu quero chamar, contexto que eu quero execura essa função, [parametros que a função vai receber] 
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}