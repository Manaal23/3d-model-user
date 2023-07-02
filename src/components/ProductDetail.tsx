import '@google/model-viewer';
import axios from 'axios';
import { useEffect, useState } from 'react';


import { useLocation, useParams } from 'react-router-dom';

declare global {

  namespace JSX {

    interface IntrinsicElements {

      'model-viewer': MyElementAttributes;

    }

    interface MyElementAttributes {

      src: string;
      class:string;
      poster?: string;

    }

  }

}

interface IProduct {
  name: string,
  description: string,
  features: string,
  glb_data:string,
  price: number
}

function ProductDetail() {

  const [product, setProduct] = useState <IProduct> ({
    name: '',
    description: '',
    features: '',
    glb_data:'',
    price: 0
  })

  const {id} : {id?:number} = useParams();
  useEffect(() => {
    fetchProductDetail(id!)
  },[])


  const fetchProductDetail = async (id?:number) => {
    const res = await axios({
      method:'get',
      url: `${process.env.REACT_APP_URL}/product/get-model-detail/${id}`
  });
  
  
  setProduct({
    ...res.data.data[0]
  })
    
  }

  return (
    <div style={{ height: '100vh' }}>
  <div className="d-flex mt-5 h-100">
    <div className="flex-fill p-2">
    <div className="col d-flex justify-content-center">
      <div className="text-center">
    <model-viewer class="model-viewer" src={product?.glb_data} shadow-intensity="1" camera-controls touch-action="pan-y"></model-viewer>
      </div>
    </div>
    </div>
    <div className="flex-fill p-2 mt-5">
        <div className='d-flex flex-column'>
            <div className='heading mb-5'>
            <h1 className='mb-5'>{product?.name}</h1>
            <h4>{product?.description}</h4>
            </div>
            <h3 className='mb-5'>
            Top <span><strong>Features</strong></span>
            </h3>
            <div className='features d-flex mb-3'>
                <div className='flex-fill p-2'>{product?.features}</div>
                {/* <div className='flex-fill p-2'>Manaal</div>
                <div className='flex-fill p-2'>Manaal</div> */}

            </div>
            <h3 className='mb-4'><strong>Price</strong></h3>
            <h4 className='mb-4'>{product?.price}</h4>
            <button type="button" className="btn btn-primary btn-lg ml-5 me-2">Buy now</button>
        </div>
    </div>
  </div>
</div>
  )
}

export default ProductDetail