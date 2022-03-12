export function CreateColumnDef(gridData){
    if (gridData === undefined) {
        console.log("gridData not found");
        return;
    }
    var columns = gridData["columns"]
    if (columns === undefined) {
        //console.log("columns not found");
        //return;
        columns = new Array();
    }
    var rows = gridData["rows"]
    if (rows === undefined) {
        //console.log("rows not found");
        //return;
        rows = new Array();
    }

    var columnsFromRows = new Set()
    for (var data of rows) {
        for (var element in data) {
            columnsFromRows.add(element)
        };
    };

    for (var column of columnsFromRows) {
        var targetColumn = undefined;
        for (var srcColumn of columns) {
            if (srcColumn["field"] == column) {
                targetColumn = srcColumn;
                break;
            }
        }

        if (undefined === targetColumn) {
            targetColumn = {}
            columns.push(targetColumn);
        }
        
        targetColumn["headerName"] = column;
        targetColumn["field"] = column;
        //targetColumn["width"] = 150;
    }
    return columns;
}

export function CreateRows(gridData){
    if (gridData === undefined) {
        console.log("gridData not found");
        return;
    }

    var rows = gridData["rows"]
    if (rows === undefined) {
        rows = new Array();
    }

    var rowCount = rows.length;
    for (var i = 0; i < rowCount; i++) {
        rows[i]["id"] = i;
    };
    return rows;
}