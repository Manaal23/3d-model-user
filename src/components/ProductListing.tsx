import axios from 'axios';
import React, { MouseEventHandler, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment';

interface IProduct{
  modelId:number,
  name: string,
  description: string,
  features: string,
  glb_data:string,
  price: number,
  updated_ts:moment.MomentInput
}
function ProductListing() {
  const [product, setProduct] = useState <IProduct[]> ([])
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  
  }, [])

  const fetchProducts = async () => {
    const res = await axios({
      method:'get',
      url: `${process.env.REACT_APP_URL}/product/get-model-detail`
  });
  setProduct(res.data.data)
  }
  
  return (
    <>
    <div className="container d-flex justify-content-center" style={{ marginTop: "80px" }}>
    <div className="row">
    {
            product?.length ? product.map((i, index) => {
              return <div  key={index} className="col-lg-4 col-md-6">
              {/* <div className="card" style={{ height: '250px', width: '400px', margin}}> */}
              <div className="card" style={{ height: '250px', width: '400px', marginTop:'10px', position: 'relative'}}>
            {/* <div className='card-model'>
              <img src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA' />
          </div> */}
    <div className="card-body">
      <h5 className="card-title">{i?.name.length > 40 ? i?.name.slice(0,40)+'...' : i?.name}</h5>
      <p className="card-text">{i?.description.length > 200 ? i?.description.slice(0,200)+'...' : i?.description}</p>
      <p className="card-text"><small className="text-muted" style={{ position: 'absolute', bottom: '50px' }}>{moment(i?.updated_ts).fromNow(true)}</small></p>
      <button type="button" className="btn btn-primary btn-sm" onClick={() => navigate(`/product-detail/${i.modelId}`) as MouseEventHandler<HTMLButtonElement> | undefined} style={{ position: 'absolute', bottom: '10px' }}>View</button>
    </div>
  </div>
            {/* </div> */}
            </div>
            })
            :
            <h4>No products</h4>
          }
    </div>
  </div>
  </>
  
  )
}

export default ProductListing