import './TableData.css';

const TableData = () => {
  const handleRowHover = (e, entering) => {
    const cells = e.currentTarget.querySelectorAll('td');
    cells.forEach(td => {
      if (!td.classList.contains('group-label')) {
        td.style.backgroundColor = entering ? '#dceeff' : '';
      }
    });
  };

  return (
    <section className="table-section" id="data">
      <div className="section-title">
        <h2>Planetary Facts at a Glance</h2>
        <p>
          Below is a comparative table of major planets in our solar system. The data
          highlights key physical properties used by astronomers and researchers worldwide.
        </p>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th colSpan={2}></th>
              <th>Name</th>
              <th>Mass (10²⁴kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m³)</th>
              <th>Gravity (m/s²)</th>
            </tr>
          </thead>
          <tbody>
            {/* Terrestrial Planets */}
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td className="group-label" rowSpan={4} colSpan={2}>Terrestrial Planets</td>
              <td>Mercury</td>
              <td>0.330</td>
              <td>4,879</td>
              <td>5,427</td>
              <td>3.7</td>
            </tr>
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td>Venus</td>
              <td>4.87</td>
              <td>12,104</td>
              <td>5,243</td>
              <td>8.9</td>
            </tr>
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td>Earth</td>
              <td>5.97</td>
              <td>12,756</td>
              <td>5,514</td>
              <td>9.8</td>
            </tr>
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td>Mars</td>
              <td>0.642</td>
              <td>6,792</td>
              <td>3,933</td>
              <td>3.7</td>
            </tr>

            {/* Jovian — Gas Giants */}
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td className="group-label" rowSpan={4}>Jovian Planets</td>
              <td className="group-label" rowSpan={2}>Gas Giants</td>
              <td>Jupiter</td>
              <td>1,898</td>
              <td>142,984</td>
              <td>1,326</td>
              <td>23.1</td>
            </tr>
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td>Saturn</td>
              <td>568</td>
              <td>120,536</td>
              <td>687</td>
              <td>9.0</td>
            </tr>

            {/* Jovian — Ice Giants */}
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td className="group-label" rowSpan={2}>Ice Giants</td>
              <td>Uranus</td>
              <td>86.8</td>
              <td>51,118</td>
              <td>1,270</td>
              <td>8.7</td>
            </tr>
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td>Neptune</td>
              <td>102</td>
              <td>49,528</td>
              <td>1,638</td>
              <td>11.0</td>
            </tr>

            {/* Dwarf Planets */}
            <tr
              onMouseEnter={e => handleRowHover(e, true)}
              onMouseLeave={e => handleRowHover(e, false)}
            >
              <td className="group-label" colSpan={2}>Dwarf Planets</td>
              <td>Pluto</td>
              <td>0.0130</td>
              <td>2,376</td>
              <td>2,095</td>
              <td>0.7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TableData;