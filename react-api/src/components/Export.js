import React from 'react'
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const Export = ({ articles }) => {
  return (
      <ExcelFile filename="Articles" element={<button  type="submit" className="btn btn-lg btn-block btn-outline-primary">Export Data</button>}>
          <ExcelSheet data={articles} name="Articles">
              <ExcelColumn label="Article ID" value="id"/>
              <ExcelColumn label="Title" value="title"/>
              <ExcelColumn label="Friendly URL" value="friendlyUrlPath"/>
              <ExcelColumn label="Content" value="bodyContent"/>
              <ExcelColumn label="Create Date" numFmt="m/dd/yy H:MM:SS" value="dateCreated"/>
              <ExcelColumn label="Modified Date" numFmt="m/dd/yy H:MM:SS" value="dateModified"/>
          </ExcelSheet>
      </ExcelFile>

  )
};

export default Export