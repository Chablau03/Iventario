// Dicionário de Vídeos dos Sets Completos
window.videosDosSets = {
    "Eclipse Arcano": "https://www.dropbox.com/scl/fi/pivdefvi0ldfn8fpl7n9e/vid_download_20260505194159_501935.mp4?rlkey=9ddppb2oq67ydzegbgnuqc553&st=9sam6d35&raw=1", 
    "Ébano Abissal": "https://www.dropbox.com/scl/fi/8giafqo55j0tbnyf7px7c/lv_0_20260601184010.mp4?rlkey=r2j9upx8d9771xxz6ouv4sjsh&st=25kucxsp&raw=1"
};

const bancoDeItens = [
    // ==========================================
    // SET: ECLIPSE ARCANO
    // ==========================================
    {
        id: "mago_peito_01",
        nome: "Peitoral do Eclipse Arcano",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "peito",
        imagem: "https://i.imgur.com/xeugGBJ.png",
        propriedade: "Comum",
        stats: {
            ca: 14,
            df: "+12",
            dm: "+2"
        },
        pericias: [],
        nomeDoSet: "Eclipse Arcano"
    },
    {
        id: "mago_luvas_01",
        nome: "Luvas do Eclipse Arcano",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "luvas",
        imagem: "https://i.imgur.com/FfUQjK6.png",
        propriedade: "Comum",
        stats: {
            ca: 11,
            df: "+3",
            dm: "+1"
        },
        pericias: [],
        nomeDoSet: "Eclipse Arcano"
    },
    {
        id: "mago_calca_01",
        nome: "Calça do Eclipse Arcano",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "pernas",
        imagem: "https://i.imgur.com/LkBprw7.png",
        propriedade: "Comum",
        stats: {
            ca: 12,
            df: "+8",
            dm: "+4"
        },
        pericias: [],
        nomeDoSet: "Eclipse Arcano"
    },
    {
        id: "mago_gorro_01",
        nome: "Capuz do Eclipse Arcano",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "gorro",
        imagem: "https://i.imgur.com/H7WZPUM.png",
        propriedade: "Encantado",
        stats: {
            ca: 10,
            df: "+2",
            dm: "+6"
        },
        pericias: [],
        nomeDoSet: "Eclipse Arcano",
        encantamento: {
            nome: "Estigma da Visão Noturna",
            efeito: "Mecânica: Garante ao usuário a capacidade de enxergar perfeitamente no escuro total até 18 metros. Além disso, concede vantagem em testes de Percepção baseados na visão enquanto estiver sob a luz da lua."
        }
    },

    // ==========================================
    // SET: ÉBANO ABISSAL
    // ==========================================
    {
        id: "ebano_peito_01",
        nome: "Couraça de Ébano Abissal",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "peito",
        imagem: "https://i.imgur.com/dFDoxie.png",
        propriedade: "Comum",
        descricao: "Placas brutas e densas de ébano e chumbo negro. Feita para um combate pesado e implacável.",
        stats: {
            ca: 15,
            df: "+14",
            dm: "+0"
        },
        pericias: [],
        nomeDoSet: "Ébano Abissal"
    },
    {
        id: "ebano_luvas_01",
        nome: "Manoplas de Ébano Abissal",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "luvas",
        imagem: "https://i.imgur.com/GawlNw3.png",
        propriedade: "Comum",
        descricao: "Manoplas rústicas de grafite escuro, perfeitas para esmagar os inimigos com pura força bruta.",
        stats: {
            ca: 12,
            df: "+4",
            dm: "+0"
        },
        pericias: [],
        nomeDoSet: "Ébano Abissal"
    },
    {
        id: "ebano_calca_01",
        nome: "Grevas de Ébano Abissal",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "pernas",
        imagem: "https://i.imgur.com/galxuFR.png",
        propriedade: "Comum",
        descricao: "Proteção resistente e pesada, mantendo o guerreiro firme no chão como uma montanha.",
        stats: {
            ca: 13,
            df: "+10",
            dm: "+0"
        },
        pericias: [],
        nomeDoSet: "Ébano Abissal"
    },
    {
        id: "ebano_gorro_01",
        nome: "Elmo de Ébano Abissal",
        tipo: "Armadura (AM)",
        categoria: "equipamento",
        slot: "gorro",
        imagem: "https://i.imgur.com/lZI2sLc.png",
        propriedade: "Comum",
        descricao: "Um elmo maciço e rústico, forjado para aguentar o tranco de qualquer impacto direto.",
        stats: {
            ca: 12,
            df: "+5",
            dm: "+0"
        },
        pericias: [],
        nomeDoSet: "Ébano Abissal"
    }
];

if (typeof window !== 'undefined') {
    window.bancoDeItens = bancoDeItens;
}

