import DownloadIcon from "@mui/icons-material/Download";
import { useKendoContext } from "../hooks/useKendoContext";
import React from "react";

interface CustomToolbarProps {
  onExcelExport: () => void;
}

export const CustomToolbar: React.FC<CustomToolbarProps> = ({ onExcelExport }) => {
  const { percentageToggle, setPercentageToggle } = useKendoContext();

  const handlePercentageToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercentageToggle(e.target.checked);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 px-2 py-1 text-sm border-b border-gray-300 mt-5">
      
      {/* LEFT */}
      <div className="flex items-center gap-2">

        {/* EXPORT BUTTON */}
        <div
          onClick={onExcelExport}
          className="flex items-center gap-1 rounded border border-gray-300 bg-gray-200 px-2 py-1 cursor-pointer hover:bg-gray-300"
        >
          <DownloadIcon sx={{ fontSize: 16 }} />
          <span>Export Excel</span>
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-1 rounded border border-gray-300 bg-gray-200 px-2 py-1 cursor-pointer">
          <input
            type="checkbox"
            checked={percentageToggle}
            onChange={handlePercentageToggle}
            className="accent-blue-600"
          />
          <span>Show As Percentages</span>
        </label>

      </div>

      {/* RIGHT */}
      <div className="text-xs text-gray-600 whitespace-nowrap">
        <strong>Report As Of:</strong> 01/15/2026 02:26:12
      </div>
    </div>
  );
};