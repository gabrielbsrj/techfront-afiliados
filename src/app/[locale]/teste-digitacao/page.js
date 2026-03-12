"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, RotateCcw } from "lucide-react";
import AdSenseWidget from "@/components/AdSenseWidget";
import MLDynamicWidget from "@/components/MLDynamicWidget";

const phrases = {
  es: [
    "La Inteligencia Artificial no reemplazará tu trabajo, pero un profesional que la use sí lo hará.",
    "La Ingeniería de Prompts es la habilidad de comunicarse con claridad con modelos de lenguaje avanzados.",
    "Para aumentar la productividad diaria, automatizar tareas repetitivas con scripts y agentes es el primer paso.",
    "El futuro del trabajo pertenece a quienes pueden aprender rápidamente nuevas herramientas computacionales.",
    "Un desarrollador moderno pasa más tiempo optimizando la arquitectura que escribiendo código repetitivo."
  ],
  en: [
    "Artificial Intelligence will not replace you, but a person using AI certainly will.",
    "Prompt Engineering is the skill of clearly communicating with advanced language models.",
    "To increase daily productivity, automating repetitive tasks with scripts and agents is the first step.",
    "The future of work belongs to those who can quickly learn new computational tools and adapt.",
    "A modern developer spends more time optimizing architecture than writing boilerplate code."
  ],
  pt: [
    "A Inteligência Artificial não vai substituir você, mas uma pessoa usando Inteligência Artificial com certeza vai.",
    "Engenharia de Prompt é a habilidade de se comunicar com clareza com modelos de linguagem avançados.",
    "Para aumentar a produtividade diária, automatizar tarefas repetitivas com scripts Python e agentes é o primeiro passo.",
    "O futuro do trabalho pertence àqueles capazes de aprender rapidamente as novas ferramentas computacionais e se adaptar.",
    "Um desenvolvedor moderno passa mais tempo otimizando a arquitetura do que escrevendo linhas de código boilerplate."
  ]
};

const translations = {
  es: { time: "Tiempo", accuracy: "Precisión", title: "Test de", highlight: "Digitación Tech", subtitle: "Aumenta tu productividad entrenando las manos y leyendo sobre IA.", placeholder: "Empieza a escribir aquí...", finished: "¡Test finalizado!", tryAgain: "Intentar de nuevo", equip: "Equipos para Digitar Más Rápido", back: "Volver al Inicio" },
  en: { time: "Time", accuracy: "Accuracy", title: "Tech", highlight: "Typing Test", subtitle: "Boost your productivity by training your hands reading about AI.", placeholder: "Start typing here...", finished: "Test finished!", tryAgain: "Try again", equip: "Equipment to Type Faster", back: "Back to Home" },
  pt: { time: "Tempo", accuracy: "Precisão", title: "Teste de", highlight: "Digitação Tech", subtitle: "Aumente sua produtividade treinando as mãos lendo sobre IA.", placeholder: "Comece a digitar aqui...", finished: "Teste finalizado!", tryAgain: "Tentar novamente", equip: "Equipamentos para Digitar Mais Rápido", back: "Voltar para Home" }
};

export default function TypingTest() {
  const params = useParams();
  const locale = params.locale || "es";
  const t = translations[locale] || translations.es;

  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const inputRef = useRef(null);

  useEffect(() => {
    const localPhrases = phrases[locale] || phrases.es;
    setText(localPhrases[Math.floor(Math.random() * localPhrases.length)]);
  }, [locale]);

  useEffect(() => {
    let timer;
    if (isStarted && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isStarted) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [isStarted, timeLeft]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (!isStarted) setIsStarted(true);
    setInput(val);
    let correctChars = 0;
    for (let i = 0; i < val.length; i++) {
      if (val[i] === text[i]) correctChars++;
    }
    const acc = val.length > 0 ? (correctChars / val.length) * 100 : 100;
    setAccuracy(Math.round(acc));
    if (val === text) endGame();
  };

  const endGame = () => {
    setIsFinished(true);
    setIsStarted(false);
    const timeSpentInMinutes = (60 - timeLeft) / 60 || 1 / 60;
    const wordsTyped = input.length / 5;
    setWpm(Math.round(wordsTyped / timeSpentInMinutes));
  };

  const retryTest = () => {
    setInput("");
    setTimeLeft(60);
    setIsStarted(false);
    setIsFinished(false);
    setWpm(0);
    setAccuracy(100);
    const localPhrases = phrases[locale] || phrases.es;
    setText(localPhrases[Math.floor(Math.random() * localPhrases.length)]);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <Link href={`/${locale}`} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> {t.back}
      </Link>

      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          {t.title} <span className="text-gradient">{t.highlight}</span>
        </h1>
        <p style={{ color: "var(--text-muted)" }}>{t.subtitle}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>
            <span style={{ color: "var(--accent)" }}>{t.time}: 00:{timeLeft.toString().padStart(2, "0")}</span>
            <span style={{ color: accuracy < 90 ? "red" : "var(--primary)" }}>{t.accuracy}: {accuracy}%</span>
          </div>

          <div style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "2rem", padding: "1rem", background: "var(--typing-bg)", borderRadius: "8px", position: "relative", userSelect: "none", minHeight: "150px" }}>
            {text.split("").map((char, index) => {
              let color = "var(--text-muted)";
              if (index < input.length) {
                color = input[index] === char ? "var(--primary)" : "red";
              }
              return (
                <span key={index} style={{ color, background: input[index] !== char && index < input.length ? "rgba(255,0,0,0.2)" : "transparent" }}>
                  {char}
                </span>
              );
            })}
          </div>

          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            disabled={isFinished}
            placeholder={isFinished ? t.finished : t.placeholder}
            style={{ width: "100%", height: "150px", padding: "1rem", fontSize: "1.1rem", borderRadius: "8px", border: "1px solid var(--card-border)", background: "var(--input-bg)", color: "var(--foreground)", resize: "none", outline: "none", fontFamily: "var(--font-geist-mono), monospace" }}
          />

          {isFinished && (
            <div style={{ marginTop: "2rem", textAlign: "center", animation: "fadeIn 0.5s" }}>
              <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "1.5rem" }}>
                <div style={{ padding: "1rem", background: "rgba(6, 182, 212, 0.1)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--primary)" }}>{wpm}</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>WPM</div>
                </div>
                <div style={{ padding: "1rem", background: "rgba(139, 92, 246, 0.1)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "var(--secondary)" }}>{accuracy}%</div>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{t.accuracy}</div>
                </div>
              </div>
              <button onClick={retryTest} className="btn-primary" style={{ width: "100%" }}>
                <RotateCcw size={18} /> {t.tryAgain}
              </button>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <div className="glass-panel" style={{ padding: "1.5rem", textAlign: "center" }}>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>{t.equip}</h3>
            <MLDynamicWidget />
          </div>
          <div className="glass-panel" style={{ padding: "1.5rem", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "100%" }}>
              <AdSenseWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
