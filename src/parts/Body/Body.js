import BodyText from '../../components/Body/BodyText';
import BodyBackground from '../../components/Body/BodyBackground';
import BodyHowTo from '../../components/Body/BodyHowTo';
import { useState, useEffect } from 'react';
import './body.css';
import './buttonTransition.css';

function Body() {
  const [data, setData] = useState(null);

  useEffect(async () => {
    const response = await fetch(`https://singlestone-endless-api.herokuapp.com/steps/`);
    const json = await response.json();

    let editedData = [...json];
    
    editedData.sort((a, b) => {
      if(a.stepNumber < b.stepNumber)
        return -1;
      else 
        return 1;
    })

    editedData.map((d, i) => {
      return({
        id: d.id,
        stepNumber: d.stepNumber,
        versionContent: d.versionContent.sort((a, b) => {
          if(a.effectiveDate > b.effectiveDate)
            return -1;
          else 
            return 1;
        })
      })
    });

    setData(editedData);
  }, []);

  return(
    <div className="home-page-body">
      <BodyBackground  />
      <BodyText />
      <BodyHowTo data={data} />
    </div>
  )
}

export default Body;