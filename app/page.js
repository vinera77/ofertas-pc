"use client";

import { useMemo, useState } from "react";

const dealsSeed = [
  {
    id: 1,
    title: "RX 6750 XT 12GB",
    category: "gpu",
    store: "Kabum",
    price: 1899.9,
    oldPrice: 2399.9,
    coupon: "GPU10",
    shipping: "Frete grátis",
    badge: "Melhor custo/benefício",
    affiliateUrl: "#afil-kabum-rx6750xt",
  },
  {
    id: 2,
    title: "Ryzen 5 7600",
    category: "cpu",
    store: "Terabyte",
    price: 1099.9,
    oldPrice: 1399.9,
    coupon: "RYZEN50",
    shipping: "Entrega rápida",
    badge: "Queda forte",
    affiliateUrl: "#afil-tera-r57600",
  },
  {
    id: 3,
    title: "32GB DDR5 6000MHz",
    category: "ram",
    store: "Amazon",
    price: 629.9,
    oldPrice: 799.9,
    coupon: "",
    shipping: "Prime",
    badge: "Alta procura",
    affiliateUrl: "#afil-amz-ddr5",
  },
  {
    id: 4,
    title: "SSD NVMe 1TB PCIe 4.0",
    category: "ssd",
    store: "Mercado Livre",
    price: 379.9,
    oldPrice: 499.9,
    coupon: "FLASH15",
    shipping: "Chega amanhã",
    badge: "Oferta relâmpago",
    affiliateUrl: "#afil-ml-ssd1tb",
  },
];

function formatBRL(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function calcDiscount(price, oldPrice) {
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filteredDeals = useMemo(() => {
    return dealsSeed.filter((deal) => {
      const matchesQuery = `${deal.title} ${deal.store}`
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesCategory =
        category === "all" || deal.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "32px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, marginBottom: 10 }}>
          Promoções de Peças de Informática
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: 30 }}>
          Site de ofertas com links de afiliado.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          <input
            type="text"
            placeholder="Buscar peça ou loja"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #334155",
              background: "#111827",
              color: "white",
              minWidth: 260,
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              padding: "12px 14px",
              borderRadius: 10,
              border: "1px solid #334155",
              background: "#111827",
              color: "white",
            }}
          >
            <option value="all">Todas</option>
            <option value="gpu">Placas de vídeo</option>
            <option value="cpu">Processadores</option>
            <option value="ram">Memória RAM</option>
            <option value="ssd">SSD / NVMe</option>
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              style={{
                background: "#111827",
                border: "1px solid #334155",
                borderRadius: 16,
                padding: 20,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "#1d4ed8",
                  padding: "6px 10px",
                  borderRadius: 999,
                  fontSize: 12,
                  marginBottom: 12,
                }}
              >
                -{calcDiscount(deal.price, deal.oldPrice)}%
              </div>

              <h2 style={{ fontSize: 22, marginBottom: 10 }}>{deal.title}</h2>

              <p style={{ color: "#94a3b8", marginBottom: 6 }}>
                Loja: {deal.store}
              </p>
              <p style={{ color: "#94a3b8", marginBottom: 16 }}>
                {deal.shipping}
              </p>

              <p
                style={{
                  textDecoration: "line-through",
                  color: "#64748b",
                  marginBottom: 6,
                }}
              >
                {formatBRL(deal.oldPrice)}
              </p>

              <p style={{ fontSize: 30, fontWeight: "bold", marginBottom: 14 }}>
                {formatBRL(deal.price)}
              </p>

              <p style={{ marginBottom: 16, color: "#cbd5e1" }}>
                {deal.coupon ? `Cupom: ${deal.coupon}` : "Sem cupom"}
              </p>

              <a
                href={deal.affiliateUrl}
                style={{
                  display: "inline-block",
                  background: "#22c55e",
                  color: "#052e16",
                  padding: "12px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Ver oferta
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}