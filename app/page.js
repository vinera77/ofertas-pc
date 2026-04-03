"use client";

import { useMemo, useState } from "react";

const produtos = [
  {
    nome: "PCYES RX 550 4GB GDDR5 128 Bits Dual-Fan",
    precoOriginal: "R$ 749,90",
    preco: "R$ 599,90",
    parcelas: "12x R$ 54,99",
    categoria: "GPU",
    selo: "Entrada",
    asin: "B0CV2C7WTB",
    link: "https://amzn.to/4sa3YGs",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0CV2C7WTB.01._SCLZZZZZZZ_.jpg",
    desconto: 20,
  },
  {
    nome: "AMD Ryzen 5 5500 6-Core",
    precoOriginal: "R$ 699,90",
    preco: "R$ 499,90",
    parcelas: "12x R$ 45,90",
    categoria: "CPU",
    selo: "Custo-benefício",
    asin: "B09VCJ171S",
    link: "https://amzn.to/4c1e9ae",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B09VCJ171S.01._SCLZZZZZZZ_.jpg",
    desconto: 29,
  },
  {
    nome: "Notebook Acer Aspire 5 A515-45-R2A3",
    precoOriginal: "R$ 3.299,00",
    preco: "R$ 2.799,00",
    parcelas: "12x R$ 260,75",
    categoria: "Notebook",
    selo: "Versátil",
    asin: "B09PGPWP2K",
    link: "https://amzn.to/4ds3iIJ",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B09PGPWP2K.01._SCLZZZZZZZ_.jpg",
    desconto: 15,
  },
  {
    nome: "Controle sem fio DualSense para PS5",
    precoOriginal: "R$ 469,90",
    preco: "R$ 389,00",
    parcelas: "7x R$ 55,58",
    categoria: "Console",
    selo: "Extra",
    asin: "B088GNW267",
    link: "https://amzn.to/4ds3IyY",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B088GNW267.01._SCLZZZZZZZ_.jpg",
    desconto: 17,
  },
  {
    nome: "Epson EcoTank L3250 Multifuncional Colorida",
    precoOriginal: "R$ 1.399,00",
    preco: "R$ 1.099,00",
    parcelas: "10x R$ 109,90",
    categoria: "Impressora",
    selo: "Casa",
    asin: "B098YHFT9S",
    link: "https://amzn.to/4m6bjWd",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B098YHFT9S.01._SCLZZZZZZZ_.jpg",
    desconto: 21,
  },
  {
    nome: 'Monitor Gamer TCL 25" QLED Mini LED 300Hz',
    precoOriginal: "R$ 2.199,00",
    preco: "R$ 1.699,00",
    parcelas: "12x R$ 158,25",
    categoria: "Monitor",
    selo: "Gamer",
    asin: "B0FPDW9PLB",
    link: "https://amzn.to/4dVjvX6",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0FPDW9PLB.01._SCLZZZZZZZ_.jpg",
    desconto: 23,
  },
  {
    nome: "Placa de Vídeo MSI GeForce RTX 3060 12GB",
    precoOriginal: "R$ 2.499,00",
    preco: "R$ 1.999,00",
    parcelas: "12x R$ 183,25",
    categoria: "GPU",
    selo: "Upgrade",
    asin: "B08WPRMVWB",
    link: "https://amzn.to/41JAWm2",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B08WPRMVWB.01._SCLZZZZZZZ_.jpg",
    desconto: 20,
  },
  {
    nome: "Placa-mãe ASUS TUF GAMING B550M-PLUS",
    precoOriginal: "R$ 1.199,00",
    preco: "R$ 899,00",
    parcelas: "12x R$ 82,50",
    categoria: "Placa-mãe",
    selo: "Popular",
    asin: "B089HDJS79",
    link: "https://amzn.to/4sgb6RI",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B089HDJS79.01._SCLZZZZZZZ_.jpg",
    desconto: 25,
  },
  {
    nome: "Fonte Cooler Master ATX",
    precoOriginal: "R$ 599,00",
    preco: "R$ 449,00",
    parcelas: "12x R$ 41,25",
    categoria: "Fonte",
    selo: "Essencial",
    asin: "B0FS7WG7RV",
    link: "https://amzn.to/4sgilZZ",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0FS7WG7RV.01._SCLZZZZZZZ_.jpg",
    desconto: 25,
  },
  {
    nome: "HyperX Pulsefire Haste 2 Wireless Black",
    precoOriginal: "R$ 499,00",
    preco: "R$ 349,00",
    parcelas: "12x R$ 32,08",
    categoria: "Periférico",
    selo: "Mouse",
    asin: "B0BX51KBL9",
    link: "https://amzn.to/4tkPNPK",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0BX51KBL9.01._SCLZZZZZZZ_.jpg",
    desconto: 30,
  },
  {
    nome: "Kingston NV3 1TB NVMe 2280",
    precoOriginal: "R$ 399,00",
    preco: "R$ 299,00",
    parcelas: "12x R$ 27,50",
    categoria: "Armazenamento",
    selo: "Upgrade",
    asin: "B0DBR3DZWG",
    link: "https://amzn.to/4vdGPWs",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0DBR3DZWG.01._SCLZZZZZZZ_.jpg",
    desconto: 25,
  },
  {
    nome: "HyperX Alloy Origins Core ABNT2",
    precoOriginal: "R$ 599,00",
    preco: "R$ 449,00",
    parcelas: "12x R$ 41,25",
    categoria: "Periférico",
    selo: "Teclado",
    asin: "B07TV9B7Z3",
    link: "https://amzn.to/4bNYgoL",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B07TV9B7Z3.01._SCLZZZZZZZ_.jpg",
    desconto: 25,
  },
  {
    nome: "Headphone Gamer Havit HV-H2002d",
    precoOriginal: "R$ 199,00",
    preco: "R$ 129,00",
    parcelas: "6x R$ 21,50",
    categoria: "Periférico",
    selo: "Áudio",
    asin: "B07Y2G7VX5",
    link: "https://amzn.to/4mb6vin",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B07Y2G7VX5.01._SCLZZZZZZZ_.jpg",
    desconto: 35,
  },
  {
    nome: "Nintendo Switch Split Pad Compact Pikachu e Mimikyu",
    precoOriginal: "R$ 599,00",
    preco: "R$ 449,00",
    parcelas: "12x R$ 41,25",
    categoria: "Console",
    selo: "Especial",
    asin: "B0BHKJPWPQ",
    link: "https://amzn.to/4mdSZdS",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0BHKJPWPQ.01._SCLZZZZZZZ_.jpg",
    desconto: 25,
  },
  {
    nome: "Monitor AOC 24G4 com ajuste de altura",
    precoOriginal: "R$ 1.499,00",
    preco: "R$ 1.099,00",
    parcelas: "12x R$ 100,83",
    categoria: "Monitor",
    selo: "Competitivo",
    asin: "B0DLPB4CH6",
    link: "https://amzn.to/4s8dhGH",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0DLPB4CH6.01._SCLZZZZZZZ_.jpg",
    desconto: 27,
  },
];

const ordemCategorias = [
  "GPU", "CPU", "Placa-mãe", "Fonte", "Armazenamento",
  "Notebook", "Monitor", "Periférico", "Console", "Impressora",
];

const categoriaTitulos = {
  GPU: "Placas de vídeo", CPU: "Processadores", "Placa-mãe": "Placas-mãe",
  Fonte: "Fontes", Armazenamento: "Armazenamento", Notebook: "Notebooks",
  Monitor: "Monitores", Periférico: "Periféricos", Console: "Consoles",
  Impressora: "Impressoras",
};

function prioridade(produto) {
  const pesosCategoria = { GPU: 100, CPU: 95, Monitor: 85, "Placa-mãe": 80, Armazenamento: 78, Fonte: 74, Notebook: 70, Periférico: 60, Console: 45, Impressora: 35 };
  const pesosSelo = { Upgrade: 12, "Custo-benefício": 11, Competitivo: 10, Popular: 9, Essencial: 8, Gamer: 8, Versátil: 7, Entrada: 6, Teclado: 5, Mouse: 5, Áudio: 5, Especial: 3, Casa: 2, Extra: 1 };
  return (pesosCategoria[produto.categoria] || 0) + (pesosSelo[produto.selo] || 0);
}

function ProductImage({ produto }) {
  const fallbacks = [
    produto.imagem,
    `https://m.media-amazon.com/images/P/${produto.asin}.01._SCLZZZZZZZ_.jpg`,
  ].filter(Boolean);
  const [index, setIndex] = useState(0);

  if (index >= fallbacks.length) {
    return (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f5f5", color: "#999", fontSize: 13, textAlign: "center", padding: 12 }}>
        {produto.nome}
      </div>
    );
  }
  return (
    <img
      src={fallbacks[index]}
      alt={produto.nome}
      onError={() => setIndex((i) => i + 1)}
      style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
    />
  );
}

function ProductCard({ produto }) {
  return (
    <article style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
      transition: "box-shadow 0.2s",
    }}>
      {produto.desconto && (
        <div style={{
          position: "absolute", top: 10, right: 10,
          background: "#111", color: "#fff",
          fontSize: 11, fontWeight: 700,
          padding: "3px 7px", borderRadius: 4, zIndex: 1,
        }}>
          {produto.desconto}% OFF
        </div>
      )}

      <div style={{ background: "#f9fafb", height: 180, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
        <div style={{ width: "100%", height: "100%" }}>
          <ProductImage produto={produto} />
        </div>
      </div>

      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{ margin: "0 0 10px", fontSize: 13, color: "#111", lineHeight: 1.4, minHeight: 52, fontWeight: 500 }}>
          {produto.nome}
        </p>

        <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 2 }}>
          <span style={{ textDecoration: "line-through" }}>{produto.precoOriginal}</span>
        </div>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 2 }}>
          {produto.preco}
        </div>
        <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 14 }}>
          {produto.parcelas} sem juros
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
          <a
            href={produto.link}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, padding: "8px 0", borderRadius: 4,
              border: "1px solid #d1d5db", background: "#fff",
              color: "#374151", fontSize: 12, fontWeight: 600,
              textDecoration: "none", textAlign: "center",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
            }}
          >
            🔍 Detalhes
          </a>
          <a
            href={produto.link}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, padding: "8px 0", borderRadius: 4,
              border: "none", background: "#16a34a",
              color: "#fff", fontSize: 12, fontWeight: 700,
              textDecoration: "none", textAlign: "center",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 4,
            }}
          >
            🛒 Comprar
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const categoriasDisponiveis = useMemo(() => {
    return ["Todos", ...ordemCategorias.filter((cat) => produtos.some((p) => p.categoria === cat))];
  }, []);

  const produtosOrdenados = useMemo(() => [...produtos].sort((a, b) => prioridade(b) - prioridade(a)), []);

  const filtrados = useMemo(() => {
    return produtosOrdenados.filter((p) => {
      const termo = busca.toLowerCase();
      const bateBusca = `${p.nome} ${p.categoria} ${p.selo}`.toLowerCase().includes(termo);
      const bateCategoria = categoria === "Todos" || p.categoria === categoria;
      return bateBusca && bateCategoria;
    });
  }, [busca, categoria, produtosOrdenados]);

  const grupos = useMemo(() => {
    return ordemCategorias
      .map((cat) => ({ categoria: cat, titulo: categoriaTitulos[cat] || cat, itens: filtrados.filter((p) => p.categoria === cat) }))
      .filter((g) => g.itens.length > 0);
  }, [filtrados]);

  return (
    <main style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: "Arial, sans-serif", color: "#111" }}>
      {/* Header */}
      <header style={{ background: "#111", color: "#fff", padding: "0 20px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 48 }}>
          <span style={{ fontWeight: 900, fontSize: 20, color: "#22c55e" }}>Vinera Ofertas</span>
          <nav style={{ display: "flex", gap: 4, overflowX: "auto" }}>
            {categoriasDisponiveis.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                style={{
                  padding: "6px 12px", borderRadius: 4, border: "none", cursor: "pointer", whiteSpace: "nowrap",
                  background: categoria === cat ? "#22c55e" : "transparent",
                  color: categoria === cat ? "#fff" : "#d1d5db",
                  fontWeight: 600, fontSize: 13,
                }}
              >
                {cat}
              </button>
            ))}
          </nav>
          <span style={{ fontSize: 20, cursor: "pointer" }}>🔍</span>
        </div>
      </header>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "20px 16px 60px" }}>
        {/* Busca */}
        <div style={{ marginBottom: 20 }}>
          <input
            aria-label="Buscar produto"
            placeholder="🔍  Buscar produto..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            style={{
              width: "100%", padding: "10px 16px", borderRadius: 6,
              border: "1px solid #d1d5db", background: "#fff",
              fontSize: 14, outline: "none", boxSizing: "border-box",
            }}
          />
        </div>

        {/* Grupos por categoria */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {grupos.map((grupo) => (
            <section key={grupo.categoria}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, borderBottom: "2px solid #22c55e", paddingBottom: 8 }}>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>{grupo.titulo}</h2>
                <span style={{ fontSize: 12, color: "#6b7280" }}>{grupo.itens.length} produto(s)</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
                {grupo.itens.map((produto) => (
                  <ProductCard key={produto.asin} produto={produto} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {filtrados.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: "#6b7280" }}>
            Nenhum produto encontrado para "{busca}"
          </div>
        )}
      </div>
    </main>
  );
}
