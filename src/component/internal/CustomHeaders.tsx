import { HeaderThElement } from "@progress/kendo-react-data-tools";
import type { GridCustomHeaderCellProps } from "@progress/kendo-react-grid";

export const HeaderCustomCell = ({props, columnData}: {props: GridCustomHeaderCellProps, columnData?: any}) => {
    
    // preserve any existing styles applied by Kendo (sticky left/right for locks)
    const mergedStyle = {
        ...props.thProps?.style,
        height: "250px",
        background: columnData?.headerBackgroundColor || "#f4f0ec",
        color: columnData?.textColor || "black",
    };

    return (<>
        <HeaderThElement
            columnId={props.thProps?.columnId || ''}
            {...props.thProps}
            style={mergedStyle}
        >
            {props.children}
        </HeaderThElement>
    </>
    );
}