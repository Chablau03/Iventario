const bancoDeArmas = [
    {
        id: "arma_espada_01",
        nome: "Lâmina do Algoz Brutal",
        tipo: "Arma (AT)",
        categoria: "equipamento",
        slot: "mao_direita",
        imagem: "https://i.imgur.com/euFzW16.png",
        propriedade: "Comum",
        stats: {
            danoFisico: "2d6+4",
            efeito: "Cortante"
        },
        pericias: [
            "+2 em Atletismo",
            "+1 em Intimidação"
        ]
    },
    {
        id: "arma_espada_02",
        nome: "Estilhaço de Gelo Sombrio",
        tipo: "Arma (AT)",
        categoria: "equipamento",
        slot: "mao_direita",
        imagem: "https://i.imgur.com/6ug34Mo.png",
        propriedade: "Encantado",
        stats: {
            danoFisico: "10d30+50x2",
            danoMagico: "5d20+50",
            efeito: "Perfurante"
        },
        pericias: [
            "+2 em Arcanismo"
        ],
        encantamento: {
            nome: "Frio do Abismo",
            efeito: "O alvo atingido tem seu deslocamento reduzido pela metade no próximo turno devido ao congelamento da alma."
        }
    },
    {
        id: "arma_espada_03",
        nome: "Presa do Julgamento",
        tipo: "Arma (AT)",
        categoria: "equipamento",
        slot: "mao_direita",
        imagem: "https://i.imgur.com/3XzWZoH.png",
        propriedade: "Encantado",
        stats: {
            danoReal: "1d10",
            efeito: "Cortante e Perfurante"
        },
        pericias: [
            "+3 em Sobrevivência"
        ],
        encantamento: {
            nome: "Corte d'Alma",
            efeito: "A lâmina ignora qualquer defesa física ou mágica, desferindo dano verdadeiro diretamente na vitalidade do inimigo."
        }
    }
];

if (typeof window !== 'undefined') {
    window.bancoDeArmas = bancoDeArmas;
}
