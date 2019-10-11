import React, {useState, useEffect} from 'react'

require('intersection-observer');
import './style.css'
import Layout from '../src/components/Layout/Layout'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from '../src/components/UI/Spinner/Spinner'

const Look = React.lazy(() => import('../src/components/Looks/Look'))


const Home = () => {
  const [json, setJson] = useState([])
  const [loading, setLoading] = useState(true)
  const [outputed, setOutputed] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [limit, setLimit] = useState(6)

  useEffect(() => { 
        const fetchData = () => { 
        fetch('https://the-v-lust.firebaseio.com/looks.json')
        .then(response => {
          return response.json()
        })
        .then(data => { 
          if(data === null) {
            setLoading(false)
          }
          if (data){
          let dataJson = Object.entries(data)
          let shuffled = dataJson    
          .map((a) => ({sort: Math.random(), value: a}))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value)
          let storesInfo = []
          if(shuffled.length !== 0 || shuffled !== null) {
            for (let i = 0; i < shuffled.length; i++) {
              storesInfo.push([shuffled[i][0],shuffled[i][1].name, shuffled[i][1].email, shuffled[i][1].url, shuffled[i][1].imageUrl])
            }
          }
          setJson(storesInfo)
          outputData(storesInfo)
          setLoading(false)
        }})
        .catch(err => {
          console.log(err)
          setLoading(false)
        })
    }
    fetchData()

  },[])

    let data = []


    const outputData = (storesInfo) => {
      if (storesInfo.length > 0) {
        if (outputed.length === 0) {
          data = storesInfo.slice(0 , limit)
          setOutputed(data)
          
          if (data.length >= storesInfo.length) {
            setHasMore(false)
          }
        }
      } 
    }

    const fetchData = () => {
        let oldLimit = limit
        let partialArr = json.slice(oldLimit, limit+3)
        setOutputed(outputed.concat(partialArr))
        setLimit(limit+3)
        if (json.length <= outputed.length + partialArr.length) {
          
          setHasMore(false)
        }
    }

    console.log('hasMOre?:', hasMore)

    let looks =  (    
      <Spinner />
    )

    if(loading === false && json.length === 0) {
      looks = (      
        <div style={{position: "relative", verticalAlign: "middle"}} >
        <p style={{textAlign: "center", width: '100%', marginTop: "30%"}}>NO LOOKS SUBMITTED YET! CHECK LATER OR </p>
        <Link href='/submit'><a style={{cursor: 'pointer', textDecoration: 'underline', textAlign: 'center', display:'block'}}>SUBMIT YOUR LOOK!</a></Link>
        </div>
      )
    }
    if (json.length > 0) {
      looks = (
        <div>
      <InfiniteScroll
      dataLength={outputed.length}
      next={fetchData}
      hasMore={hasMore}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>YOU HAVE SEEN IT ALL! <br/> IT'S TIME TO CHOOSE!</b>
        </p>
      }>
        <div className="Looks">
        {outputed.map(look => {
          return (<Look 
            key={look[0]}
            id={look[0]}
            name={look[1]}
            email={look[2]}
            url={look[3]}
            image={look[4]}
          />)
        } )} 
        </div>     
        </InfiniteScroll>
        </div>
        )
    }

  return(
    <Layout>
      <p className="intro">VOTE FOR YOUR FAVORITE LOOK!</p>
         {looks}
    </Layout>

)}

export default Home