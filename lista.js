// Banco de dados dos itens
const bancoDeItens = [
    {
        id: "mago_peito_01",
        nome: "Peitoral do Eclipse Arcano",
        tipo: "equipamento",
        slot: "peito",
        imagem: "https://i.imgur.com/xeugGBJ.png",
        valor: 150.00
    },
    {
        id: "mago_luvas_01",
        nome: "Luvas do Eclipse Arcano",
        tipo: "equipamento",
        slot: "luvas",
        imagem: "https://i.imgur.com/FfUQjK6.png",
        valor: 60.50
    },
    {
        id: "mago_calca_01",
        nome: "Calça do Eclipse Arcano",
        tipo: "equipamento",
        slot: "pernas",
        imagem: "https://i.imgur.com/LkBprw7.png",
        valor: 90.00
    },
    {
        id: "mago_gorro_01",
        nome: "Capuz do Eclipse Arcano",
        tipo: "equipamento",
        slot: "gorro",
        imagem: "https://i.imgur.com/H7WZPUM.png",
        valor: 75.20
    }
];

// Garante que o banco de dados fique acessível globalmente pelo navegador
if (typeof window !== 'undefined') {
    window.bancoDeItens = bancoDeItens;
}
