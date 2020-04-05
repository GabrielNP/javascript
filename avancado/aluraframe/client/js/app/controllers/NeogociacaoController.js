class NegociacaoController {
    
    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));

        this._listaNegociacoes =  new Bind(
            new ListaNegociacoes(),
            this._negociacoesView,
            ['adiciona', 'remove']);
            
        this._mensagemView = new MensagemView($('#mensagemView'));

        this._mensagem = new Bind(
            new Mensagem(),
            this._mensagemView,
            ['texto']);
    }
    
    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criarNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';        
        this._limpaFormulario();
    }

    _criarNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    } 
    
    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }

    remove() {
        this._listaNegociacoes.remove();
        this._mensagem.texto = "Negociações removidas com sucesso";
    }

}