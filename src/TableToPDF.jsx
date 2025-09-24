import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const SensoryReportApp = () => {
  const page1Ref = useRef();
  const page2Ref = useRef();

  const [samples, setSamples] = useState([]);
  const [selectedSample, setSelectedSample] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/samples").then((res) => {
      setSamples(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedSample) {
      axios
        .get(
          `http://localhost:4000/api/sensory?sample=${encodeURIComponent(
            selectedSample
          )}`
        )
        .then((res) => setResult(res.data))
        .catch(() => {
          setResult(null);
          alert("Sample tidak dijumpai");
        });
    }
  }, [selectedSample]);

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const canvas1 = await html2canvas(page1Ref.current, { scale: 2 });
    const img1 = canvas1.toDataURL("image/png");
    const h1 = (canvas1.height * pdfWidth) / canvas1.width;
    pdf.addImage(img1, "PNG", 0, 0, pdfWidth, h1);

    pdf.addPage();
    const canvas2 = await html2canvas(page2Ref.current, { scale: 2 });
    const img2 = canvas2.toDataURL("image/png");
    const h2 = (canvas2.height * pdfWidth) / canvas2.width;
    pdf.addImage(img2, "PNG", 0, 0, pdfWidth, h2);

    pdf.save("Laporan_Ujian_Sensori.pdf");
  };

  const borderStyle = {
    border: "1px solid black",
    padding: "4px",
    fontSize: "9px",
    textAlign: "center",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  };

  const headerStyle = {
    ...borderStyle,
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  };

  const renderRow = (title, keys) => (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "0.6rem",
        tableLayout: "fixed", // 🔥 kunci utama untuk saiz tetap
      }}
    >
      <thead>
        <tr>
          <th colSpan={keys.length} style={headerStyle}>
            {title}
          </th>
        </tr>
        <tr>
          {keys.map((k) => (
            <th key={k} style={borderStyle}>
              {k.replace(/_/g, " ")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {keys.map((k) => (
            <td key={k} style={borderStyle}>
              {result[k]}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );

  return (
    <div style={{ padding: "1rem" }}>
      <label>
        <strong>Pilih Sample:</strong>
      </label>
      <select
        value={selectedSample}
        onChange={(e) => setSelectedSample(e.target.value)}
        style={{ marginLeft: "1rem" }}
      >
        <option value="">-- Pilih --</option>
        {samples.map((s) => (
          <option key={s.id} value={s.sample}>
            {s.sample}
          </option>
        ))}
      </select>

      {result && (
        <>
          {/* PAGE 1 */}
          <div
            ref={page1Ref}
            style={{
              width: "794px",
              padding: "1rem",
              fontFamily: "Arial",
              color: "#000",
              backgroundColor: "#fff",
              marginTop: "1rem",
            }}
          >
            <h4 style={{ textAlign: "center" }}>
              Laporan Penilaian Panel Ujian Sensori Produk Industri Asas Tani,
              <br />
              Jabatan Pertanian Negeri Pahang
            </h4>
            <p style={{ textAlign: "center", fontSize: "10px" }}>
              <strong>Sample:</strong> {result.sample}
            </p>

            {renderRow("MANIS", [
              "sangat_manis",
              "sederhana_manis",
              "sesuai_rasa_manis",
              "kurang_manis",
              "tawar",
            ])}
            {renderRow("MASAM", [
              "sangat_masam",
              "sederhana_masam",
              "sesuai_rasa_masam",
              "kurang_masam",
              "tidak_masam",
            ])}
            {renderRow("PAHIT", [
              "sangat_pahit",
              "sederhana_pahit",
              "sesuai_rasa_pahit",
              "kurang_pahit",
              "tidak_pahit",
            ])}
            {renderRow("MASIN", [
              "sangat_masin",
              "sederhana_masin",
              "sesuai_rasa_masin",
              "kurang_masin",
              "tidak_masin",
            ])}
            {renderRow("WARNA", [
              "sangat_menarik",
              "sederhana_menarik",
              "sesuai_warna",
              "kurang_menarik",
              "tidak_menarik",
            ])}
            {renderRow("TEKSTUR", [
              "sangat_keras",
              "sederhana_keras",
              "sesuai_tekstur",
              "kurang_keras",
              "tidak_rangup",
            ])}
            {renderRow("SEDAP", [
              "sangat_sedap",
              "sederhana_sedap",
              "sesuai_rasa_sedap",
              "kurang_sedap",
              "tidak_sedap",
            ])}
            {renderRow("PENERIMAAN", ["diterima", "tidak_diterima"])}

            <div style={{ marginTop: "1rem", fontSize: "10px" }}>
              <p>
                <strong>Disahkan Oleh :</strong>
              </p>
              <p>____________________________</p>
              <p>
                Ketua Bahagian Industri Asas Tani,
                <br />
                Jabatan Pertanian Negeri Pahang
              </p>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <p>
                  <strong>Tarikh :</strong> 30/06/25 - 6:53PM
                </p>
              </div>
            </div>
          </div>

          {/* PAGE 2 */}
          <div
            ref={page2Ref}
            style={{
              width: "794px",
              padding: "1rem",
              fontFamily: "Arial",
              color: "#000",
              backgroundColor: "#fff",
              marginTop: "2rem",
            }}
          >
            <h4 style={{ textAlign: "center" }}>
              Laporan Penilaian Panel Ujian Sensori Produk Industri Asas Tani,
              <br />
              Jabatan Pertanian Negeri Pahang
            </h4>
            <p>
              <strong>Jumlah Panel:</strong> 15 Orang
            </p>
            <p>
              <strong>LAMPIRAN: ULASAN PANEL</strong>
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={headerStyle}>Bil.</th>
                  <th style={headerStyle}>Ulasan dari Panel</th>
                </tr>
              </thead>
              <tbody>
                {result.ulasan?.map((item, idx) => (
                  <tr key={idx}>
                    <td style={borderStyle}>{idx + 1}</td>
                    <td style={borderStyle}>{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button onClick={handleDownloadPDF} style={{ marginTop: "2rem" }}>
            Muat Turun PDF (2 Halaman)
          </button>
        </>
      )}
    </div>
  );
};

export default SensoryReportApp;
