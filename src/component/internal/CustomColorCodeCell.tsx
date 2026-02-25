import type { GridCustomCellProps } from "@progress/kendo-react-grid";
import { useKendoContext } from "../../hooks/useKendoContext";
import type { ColumnConfig } from "../../models/grid.type";

export const CustomColorCodeCell = ({ props, columnData }: { props: GridCustomCellProps, columnData: ColumnConfig }) => {

    const { percentageToggle } = useKendoContext();
    const propsColAltValue = props.dataItem[props.field + "Alt" as keyof typeof props.dataItem];
    const available = !(props.dataItem.col2 > 6.5);
    const noBgr = {};
    const customBgr = {
        backgroundColor: columnData.bgColorBooleanTrue || "#008000", color: columnData.textColor || "black"   };

    const mergedStyle = {
        ...props.tdProps?.style,
        ...(columnData.field == "col2" ? (available ? noBgr : customBgr) : {})
    };

    return (
        <td {...props.tdProps} style={mergedStyle}>
            {columnData.field == "col1" ? (percentageToggle ? propsColAltValue : props.children as React.ReactElement) : props.children as React.ReactElement}
        </td>
    );
};
