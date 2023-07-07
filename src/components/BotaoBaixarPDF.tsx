import { Download } from "react-feather";

export default function BotaoBaixarPDF() {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = `/curriculo.pdf`;
    downloadLink.download = `curriculo.pdf`;
    downloadLink.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-1 px-2 py-1 font-bold  rounded border-zinc-900 text-zinc-900 "
    >
      <Download /> Baixar currículo
    </button>
  );
}
