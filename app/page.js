"use client";

import { useMemo, useState } from "react";

const loja = "Amazon";

const produtos = [
  {
    nome: "PCYES RX 550 4GB GDDR5 128 Bits Dual-Fan",
    preco: "R$ 599,90",
    categoria: "GPU",
    selo: "Entrada",
    asin: "B0CV2C7WTB",
    link: "https://amzn.to/4sa3YGs",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0CV2C7WTB.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "AMD Ryzen 5 5500 6-Core",
    preco: "Promoção",
    categoria: "CPU",
    selo: "Custo-benefício",
    asin: "B09VCJ171S",
    link: "https://amzn.to/4c1e9ae",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B09VCJ171S.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Notebook Acer Aspire 5 A515-45-R2A3",
    preco: "Promoção",
    categoria: "Notebook",
    selo: "Versátil",
    asin: "B09PGPWP2K",
    link: "https://amzn.to/4ds3iIJ",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B09PGPWP2K.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Controle sem fio DualSense para PS5",
    preco: "Promoção",
    categoria: "Console",
    selo: "Extra",
    asin: "B088GNW267",
    link: "https://amzn.to/4ds3IyY",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B088GNW267.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Epson EcoTank L3250 Multifuncional Colorida",
    preco: "Promoção",
    categoria: "Impressora",
    selo: "Casa",
    asin: "B098YHFT9S",
    link: "https://amzn.to/4m6bjWd",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B098YHFT9S.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Monitor Gamer TCL 25\" QLED Mini LED 300Hz",
    preco: "Promoção",
    categoria: "Monitor",
    selo: "Gamer",
    asin: "B0FPDW9PLB",
    link: "https://amzn.to/4dVjvX6",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0FPDW9PLB.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Placa de Vídeo MSI GeForce RTX 3060 12GB",
    preco: "Promoção",
    categoria: "GPU",
    selo: "Upgrade",
    asin: "B08WPRMVWB",
    link: "https://amzn.to/41JAWm2",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B08WPRMVWB.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Placa-mãe ASUS TUF GAMING B550M-PLUS",
    preco: "Promoção",
    categoria: "Placa-mãe",
    selo: "Popular",
    asin: "B089HDJS79",
    link: "https://amzn.to/4sgb6RI",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B089HDJS79.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Fonte Cooler Master ATX",
    preco: "Promoção",
    categoria: "Fonte",
    selo: "Essencial",
    asin: "B0FS7WG7RV",
    link: "https://amzn.to/4sgilZZ",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0FS7WG7RV.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "HyperX Pulsefire Haste 2 Wireless Black",
    preco: "Promoção",
    categoria: "Periférico",
    selo: "Mouse",
    asin: "B0BX51KBL9",
    link: "https://amzn.to/4tkPNPK",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0BX51KBL9.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Kingston NV3 1TB NVMe 2280",
    preco: "Promoção",
    categoria: "Armazenamento",
    selo: "Upgrade",
    asin: "B0DBR3DZWG",
    link: "https://amzn.to/4vdGPWs",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0DBR3DZWG.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "HyperX Alloy Origins Core ABNT2",
    preco: "Promoção",
    categoria: "Periférico",
    selo: "Teclado",
    asin: "B07TV9B7Z3",
    link: "https://amzn.to/4bNYgoL",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B07TV9B7Z3.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Headphone Gamer Havit HV-H2002d",
    preco: "Promoção",
    categoria: "Periférico",
    selo: "Áudio",
    asin: "B07Y2G7VX5",
    link: "https://amzn.to/4mb6vin",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B07Y2G7VX5.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Nintendo Switch Split Pad Compact Pikachu e Mimikyu",
    preco: "Promoção",
    categoria: "Console",
    selo: "Especial",
    asin: "B0BHKJPWPQ",
    link: "https://amzn.to/4mdSZdS",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0BHKJPWPQ.01._SCLZZZZZZZ_.jpg",
  },
  {
    nome: "Monitor AOC 24G4 com ajuste de altura",
    preco: "Promoção",
    categoria: "Monitor",
    selo: "Competitivo",
    asin: "B0DLPB4CH6",
    link: "https://amzn.to/4s8dhGH",
    imagem: "https://images-na.ssl-images-amazon.com/images/P/B0DLPB4CH6.01._SCLZZZZZZZ_.jpg",
  },
];

const ordemCategorias = [
  "GPU",
  "CPU",
  "Placa-mãe",
  "Fonte",
  "Armazenamento",
  "Notebook",
  "Monitor",
  "Periférico",
  "Console",
  "Impressora",
];

const categoriaTitulos = {
  GPU: "Placas de vídeo",
  CPU: "Processadores",
  "Placa-mãe": "Placas-mãe",
  Fonte: "Fontes",
  Armazenamento: "Armazenamento",
  Notebook: "Notebooks",
  Monitor: "Monitores",
  Periférico: "Periféricos",
  Console: "Consoles",
  Impressora: "Impressoras",
};

function amazonImageUrl(asin) {
  return `https://images-na.ssl-images-amazon.com/images/P/${asin}.01._SCLZZZZZZZ_.jpg`;
}

function prioridade(produto) {
  const pesosCategoria = {
    GPU: 100,
    CPU: 95,
    Monitor: 85,
    "Placa-mãe": 80,
    Armazenamento: 78,
    Fonte: 74,
    Notebook: 70,
    Periférico: 60,
    Console: 45,
    Impressora: 35,
  };

  const pesosSelo = {
    Upgrade: 12,
    "Custo-benefício": 11,
    Competitivo: 10,
    Popular: 9,
    Essencial: 8,
    Gamer: 8,
    Versátil: 7,
    Entrada: 6,
    Teclado: 5,
    Mouse: 5,
    Áudio: 5,
    Especial: 3,
    Casa: 2,
    Extra: 1,
  };

  return (pesosCategoria[produto.categoria] || 0) + (pesosSelo[produto.selo] || 0);
}

function PlaceholderImage({ label }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 22,
        background: "linear-gradient(135deg, #0f172a 0%, #111827 100%)",
        color: "#93c5fd",
        fontWeight: 800,
        fontSize: 22,
      }}
    >
      {label}
    </div>
  );
}

function ProductImage({ produto }) {
  const fallbacks = [
    produto.imagem,
    `https://images-na.ssl-images-amazon.com/images/P/${produto.asin}.01._SCLZZZZZZZ_.jpg`,
    `https://m.media-amazon.com/images/P/${produto.asin}.01._SCLZZZZZZZ_.jpg`,
  ].filter(Boolean);

  const [index, setIndex] = useState(0);

  if (index >= fallbacks.length) {
    return <PlaceholderImage label={produto.nome} />;
  }

  return (
    <img
      src={fallbacks[index]}
      alt={produto.nome}
      onError={() => setIndex((i) => i + 1)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "block",
        background: "#0b1220",
      }}
    />
  );
}

function Badge({ children, variant = "blue" }) {
  const styles = {
    blue: {
      color: "#dbeafe",
      background: "rgba(37,99,235,0.18)",
      border: "1px solid rgba(96,165,250,0.24)",
    },
    green: {
      color: "#86efac",
      background: "rgba(22,163,74,0.18)",
      border: "1px solid rgba(74,222,128,0.24)",
    },
    dark: {
      color: "#cbd5e1",
      background: "rgba(15,23,42,0.8)",
      border: "1px solid rgba(148,163,184,0.16)",
    },
  };

  return (
    <span
      style={{
        ...styles[variant],
        fontSize: 12,
        fontWeight: 800,
        padding: "8px 10px",
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {children}
    </span>
  );
}

function ProductCard({ produto }) {
  return (
    <article
      style={{
        background: "linear-gradient(180deg, rgba(15,23,42,0.96) 0%, rgba(17,24,39,0.98) 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 24,
        overflow: "hidden",
        boxShadow: "0 18px 42px rgba(0,0,0,0.24)",
        display: "flex",
        flexDirection: "column",
        minHeight: 490,
      }}
    >
      <div style={{ padding: 16, paddingBottom: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 14,
            flexWrap: "wrap",
          }}
        >
          <Badge>{produto.categoria}</Badge>
          <Badge variant="green">{produto.selo}</Badge>
        </div>

        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 10",
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0b1220",
          }}
        >
          <ProductImage produto={produto} />
        </div>
      </div>

      <div
        style={{
          padding: 18,
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: 27,
            lineHeight: 1.14,
            minHeight: 92,
          }}
        >
          {produto.nome}
        </h3>

        <div style={{ marginTop: 12, color: "#94a3b8", fontSize: 15 }}>{loja}</div>

        <div style={{ marginTop: 16, fontSize: 34, fontWeight: 900 }}>{produto.preco}</div>

        <div style={{ marginTop: "auto", paddingTop: 20 }}>
          <a
            href={produto.link}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              width: "100%",
              padding: "15px 16px",
              borderRadius: 14,
              background: "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
              color: "#052e16",
              fontWeight: 900,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 10px 24px rgba(34,197,94,0.24)",
              textDecoration: "none",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            Ver oferta
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
    const base = ["Todos", ...ordemCategorias.filter((cat) => produtos.some((p) => p.categoria === cat))];
    return base;
  }, []);

  const produtosOrdenados = useMemo(() => {
    return [...produtos].sort((a, b) => prioridade(b) - prioridade(a));
  }, []);

  const filtrados = useMemo(() => {
    return produtosOrdenados.filter((produto) => {
      const termo = busca.toLowerCase();
      const bateBusca = `${produto.nome} ${produto.categoria} ${produto.selo}`.toLowerCase().includes(termo);
      const bateCategoria = categoria === "Todos" || produto.categoria === categoria;
      return bateBusca && bateCategoria;
    });
  }, [busca, categoria, produtosOrdenados]);

  const destaques = useMemo(() => produtosOrdenados.slice(0, 4), [produtosOrdenados]);

  const grupos = useMemo(() => {
    return ordemCategorias
      .map((cat) => ({
        categoria: cat,
        titulo: categoriaTitulos[cat] || cat,
        itens: filtrados.filter((produto) => produto.categoria === cat),
      }))
      .filter((grupo) => grupo.itens.length > 0);
  }, [filtrados]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #10224a 0%, #08152d 45%, #040b16 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "28px 18px 60px" }}>
        <section
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #17305c 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 28,
            padding: 30,
            marginBottom: 24,
            boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 760 }}>
              <div
                style={{
                  color: "#7dd3fc",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: 1,
                  marginBottom: 12,
                }}
              >
                🔥 OFERTAS DE HARDWARE E SETUP
              </div>
              <h1 style={{ margin: 0, fontSize: 50, lineHeight: 1.04 }}>Vinera Ofertas</h1>
              <p
                style={{
                  marginTop: 16,
                  marginBottom: 0,
                  color: "#cbd5e1",
                  fontSize: 18,
                  lineHeight: 1.65,
                }}
              >
                Promoções organizadas automaticamente por categoria, com destaque para os produtos de maior apelo e links de afiliado prontos para clique.
              </p>
            </div>

            <div
              style={{
                minWidth: 280,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 18,
              }}
            >
              <div style={{ color: "#94a3b8", fontSize: 14 }}>Produtos ativos</div>
              <div style={{ fontSize: 40, fontWeight: 900, marginTop: 8 }}>{produtos.length}</div>
              <div style={{ color: "#94a3b8", fontSize: 14, marginTop: 16 }}>Categoria atual</div>
              <div style={{ fontSize: 24, fontWeight: 800, marginTop: 8 }}>{categoria}</div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 26 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 14,
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: 30 }}>Promoções em destaque</h2>
              <p style={{ margin: "8px 0 0", color: "#94a3b8" }}>
                Seleção automática dos itens com maior potencial de clique
              </p>
            </div>
            <Badge variant="dark">Loja principal: {loja}</Badge>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {destaques.map((produto) => (
              <ProductCard key={`top-${produto.asin}`} produto={produto} />
            ))}
          </div>
        </section>

        <section
          style={{
            background: "rgba(15, 23, 42, 0.78)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 22,
            padding: 18,
            marginBottom: 24,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: 14 }}>
            <input
              aria-label="Buscar produto"
              placeholder="Buscar produto..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid #334155",
                background: "#09111f",
                color: "white",
                fontSize: 16,
                outline: "none",
              }}
            />

            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px",
                borderRadius: 14,
                border: "1px solid #334155",
                background: "#09111f",
                color: "white",
                fontSize: 16,
                outline: "none",
              }}
            >
              {categoriasDisponiveis.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {categoriasDisponiveis.map((cat) => {
              const ativo = categoria === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setCategoria(cat)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: ativo ? "1px solid #38bdf8" : "1px solid #334155",
                    background: ativo ? "rgba(56,189,248,0.15)" : "#09111f",
                    color: ativo ? "#e0f2fe" : "#cbd5e1",
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </section>

        <section style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 12, flexWrap: "wrap", marginBottom: 18 }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 30 }}>Produtos por categoria</h2>
            <p style={{ margin: "8px 0 0", color: "#94a3b8" }}>{filtrados.length} item(ns) encontrado(s)</p>
          </div>
        </section>

        <div style={{ display: "grid", gap: 28 }}>
          {grupos.map((grupo) => (
            <section key={grupo.categoria}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                <h3 style={{ margin: 0, fontSize: 26 }}>{grupo.titulo}</h3>
                <Badge variant="dark">{grupo.itens.length} produto(s)</Badge>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
                  gap: 20,
                }}
              >
                {grupo.itens.map((produto) => (
                  <ProductCard key={produto.link} produto={produto} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
