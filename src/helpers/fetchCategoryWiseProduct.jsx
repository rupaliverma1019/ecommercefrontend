// import SummaryApi from "../Common/Url"

import SummaryApi from "../Common/Url"

// const fetchCategoryWiseProduct = async(category)=>{
//     const response = await fetch(SummaryApi.categoryWiseProduct.url ,{
//         method : SummaryApi.categoryWiseProduct.method,
//         headers : {
//             "content-type" : "application/json"
//         },
//         body : JSON.stringify({
//             category : category
//         })
//     })
//     console.log("ruoalib", response)

//     const dataResponse = await response.json()

//     return dataResponse
// }

// export default fetchCategoryWiseProduct

const fetchCategoryWiseProduct = async(category) =>{
    const response = await fetch(SummaryApi.categoryWiseProduct.url , {
        method : SummaryApi.categoryWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    }) 
    const dataResponse = await response.json()
    return dataResponse;

}

export default fetchCategoryWiseProduct