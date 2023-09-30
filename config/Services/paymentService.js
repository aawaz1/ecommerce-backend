import  razorpay from "../razorpayClient.js"
import orderModels from "../../models/orderModels.js"

export const  createPaymentLink = async(orderId) => {
    try {
        const order = orderModels.findOrderbyId(orderId);
        const paymentLinkRequest = {
            amount : order.totalPrice*100,
            currency : "INR",
            customer : {
                name: order.user.firstName + "" + order.user.lastName,
                contact : order.user.mobile,
                email : order.user.email,


            },
            notify : {
                sms: true,
                email : true,

            },
            reminder_enable : true,
            callback_url :`http://localhost:3000/${orderId}`,
            callback_method : 'get',

        };
        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);

        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url;

        const resData = {
            paymentLinkId,
            payment_link_url

        }
        return resData
    } catch (error) {
        throw new Error(error.message)
        
    }
}

export const updatePaymentInformation = async(reqData) => {
    const paymentId = reqData.payment_id
    const orderId = reqData.order_id
    try {
        const order = await orderModels.findOrderbyId(orderId)
        const payment = await razorpay.payments.fetch(paymentId)

        if(payment.status == "captured"){
            order.paymentDetails.paymentId= paymentId;
            order.paymentDetails.status = "COMPLETED";
            order.orderStatus= "PLACED";

            await order.save()

        }

        const resData = {message:"Your Order is Placed " , success: true}

        return resData;
      

        
    } catch (error) {
        throw new Error(error.message)
        
    }
}


export default {updatePaymentInformation , createPaymentLink}