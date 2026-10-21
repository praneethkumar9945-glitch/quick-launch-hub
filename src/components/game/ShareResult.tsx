import { useRef, useState } from "react";
import { Copy, Download, MessageCircle } from "lucide-react";
import type { Profile } from "@/data/profiles";

interface Props {
  score: number;
  profile: Profile;
  match: number;
}

export function ShareResult({ score, profile, match }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const text = `🚀 What's Your Future Score? I scored ${score}/100 — ${profile.emoji} ${profile.name.toUpperCase()} (${match}% match). Your interests. Your skills. Your possible future.`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const download = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1000;
    canvas.height = 1250;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const grad = ctx.createLinearGradient(0, 0, 1000, 1250);
    grad.addColorStop(0, "#0b0d12");
    grad.addColorStop(1, "#150a10");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1000, 1250);
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 3;
    ctx.strokeRect(40, 40, 920, 1170);
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 44px sans-serif";
    ctx.fillText("WHAT'S YOUR FUTURE SCORE?", 500, 200);
    ctx.fillStyle = "#ff3b47";
    ctx.font = "bold 190px sans-serif";
    ctx.fillText(`${score}`, 500, 460);
    ctx.fillStyle = "#9db4ff";
    ctx.font = "36px sans-serif";
    ctx.fillText("/ 100", 500, 520);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 64px sans-serif";
    ctx.fillText(`${profile.emoji} ${profile.name.toUpperCase()}`, 500, 680);
    ctx.fillStyle = "#4fa3ff";
    ctx.font = "bold 46px sans-serif";
    ctx.fillText(`${match}% MATCH`, 500, 760);
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "italic 32px sans-serif";
    ctx.fillText("Your interests. Your skills.", 500, 880);
    ctx.fillText("Your possible future.", 500, 930);
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.strokeRect(340, 1000, 320, 130);
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.font = "26px sans-serif";
    ctx.fillText("YOUR INSTITUTION LOGO", 500, 1072);

    const link = document.createElement("a");
    link.download = `future-score-${score}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="grid gap-5">
      <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground">
        Share My Future 🚀
      </h3>

      <div
        ref={cardRef}
        className="glass glow-secondary rounded-3xl p-8 text-center"
        aria-label="Result card preview"
      >
        <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
          What&apos;s Your Future Score?
        </p>
        <p className="mt-3 font-display text-6xl font-black text-gradient">{score}</p>
        <p className="text-sm text-muted-foreground">/ 100</p>
        <p className="mt-4 font-display text-2xl font-bold">
          {profile.emoji} {profile.name.toUpperCase()}
        </p>
        <p className="font-display text-secondary">{match}% MATCH</p>
        <p className="mt-4 text-sm italic text-muted-foreground">
          &ldquo;Your interests. Your skills. Your possible future.&rdquo;
        </p>
        <div className="mx-auto mt-6 flex h-16 w-44 items-center justify-center rounded-xl border border-dashed border-border text-[10px] uppercase tracking-widest text-muted-foreground">
          Institution logo
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(text)}`}
          target="_blank"
          rel="noreferrer"
          className="glass inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium transition-colors hover:border-secondary/60"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <button
          onClick={copy}
          className="glass inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium transition-colors hover:border-secondary/60"
        >
          <Copy className="h-4 w-4" /> {copied ? "Copied!" : "Copy Result"}
        </button>
        <button
          onClick={download}
          className="glass inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium transition-colors hover:border-secondary/60"
        >
          <Download className="h-4 w-4" /> Download Card
        </button>
      </div>
    </div>
  );
}
