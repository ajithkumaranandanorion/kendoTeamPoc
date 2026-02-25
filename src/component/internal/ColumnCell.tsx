
import { GridColumn } from "@progress/kendo-react-grid";
import type { ColumnConfig } from "../../models/grid.type";
import { HeaderCustomCell } from "./CustomHeaders";
import { HeaderExpandCollapseCell } from "./HeaderExpandCollapseCell";
import { useKendoContext } from "../../hooks/useKendoContext";
import CustomFilterCell from "./CustomFilterCell";
import { CustomColumnMenu } from "../CustomColumnMenu";
import { CustomColorCodeCell } from "./CustomColorCodeCell";



function columns({ baseColumns, processedData }: { baseColumns: ColumnConfig[], processedData: any }) {
    const cols: React.ReactNode[] = [];

    const { expandCollapse } = useKendoContext()

    baseColumns.forEach(col => {

        const isExpanded = col?.field != null && typeof col.field !== 'object' && Boolean(expandCollapse[String(col.field)]);

        return (
            col?.collapseInfo ?
                cols.push(
                    <GridColumn
                        key={col.field}
                        field={col.field}
                        width={col.width}
                        locked={col.locked}
                        cells={{ headerCell: HeaderExpandCollapseCell }}
                        children={[
                            // Base column as JSX
                            <GridColumn
                                field={col.field}
                                title={col.title}
                                width={col.width}
                                locked={col.locked}
                                headerClassName={col.blue ? 'blue-header' : col.orange ? "orange-header" : ""}
                                filter={
                                    typeof processedData?.[0]?.[col.field] === 'number'
                                        ? 'numeric'
                                        : 'text'
                                }
                                columnMenu={CustomColumnMenu}
                                cells={{
                                    filterCell: CustomFilterCell,
                                    headerCell: (props) => HeaderCustomCell({ props, columnData: col }),
                                    data: ((props) => CustomColorCodeCell({ props, columnData: col }))
                                }}
                            />,
                            // Dynamic columns as JSX                        
                            ...(isExpanded ?
                                (col?.collapseInfo ?? []).map((item, i) => (
                                    //Extra columns generated based on collapseInfo array
                                    <GridColumn
                                        key={`${i}`}
                                        width={item.width}
                                        id={String(item.id)}
                                        field={item?.field ?? `extra ${i}`}
                                        title={item?.title ?? `extra ${i}`}
                                        filter={
                                            typeof processedData?.[0]?.[col.field] === 'number'
                                                ? 'numeric'
                                                : 'text'
                                        }
                                        // cells={{
                                        //     headerCell: (props) => HeaderCustomCell({ props, columnData: col }),
                                        // }}
                                        locked={col.locked}
                                        columnMenu={CustomColumnMenu}
                                    />
                                )) : []
                            )
                        ]}
                    >
                    </GridColumn>
                ) : cols.push(
                    <GridColumn
                        key={col.field}
                        width={col.width}
                        locked={col.locked}
                        children={[
                            <GridColumn
                                key={col.field}
                                locked={col.locked}
                                field={col.field}
                                title={col.title}
                                width={col.width}
                                sortable
                                filter={
                                    typeof processedData?.[0]?.[col.field] === 'number'
                                        ? 'numeric'
                                        : 'text'
                                }

                                columnMenu={CustomColumnMenu}
                                cells={{
                                    headerCell: (props) => HeaderCustomCell({ props, columnData: col }),
                                    data: ((props) => CustomColorCodeCell({ props, columnData: col }))
                                }}
                            />]}
                    />
                ))
    })

    return cols;
};

export { columns }