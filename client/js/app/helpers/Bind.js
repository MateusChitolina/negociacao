class Bind {
    constructor(model, view, ...props) { // os "..." siginifica que apos passar os parametros de model e view, qualquer parametro depois vai ser depoisitado em um array de props
        let proxy = ProxyFactory.create(model, props, (model) => view.update(model));
        view.update(model);

        return proxy;
    }
}