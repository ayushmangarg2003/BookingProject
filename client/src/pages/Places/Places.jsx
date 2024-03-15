import React, { useEffect, useState } from 'react'
import { BackendLink } from '../../components/App/App';
import axios from 'axios';
import PlaceCard from '../../components/PlaceCard/PlaceCard';
import "./Places.css"
import Shimmer from "../../components/Shimmer/Shimmer"
const Places = () => {
  const [placesArray, setPlacesArray] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${BackendLink}/places`).then(response => {
      const { data } = response;
      setPlacesArray(data)
      setLoading(false)
    });
  }, []);


  return <>
    {
      loading ? (<Shimmer />) : (
        <div className="places">
          {
            placesArray.map((item) => (
              <PlaceCard key={item._id} place={item} />
            ))
          }
        </div >
      )
    }
  </>
}

export default Places