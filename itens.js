const bancoDeItensGerais = [
    {
        id: "recurso_joia_alma_01",
        nome: "Joia da Alma",
        tipo: "Recurso",
        categoria: "item",
        imagem: "https://i.imgur.com/vDDle8E.png",
        descricao: "Um receptáculo cristalino capaz de aprisionar a essência vital de criaturas derrotadas. É um recurso valioso e estritamente necessário para alimentar a mesa de encantamentos e imbuir armaduras e lâminas com poderes arcanos duradouros."
    }
];

if (typeof window !== 'undefined') {
    window.bancoDeItensGerais = bancoDeItensGerais;
}
