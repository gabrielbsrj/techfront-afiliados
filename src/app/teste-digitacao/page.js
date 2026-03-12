"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, Keyboard, Trophy } from "lucide-react";
import AdSenseWidget from "@/components/AdSenseWidget";
import MLDynamicWidget from "@/components/MLDynamicWidget";

const fallbackText = "A Inteligência Artificial não vai substituir você, mas uma pessoa usando Inteligência Artificial vai.";

export default function TypingTest() {
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // Teste de 60 segundos
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const inputRef = useRef(null);

  useEffect(() => {
    // Frases randômicas sobre tecnologia para o teste
    const phrases = [
      "A Inteligência Artificial não vai substituir você, mas uma pessoa usando Inteligência Artificial com certeza vai.",
      "Engenharia de Prompt é a habilidade de se comunicar com clareza com modelos de linguagem avançados.",
      "Para aumentar a produtividade diaria, automatizar tarefas repetitivas com scripts Python e agentes é o primeiro passo.",
      "O futuro do trabalho pertence àqueles capazes de aprender rapidamente as novas ferramentas computacionais e se adaptar.",
      "Um desenvolvedor moderno passa mais tempo otimizando a arquitetura do que escrevendo linhas de codigo boilerplate."
    ];
    setText(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  useEffect(() => {
    let timer;
    if (isStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isStarted) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [isStarted, timeLeft]);

  // Função para processar a digitação
  const handleInputChange = (e) => {
    const val = e.target.value;
    if (!isStarted) setIsStarted(true);

    setInput(val);

    // Calcular Precisão
    let correctChars = 0;
    for (let i = 0; i < val.length; i++) {
        if (val[i] === text[i]) correctChars++;
    }
    const acc = val.length > 0 ? (correctChars / val.length) * 100 : 100;
    setAccuracy(Math.round(acc));

    // Se digitou todo o texto
    if (val === text) {
      endGame();
    }
  };

  const endGame = () => {
    setIsFinished(true);
    setIsStarted(false);
    
    // WPM: Palavras corretas (média 5 chars por palavra) / Minutos decorridos
    const timeSpentInMinutes = (60 - timeLeft) / 60 || 1/60; // evita div por 0
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
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div className="container" style={{ padding: "4rem 1.5rem" }}>
      <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary)", marginBottom: "2rem", fontWeight: "500" }}>
        <ArrowLeft size={16} /> Voltar para a Home
      </Link>
      
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Teste de <span className="text-gradient">Digitação Tech</span>
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Aumente sua produtividade treinando as mãos (e seu cérebro) lendo sobre IA e Tecnologia.
        </p>
      </div>

      {/* Grid com Jogo e Publicidade lado a lado */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
        
        {/* Painel do Jogo */}
        <div className="glass-panel" style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "bold" }}>
                <span style={{ color: "var(--accent)" }}>Tempo: 00:{timeLeft.toString().padStart(2, '0')}</span>
                <span style={{ color: accuracy < 90 ? "red" : "var(--primary)" }}>Precisão: {accuracy}%</span>
            </div>

            <div style={{ 
                fontSize: "1.2rem", 
                lineHeight: "1.6", 
                marginBottom: "2rem", 
                padding: "1rem", 
                background: "rgba(0,0,0,0.3)", 
                borderRadius: "8px",
                position: "relative",
                userSelect: "none",
                minHeight: "150px"
            }}>
                {/* Renderização de caracteres com cor de erro ou acerto */}
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
                placeholder={isFinished ? "Teste finalizado!" : "Comece a digitar o texto acima aqui..."}
                style={{
                    width: "100%",
                    height: "150px",
                    padding: "1rem",
                    fontSize: "1.1rem",
                    borderRadius: "8px",
                    border: "1px solid var(--card-border)",
                    background: "rgba(0,0,0,0.5)",
                    color: "var(--foreground)",
                    resize: "none",
                    outline: "none",
                    fontFamily: "var(--font-geist-mono), monospace"
                }}
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
                            <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Precisão</div>
                        </div>
                    </div>
                    
                    <button onClick={retryTest} className="btn-primary" style={{ width: "100%" }}>
                        <RotateCcw size={18} /> Tentar Novamente
                    </button>
                </div>
            )}
        </div>

        {/* Painel de Publicidade e Vitrine ML */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div className="glass-panel" style={{ padding: "1.5rem", textAlign: "center" }}>
                <h3 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Equipamentos para Digitar Mais Rápido</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "1rem" }}>Os teclados de perfil baixo e mecânicos ajudam na agilidade dos dedos.</p>
                {/* Aqui entra o script de widget dinâmico do ML */}
                <MLDynamicWidget /> 
            </div>

            <div className="glass-panel" style={{ padding: "1.5rem", flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                 {/* Google AdSense Injetado */}
                <div style={{ width: "100%" }}>
                    <AdSenseWidget />
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
