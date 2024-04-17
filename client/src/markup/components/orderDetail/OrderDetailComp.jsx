import React, { useEffect, useState } from 'react'
import orderServices from '../../../services/order.service'

const OrderDetailComp = () => {
    const id = window.location.pathname.split("/")[2]
    const [transactionId, setTransactionId] = useState(null)
    const [onlinePayementStatus, setOnlinePayementStatus] = useState(null)
    console.log(onlinePayementStatus)
    console.log(transactionId)
        useEffect(() => {
            const res = orderServices.getActiveOrderDetail(id).then((res) => {
                console.log(res.data)
                if (res.data[0].transaction_id) {
                  setTransactionId(res.data[0].transaction_id);
                }
            }).catch((err) => {
                console.log(err)
            })

            

            
        },[])

        useEffect(() => {
            
            if (transactionId) {
              const res = orderServices
                .verifyTransaction(transactionId)
                .then((res) => {
                  console.log(res.data.data);
                  setOnlinePayementStatus(res.data.data.status);
                })
                .catch((err) => {
                  console.log(err);
                });
            }

          
        },[transactionId])

        useEffect(() => {
            if (onlinePayementStatus) {
              const data = {
                payment_status: onlinePayementStatus,
              };
              const res = orderServices
                .updateTransactionStatus(id, data)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
        })

        useEffect(() => {
         setTimeout(() => {
           const res = orderServices
             .getUpdatedActiveOrders(id)
             .then((res) => {
               console.log(res.data);
             })
             .catch((err) => {
               console.log(err);
             });
         }, 2000);
        },[ onlinePayementStatus])
  return (
    <div>
        <div class="checkout-section mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8">
					<div class="checkout-accordion-wrap">
						<div class="accordion" id="accordionExample">
						  <div class="card single-accordion">
						    <div class="card-header" id="headingOne">
						      <h5 class="mb-0">
						        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
						          Order Summary
						        </button>
						      </h5>
						    </div>

						    <div >
						      <div class="">
						        <h1 class="text-black">Hello</h1>
						      </div>
						    </div>
						  </div>
						 
						</div>

					</div>
				</div>

				
			</div>
		</div>
	</div>
    </div>
  )
}

export default OrderDetailComp