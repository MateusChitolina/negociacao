class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
        
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n =>`
                     
                        <tr>
                            <td>${DateHelper.dataParaTexto(n)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>
                    
                `).join("")}
            </tbody>

            <tfoot>
                <td colspan="3"></td>
                <td>
                ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>  
            </tfoot>
        </table>
        `; //Immediately invoked function expression (IIFE) -> é a função posta a cima dentro dos ${} é feito entre parenteses para se passar por função retornavel assim: (function() { })() = nomeDaFunção()
    }
}

/*
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
        
        <tfoot>
        </tfoot>
    </table>
*/