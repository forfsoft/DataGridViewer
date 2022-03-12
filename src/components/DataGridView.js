import React, { useState, useEffect, useCallback } from 'react';
import {DataGridPro} from '@mui/x-data-grid-pro';
import {DataGrid, koKR} from '@mui/x-data-grid';
import jsonData1 from './../testData#1.json'
import {CreateColumnDef, CreateRows} from './DataGridUtil'


const DataGridView = () => {
  const [gridColumnDef, setGridColumnDef] = useState([]);
  const [gridRows, setGridRows] = useState([]);

  useEffect(() => {
    var newColumns = CreateColumnDef(jsonData1);
    setGridColumnDef(newColumns);
    var newRows = CreateRows(jsonData1);
    setGridRows(newRows);
  }, [])

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <DataGrid 
        rows={gridRows} 
        columns={gridColumnDef}
        // density="compact" 
        localeText={koKR.components.MuiDataGrid.defaultProps.localeText} />
    </div>
  );
}
export default DataGridView;