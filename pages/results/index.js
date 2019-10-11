import React, {useState, useEffect} from 'react'

import Layout from '../../src/components/Layout/Layout'
import Spinner from '../../src/components/UI/Spinner/Spinner'

const WinnerLook = React.lazy(() => import('../../src/components/WinnerLook/WinnerLook'))

const Results = () => {
  const [looks, setLooks] = useState([])
  const [votes, setVotes] = useState([])


  useEffect(() => { async function fetchData() {
    const looksData = await fetch(`https://the-v-lust.firebaseio.com/looks.json`)
    const looksJson = await looksData.json()
    looksJson ? setLooks(Object.entries(looksJson)) : setVotes(null)
    
    const votesData = await fetch(`https://the-v-lust.firebaseio.com/votes.json`)
    const votesJson = await votesData.json()
    votesJson ? setVotes(Object.entries(votesJson)) : setVotes(null)

  } fetchData()
 }, []);

  let looksArr = []
  if (looks !== undefined && looks !== null && votes !== undefined && votes !== null) {
    for (let i = 0; i < looks.length; i++) {
      for (let j = 0; j < votes.length; j++) {
        if(votes[j][0] === looks[i][0]){
        looksArr.push([votes[j][1].votes, votes[j][0],looks[i][1].url, looks[i][1].imageUrl, looks[i][1].name])
    }}
    }
  }


looksArr=looksArr.sort(function(a,b){
  let retVal=0;
  if(a[0]!=b[0]) retVal=a[0]>b[0]?1:-1;
  else if(a[1]!=b[1]) retVal=a[1]>b[1]?1:-1;
  else if(a[2]!=b[2]) retVal=a[2]>b[2]?1:-1;
  return retVal
});

looksArr = looksArr.reverse().slice(0,10)

  let winner = (
    <div>
      <p className="WinnerLookTheme">MOST VOTED LOOKS</p>
      {looksArr.map(look => {
        return ( <WinnerLook
          key={look[1]}
          id={look[1]}
          url={look[2]}
          imageUrl={look[3]}
          votes={look[0]}
          name={look[4]}

        />)
      })}
    </div>   
  )

  if (votes === null) {
    winner = (
      <div style={{position: "relative", verticalAlign: "middle"}} >
      <p style={{textAlign: "center", width: '100%', marginTop: "30%"}}>NO LOOKS VOTED YET! </p>
      <a 
        href={('/')}
        style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'center', display:'block'}}>
          VOTE FOR YOUR FAVORITE LOOK!</a>
      </div>)
  }

  if (votes !== null && looksArr.length < 1) {
    winner = (
      <div>
        <Spinner />
      </div>
    )
  }

  return (
    <Layout>
      {winner}
    </Layout>
  )
}

export default Results