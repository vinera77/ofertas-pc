"use client";

import { useMemo, useState } from "react";

const produtos = [
  { nome: "Placa de Vídeo RX 550 4GB", preco: "R$ 599,90", loja: "Amazon", categoria: "GPU", destaque: "Entrada", link: "https://amzn.to/4sa3YGs" },
  { nome: "Placa de Vídeo (modelo Amazon)", preco: "Promoção", loja: "Amazon", categoria: "GPU", destaque: "Oferta", link: "https://amzn.to/4sgb6RI" },
  { nome: "Processador Ryzen 5 5500", preco: "Promoção", loja: "Amazon", categoria: "CPU", destaque: "Custo-benefício", link: "https://amzn.to/41JAWm2" },
  { nome: "Processador (modelo Amazon)", preco: "Promoção", loja: "Amazon", categoria: "CPU", destaque: "Oferta", link: "https://amzn.to/4mb6vin" },
  { nome: "Placa-mãe ASUS TUF B550M", preco: "Promoção", loja: "Amazon", categoria: "Placa-mãe", destaque: "Popular", link: "https://amzn.to/4sgilZZ" },
  { nome: "Fonte Gamer", preco: "Promoção", loja: "Amazon", categoria: "Fonte", destaque: "Essencial", link: "https://amzn.to/4tkPNPK" },
  { nome: "Fonte (modelo Amazon)", preco: "Promoção", loja: "Amazon", categoria: "Fonte", destaque: "Oferta", link: "https://amzn.to/4mdSZdS" },
  { nome: "SSD NVMe / Memória", preco: "Promoção", loja: "Amazon", categoria: "Armazenamento", destaque: "Upgrade", link: "https://amzn.to/4bNYgoL" },
  { nome: "Monitor Gamer", preco: "Promoção", loja: "Amazon", categoria: "Monitor", destaque: "Gamer", link: "https://amzn.to/4dVjvX6" },
  { nome: "Notebook Gamer", preco: "Promoção", loja: "Amazon", categoria: "Notebook", destaque: "Versátil", link: "https://amzn.to/4ds3iIJ" },
  { nome: "Mouse Gamer", preco: "Promoção", loja: "Amazon", categoria: "Periférico", destaque: "Setup", link: "https://amzn.to/4ds3IyY" },
  { nome: "Impressora", preco: "Promoção", loja: "Amazon", categoria: "Escritório", destaque: "Casa", link: "https://amzn.to/4m6bjWd" },
  { nome: "Controle PS5", preco: "Promoção", loja: "Amazon", categoria: "Console", destaque: "Extra", link: "https://amzn.to/4c1e9ae" },
  { nome: "Produto Tech 1", preco: "Promoção", loja: "Amazon", categoria: "Tech", destaque: "Oferta", link: "https://amzn.to/4vdGPWs" },
  { nome: "Produto Tech 2", preco: "Promoção", loja: "Amazon", categoria: "Tech", destaque: "Oferta", link: "https://amzn.to/4s8dhGH" },
];

const categorias = [
  "Todos",
  "GPU",
  "CPU",
  "Placa-mãe",
  "Fonte",
  "Armazenamento",
  "Monitor",
  "Notebook",
  "Periférico",
  "Escritório",
  "Console",
  "Tech",
];

function cardStyle() {
  return {
    background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
    border: "1px solid #243041",
    borderRadius: 22,
    padding: 20,
    boxShadow: "0 12px 30px rgba(0,0,0,0.22)",
  };
}

export default function Home() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const itens = useMemo(() => {
    return produtos.filter((produto) => {
      const termo = busca.toLowerCase();
      const bateBusca = `${produto.nome} ${produto.loja} ${produto.categoria}`.toLowerCase().includes(termo);
      const bateCategoria = categoria === "Todos" || produto.categoria === categoria;
      return bateBusca && bateCategoria;
    });
  }, [busca, categoria]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #14213d 0%, #0b1220 45%, #08101d 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
        padding: "24px 20px 60px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <section
          style={{
            ...cardStyle(),
            padding: 28,
            marginBottom: 24,
            background: "linear-gradient(135deg, #0f172a 0%, #132649 55%, #111827 100%)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 760 }}>
              <div style={{ fontSize: 14, color: "#93c5fd", marginBottom: 10, fontWeight: 700, letterSpacing: 0.4 }}>
                🔥 OFERTAS ATUALIZADAS DE HARDWARE
              </div>
              <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0 }}>Promoções de Hardware</h1>
              <p style={{ color: "#cbd5e1", fontSize: 18, lineHeight: 1.6, marginTop: 14, marginBottom: 0 }}>
                Compare ofertas de peças, periféricos e upgrades para PC em um só lugar. Clique, confira a promoção e finalize pela Amazon.
              </p>
            </div>

            <div
              style={{
                minWidth: 260,
                flex: "1 1 280px",
                maxWidth: 340,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: 18,
              }}
            >
              <div style={{ color: "#94a3b8", fontSize: 14 }}>Produtos publicados</div>
              <div style={{ fontSize: 34, fontWeight: 700, marginTop: 6 }}>{produtos.length}</div>
              <div style={{ marginTop: 16, color: "#94a3b8", fontSize: 14 }}>Categoria em foco</div>
              <div style={{ fontSize: 20, fontWeight: 700, marginTop: 6 }}>{categoria}</div>
            </div>
          </div>
        </section>

        <section style={{ ...cardStyle(), marginBottom: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: 16 }}>
            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar placa de vídeo, SSD, monitor, processador..."
              style={{
                width: "100%",
                borderRadius: 14,
                border: "1px solid #334155",
                background: "#0b1220",
                color: "white",
                padding: "14px 16px",
                fontSize: 16,
                outline: "none",
              }}
            />

            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              style={{
                width: "100%",
                borderRadius: 14,
                border: "1px solid #334155",
                background: "#0b1220",
                color: "white",
                padding: "14px 16px",
                fontSize: 16,
                outline: "none",
              }}
            >
              {categorias.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
            {categorias.map((item) => {
              const ativo = categoria === item;
              return (
                <button
                  key={item}
                  onClick={() => setCategoria(item)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 999,
                    border: ativo ? "1px solid #38bdf8" : "1px solid #334155",
                    background: ativo ? "rgba(56,189,248,0.15)" : "#0b1220",
                    color: ativo ? "#e0f2fe" : "#cbd5e1",
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </section>

        <section style={{ marginBottom: 18, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 28 }}>Ofertas em destaque</h2>
            <p style={{ color: "#94a3b8", marginTop: 8, marginBottom: 0 }}>{itens.length} item(ns) encontrado(s)</p>
          </div>
          <div style={{ color: "#93c5fd", fontWeight: 700 }}>Loja principal: Amazon</div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 18,
          }}
        >
          {itens.map((produto, index) => (
            <article key={`${produto.nome}-${index}`} style={cardStyle()}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#bfdbfe",
                    background: "rgba(59,130,246,0.18)",
                    border: "1px solid rgba(59,130,246,0.25)",
                    padding: "8px 10px",
                    borderRadius: 999,
                  }}
                >
                  {produto.categoria}
                </span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#86efac",
                    background: "rgba(34,197,94,0.14)",
                    border: "1px solid rgba(34,197,94,0.24)",
                    padding: "8px 10px",
                    borderRadius: 999,
                  }}
                >
                  {produto.destaque}
                </span>
              </div>

              <h3 style={{ fontSize: 24, lineHeight: 1.25, marginTop: 18, marginBottom: 10 }}>{produto.nome}</h3>

              <div style={{ color: "#94a3b8", fontSize: 15, marginBottom: 12 }}>{produto.loja}</div>

              <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 22 }}>{produto.preco}</div>

              <a href={produto.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    background: "linear-gradient(135deg, #22c55e 0%, #4ade80 100%)",
                    color: "#052e16",
                    border: "none",
                    borderRadius: 14,
                    fontWeight: 800,
                    fontSize: 16,
                    cursor: "pointer",
                    boxShadow: "0 8px 18px rgba(34,197,94,0.25)",
                  }}
                >
                  Ver oferta
                </button>
              </a>
            </article>
          ))}
        </section>

        {itens.length === 0 && (
          <section style={{ ...cardStyle(), marginTop: 18, textAlign: "center" }}>
            <h3 style={{ marginTop: 0 }}>Nenhum produto encontrado</h3>
            <p style={{ color: "#94a3b8", marginBottom: 0 }}>Tente mudar a busca ou escolher outra categoria.</p>
          </section>
        )}
      </div>
    </main>
  );
}
