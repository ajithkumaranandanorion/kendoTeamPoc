import { HeaderThElement } from "@progress/kendo-react-data-tools";
import type { GridCustomHeaderCellProps } from "@progress/kendo-react-grid";
import { useKendoContext } from "../../hooks/useKendoContext";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';


export function HeaderExpandCollapseCell(props: GridCustomHeaderCellProps) {
    const { expandCollapse, setExpandCollapse } = useKendoContext();

    const handleClick = (e: string) => {

        setExpandCollapse((prev: any) => {
            return { ...prev, [e]: !prev[e] }
        })
    }

    return (
        <HeaderThElement columnId={props.thProps?.columnId || ''}   {...props.thProps} style={{
            cursor: "pointer",

        }} onClick={() => handleClick(props.field as any)}>
            {expandCollapse[props.field as any] ? <IndeterminateCheckBoxOutlinedIcon fontSize="medium" /> : <AddBoxOutlinedIcon fontSize="medium" />}

        </HeaderThElement>
    )
}