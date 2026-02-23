
import { useState, type ChangeEvent } from 'react';
import FilterComponent from '../utils/filterComponent';
import LandingPageSummary from '../component/landingPageSummary';
import { RiAddLargeFill } from 'react-icons/ri';
import { HiMiniMinus } from 'react-icons/hi2';
import { FaPlay } from "react-icons/fa";
import { AiOutlineStop } from 'react-icons/ai';
import { currentDate } from '../utils/dateConvertor';

export default function EMTDropdown() {
  const optionsAudit: string[] = ["2025", "2024", "2023"];
  const optionsBusiness: string[] = ["1", "2"];
  const optionsFiscal: string[] = ["All", "fiscal 1"];
  const optionsReport: string[] = ["02/15/2026", "01/10/2026"];
  const [auditYear, setAuditYear] = useState<string | number>("2025");
  const [businessUnit, setBusinessUnit] = useState<string | number | undefined>(undefined);
  const [fiscalStatus, setFiscalStatus] = useState<string | number>("All");
  const [reportAs, setReportAs] = useState<string | number>(currentDate());
  const [isShowSummary, setIsShowSummary] = useState<boolean>(true);

  const handleAllClear = () => {
    setAuditYear("2025");
    setFiscalStatus("All");
    setReportAs(currentDate());
    setBusinessUnit(undefined)
  }

  const handleAuditYear = (e: ChangeEvent<HTMLSelectElement>) => {
    setAuditYear(e.currentTarget.value);
  }
  const handleBusinessUnit = (e: ChangeEvent<HTMLSelectElement>) => {
    setBusinessUnit(e.currentTarget.value);
  }
  const handleFiscalStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setFiscalStatus(e.currentTarget.value);
  }
  const handleReportAs = (e: ChangeEvent<HTMLSelectElement>) => {
    setReportAs(e.currentTarget.value);
  }

  return (<div className='border-4 border-gray-100 m-4 rounded-lg'>
    <div className='bg-gray-100 p-4'>
      <span className='flex items-center cursor-pointer text-[1.5rem] gap-2 font-bold '>
        {isShowSummary ? <HiMiniMinus onClick={() => setIsShowSummary(false)} /> : <RiAddLargeFill onClick={() => setIsShowSummary(true)} />}
        <h1>Landing Page Compliance Summary</h1>
      </span>
      {isShowSummary &&
        <LandingPageSummary yearField={auditYear} />
      }

    </div>
    {isShowSummary && <>
      <div className='grid max-md:grid-cols-[10rem_minmax(28rem,1fr)_10rem] grid-cols-[minmax(1rem,10rem)_minmax(30rem,1fr)_minmax(28rem,1fr)_minmax(1rem,10rem)] gap-4 my-8 w-full'>
        <FilterComponent optionsData={optionsAudit} handleDropdown={handleAuditYear} selectedVal={auditYear} labelText={"Audit Year"} classNameField={"flex max-md:justify-center max-md:ml-0 justify-end col-start-2 mr-1 "} />
        <FilterComponent optionsData={optionsBusiness} handleDropdown={handleBusinessUnit} selectedVal={businessUnit} labelText={"Business Unit"} showSelect={true} classNameField={"flex max-md:col-start-2 max-md:justify-center max-md:ml-0 justify-start  col-start-3 ml-1 "} />
        <FilterComponent optionsData={optionsFiscal} handleDropdown={handleFiscalStatus} selectedVal={fiscalStatus} labelText={"Fiscal Year End Status"} classNameField={"flex max-md:justify-center max-md:ml-0 justify-end col-start-2 mr-1 "} />
        <FilterComponent optionsData={optionsReport} handleDropdown={handleReportAs} selectedVal={reportAs} labelText='Report as of' classNameField={"flex max-md:col-start-2 max-md:justify-center max-md:ml-0 col-start-3 :justify-start ml-1 "} />
      </div>
      <div className='flex gap-2 m-2 justify-end'>
        <button className='flex items-center  gap-2  bg-gray-200  p-2 rounded-lg border-2 border-gray-300'><FaPlay />Run Report</button>
        <button className='flex items-center  gap-2  bg-gray-200  p-2 rounded-lg border-2 border-gray-300 cursor-pointer' onClick={handleAllClear}><AiOutlineStop />Clear Search</button>
      </div>
    </>
    }
  </div>
  )
}
