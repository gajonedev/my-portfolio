"use client";

import { useRef, useState } from "react";
import Container from "../components/Container";

export default function PdfPage() {
  const [fullName, setFullName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const today = new Date().toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleDownload = async () => {
    if (!fullName.trim() || !certificateRef.current) return;

    setIsGenerating(true);
    setGenerated(true);

    // Small delay to let the certificate render with the name
    await new Promise((r) => setTimeout(r, 100));

    const html2pdf = (await import("html2pdf.js")).default;

    const opt = {
      margin: 0,
      filename: `certificat-${fullName.trim().toLowerCase().replace(/\s+/g, "-")}.pdf`,
      image: { type: "jpeg" as const, quality: 1 },
      html2canvas: { scale: 3, useCORS: true, letterRendering: true },
      jsPDF: {
        unit: "mm" as const,
        format: "a4",
        orientation: "landscape" as const,
      },
    };

    try {
      await html2pdf().set(opt).from(certificateRef.current).save();
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {/* Form */}
      <div className="bg-card/50 py-10 border-stroke border-b">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-bold text-foreground text-3xl sm:text-4xl">
            Générateur de certificat
          </h1>
          <p className="max-w-lg text-foreground-muted text-sm">
            Entrez le nom complet du bénéficiaire pour générer et télécharger un
            certificat au format PDF.
          </p>
          <div className="flex sm:flex-row flex-col gap-3 mt-2 w-full max-w-lg">
            <input
              type="text"
              placeholder="Nom et prénoms"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleDownload()}
              className="flex-1 sm:text-left text-center input"
            />
            <button
              type="button"
              onClick={handleDownload}
              disabled={!fullName.trim() || isGenerating}
              className="disabled:opacity-50 whitespace-nowrap disabled:hover:transform-none disabled:cursor-not-allowed btn-primary"
            >
              {isGenerating ? "Génération…" : "Télécharger le certificat"}
            </button>
          </div>
        </Container>
      </div>

      {/* Certificate preview */}
      <main className="py-12">
        <Container className="flex flex-col items-center gap-6">
          {generated && (
            <p className="font-medium text-green-500 text-sm">
              ✓ Certificat généré avec succès !
            </p>
          )}

          <p className="text-foreground-muted text-xs uppercase tracking-widest">
            Aperçu du certificat
          </p>

          {/* Certificate wrapper with shadow */}
          <div className="pb-4 w-full max-w-5xl overflow-x-auto">
            <div
              className="shadow-2xl mx-auto"
              style={{
                width: "297mm",
                minWidth: "297mm",
                height: "210mm",
              }}
            >
              {/* Certificate — this is what gets exported as PDF */}
              <div
                ref={certificateRef}
                style={{
                  width: "297mm",
                  height: "210mm",
                  background:
                    "linear-gradient(135deg, #0f0e2a 0%, #1a1845 40%, #0f0e2a 100%)",
                  position: "relative",
                  overflow: "hidden",
                  fontFamily: "'Lexend', 'Segoe UI', system-ui, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18mm",
                  boxSizing: "border-box",
                }}
              >
                {/* Background decorative elements */}
                <div
                  style={{
                    position: "absolute",
                    top: "-80px",
                    left: "-80px",
                    width: "320px",
                    height: "320px",
                    background:
                      "radial-gradient(circle, rgba(167,118,244,0.15) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-60px",
                    right: "-60px",
                    width: "280px",
                    height: "280px",
                    background:
                      "radial-gradient(circle, rgba(193,165,239,0.12) 0%, transparent 70%)",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "600px",
                    height: "600px",
                    background:
                      "radial-gradient(circle, rgba(167,118,244,0.05) 0%, transparent 60%)",
                    borderRadius: "50%",
                  }}
                />

                {/* Inner bordered frame */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1.5px solid rgba(193,165,239,0.25)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    padding: "24px 40px",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Corner accents */}
                  {[
                    { top: "-2px", left: "-2px" },
                    { top: "-2px", right: "-2px" },
                    { bottom: "-2px", left: "-2px" },
                    { bottom: "-2px", right: "-2px" },
                  ].map((pos, i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        ...pos,
                        width: "40px",
                        height: "40px",
                        borderTop: pos.top ? "3px solid #a776f4" : "none",
                        borderBottom: pos.bottom ? "3px solid #a776f4" : "none",
                        borderLeft: pos.left ? "3px solid #a776f4" : "none",
                        borderRight: pos.right ? "3px solid #a776f4" : "none",
                        borderTopLeftRadius: pos.top && pos.left ? "16px" : "0",
                        borderTopRightRadius:
                          pos.top && pos.right ? "16px" : "0",
                        borderBottomLeftRadius:
                          pos.bottom && pos.left ? "16px" : "0",
                        borderBottomRightRadius:
                          pos.bottom && pos.right ? "16px" : "0",
                      }}
                    />
                  ))}

                  {/* Logo */}
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "#a776f4",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#1a1625",
                      marginBottom: "12px",
                    }}
                  >
                    NG
                  </div>

                  {/* Title */}
                  <h2
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      letterSpacing: "0.45em",
                      textTransform: "uppercase",
                      color: "#a776f4",
                      margin: "0 0 6px 0",
                    }}
                  >
                    Certificat de réalisation
                  </h2>

                  {/* Decorative line */}
                  <div
                    style={{
                      width: "80px",
                      height: "2px",
                      background:
                        "linear-gradient(90deg, transparent, #a776f4, transparent)",
                      margin: "8px 0 20px 0",
                    }}
                  />

                  {/* Presented to */}
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#b9b2d9",
                      margin: "0 0 8px 0",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Décerné à
                  </p>

                  {/* Recipient name */}
                  <h1
                    style={{
                      fontSize: "38px",
                      fontWeight: 700,
                      color: "#f5f2ff",
                      margin: "0 0 8px 0",
                      textAlign: "center",
                      lineHeight: 1.2,
                      minHeight: "48px",
                    }}
                  >
                    {fullName.trim() || "Nom et Prénoms"}
                  </h1>

                  {/* Underline accent */}
                  <div
                    style={{
                      width: "200px",
                      height: "1.5px",
                      background:
                        "linear-gradient(90deg, transparent, rgba(167,118,244,0.5), transparent)",
                      margin: "4px 0 20px 0",
                    }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#b9b2d9",
                      textAlign: "center",
                      maxWidth: "520px",
                      lineHeight: 1.7,
                      margin: "0 0 28px 0",
                    }}
                  >
                    Pour avoir brillamment complété le projet de développement
                    web et démontré une maîtrise exceptionnelle des technologies
                    modernes dans le cadre de notre collaboration.
                  </p>

                  {/* Bottom section: date + signature */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      width: "100%",
                      maxWidth: "560px",
                      marginTop: "auto",
                    }}
                  >
                    {/* Date */}
                    <div style={{ textAlign: "center" }}>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#f5f2ff",
                          fontWeight: 600,
                          margin: "0 0 6px 0",
                        }}
                      >
                        {today}
                      </p>
                      <div
                        style={{
                          width: "120px",
                          height: "1px",
                          background: "rgba(193,165,239,0.3)",
                          margin: "0 auto 6px auto",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "10px",
                          color: "#b9b2d9",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        Date
                      </p>
                    </div>

                    {/* Issuer signature */}
                    <div style={{ textAlign: "center" }}>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#f5f2ff",
                          fontWeight: 600,
                          margin: "0 0 6px 0",
                        }}
                      >
                        Néhémie Gandonou
                      </p>
                      <div
                        style={{
                          width: "120px",
                          height: "1px",
                          background: "rgba(193,165,239,0.3)",
                          margin: "0 auto 6px auto",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "10px",
                          color: "#b9b2d9",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          margin: 0,
                        }}
                      >
                        Signature
                      </p>
                    </div>
                  </div>

                  {/* Footer line */}
                  <p
                    style={{
                      fontSize: "9px",
                      color: "rgba(185,178,217,0.4)",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      marginTop: "16px",
                    }}
                  >
                    gajone.dev — Développeur Web & Mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
