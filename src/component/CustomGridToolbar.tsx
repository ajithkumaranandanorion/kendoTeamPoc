import DownloadIcon from '@mui/icons-material/Download';
import { useKendoContext } from '../hooks/useKendoContext';

export const CustomToolbar = () => {
  const { percentageToggle, setPercentageToggle } = useKendoContext();
  const handlePercentageToggle = (e: React.MouseEvent<HTMLLabelElement>) => {
    const input = e.target as HTMLInputElement;  
    setPercentageToggle(input.checked);
  };

  return (
    <div className="flex items-center justify-between  bg-gray-100 px-2 py-1 text-sm border-b border-gray-300 mt-5">

      {/* LEFT TOOLBAR */}
      <div className="flex items-center gap-2">

        {/* Export */}
        <div className="flex items-center gap-1 rounded border border-gray-300 bg-gray-200 px-2 py-1 cursor-pointer">
          <DownloadIcon sx={{ fontSize: 16 }} />
          <span>Export</span>
        </div>


   

        {/* Checkboxes */}
    

        <label className="flex items-center gap-1 rounded border border-gray-300 bg-gray-200 px-2 py-1 cursor-pointer" onClick={(e)=>handlePercentageToggle(e)}>
          <input type="checkbox" defaultChecked={percentageToggle} className="accent-blue-600" />
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
