import React, { useState } from 'react';

// Pastikan ada kata 'export default' sebelum 'function'
export default function KalkulatorOEE() {
  const [input, setInput] = useState({
    planTime: 480,
    runTime: 420,
    totalParts: 1000,
    goodParts: 950
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: parseFloat(e.target.value) || 0 });
  };

  const availability = (input.runTime / input.planTime) || 0;
  const performance = (input.totalParts / (input.runTime * 2)) || 0;
  const quality = (input.goodParts / input.totalParts) || 0;
  const oeeScore = (availability * performance * quality) * 100;

  let warnaSkor = "text-warning";
  if (oeeScore < 50) warnaSkor = "text-danger";
  if (oeeScore > 85) warnaSkor = "text-success";

  return (
    <div className="card shadow p-4 border-0">
      <h2 className="mb-4 text-center">Project Mini: Kalkulator OEE</h2>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Plan Time (Min)</label>
          <input type="number" name="planTime" className="form-control" value={input.planTime} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Run Time (Min)</label>
          <input type="number" name="runTime" className="form-control" value={input.runTime} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Total Produksi</label>
          <input type="number" name="totalParts" className="form-control" value={input.totalParts} onChange={handleInput} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Produk Bagus</label>
          <input type="number" name="goodParts" className="form-control" value={input.goodParts} onChange={handleInput} />
        </div>
      </div>

      <div className="mt-5 text-center p-4 bg-light rounded shadow-sm">
        <h4>Real-Time OEE Score</h4>
        <h1 className={`display-2 fw-bold ${warnaSkor}`}>{oeeScore.toFixed(2)}%</h1>
      </div>
    </div>
  );
}