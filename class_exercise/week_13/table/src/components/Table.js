export default function Table({ data, config, keyFn }) {

  const renderedHeader = config.map((col)=> {
    return <th key={col.label}>{col.label}</th>
  })

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((col) => {
      return <td key={col.label} className='p-8'>{col.render(rowData)}</td>
    })

    return (
      // <tr key={veg.name} className="border-b border-slate-200">
      //   {/* <td className="p-3">{veg.name}</td> */}
      //   <td className="p-3">{config[0].render(veg)}</td>
      //   <td className="p-3">
      //     {/* <div className={`p-3 m-2 ${veg.color}`}></div> */}
      //     {config[1].render(veg)}
      //   </td>
      //   {/* <td className="p-3">{veg.count}</td> */}
      //   <td className="p-3">{config[2].render(veg)}</td>
      // </tr>
      
      <tr key={keyFn(rowData)} className="border-b border-slate-200">
        {renderedCells}
      </tr>
    )
  })
  
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2 border-slate-500">
          {/* <th>Produce</th>
          <th>Color</th>
          <th>Count</th> */}
          
          {renderedHeader}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  )
}
