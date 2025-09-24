import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const SensoryAutoTable = () => {
  const result = {
    sample: "601828 - Sambal Ikan Talang",
    sections: [
      {
        title: "MANIS",
        data: [
          ["Sangat Manis", "0.00%"],
          ["Sederhana Manis", "6.67%"],
          ["Sesuai Rasa", "73.33%"],
          ["Kurang Manis", "13.33%"],
          ["Tawar", "6.67%"],
        ],
      },
      {
        title: "MASAM",
        data: [
          ["Sangat Masam", "0.00%"],
          ["Sederhana Masam", "0.00%"],
          ["Sesuai Rasa", "86.67%"],
          ["Kurang Masam", "0.00%"],
          ["Tidak Masam", "13.33%"],
        ],
      },
      {
        title: "PAHIT",
        data: [
          ["Sangat Pahit", "0.00%"],
          ["Sederhana Pahit", "26.67%"],
          ["Sesuai Rasa", "20.00%"],
          ["Kurang Pahit", "0.00%"],
          ["Tidak Pahit", "53.33%"],
        ],
      },
    ],
    penerimaan: [
      ["Citarasa Produk Diterima", "93.33%"],
      ["Citarasa Produk Tidak Diterima", "6.67%"],
    ],
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text("Laporan Ujian Sensori", 14, 15);
    doc.setFontSize(10);
    doc.text(`Sample: ${result.sample}`, 14, 22);

    let y = 28;

    result.sections.forEach((section) => {
      doc.autoTable({
        head: [[section.title, "Peratus"]],
        body: section.data,
        startY: y,
        styles: { fontSize: 9, halign: "center" },
        headStyles: { fillColor: [220, 220, 220] },
      });
      y = doc.lastAutoTable.finalY + 5;
    });

    doc.autoTable({
      head: [["KESELURUHAN PENERIMAAN", "Peratus"]],
      body: result.penerimaan,
      startY: y,
      styles: { fontSize: 9, halign: "center" },
      headStyles: { fillColor: [220, 220, 220] },
    });

    y = doc.lastAutoTable.finalY + 10;

    doc.setFontSize(9);
    doc.text("Disahkan Oleh:", 14, y);
    doc.text("__________________________", 14, y + 10);
    doc.text("Ketua Bahagian Industri Asas Tani,", 14, y + 18);
    doc.text("Jabatan Pertanian Negeri Pahang", 14, y + 24);
    doc.text("Tarikh: 30/06/2025 - 6:53PM", 150, y + 24);

    doc.save("laporan-ujian-sensori.pdf");
  };

  return (
    <div>
      <button onClick={handleDownloadPDF}>Muat Turun PDF (AutoTable)</button>
    </div>
  );
};

export default SensoryAutoTable;
