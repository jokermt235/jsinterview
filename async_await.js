const getData =()=>Promise.resolve({data : [1,2,3]});


const getRecords = async()=>{
    const products = await getData();
    console.log(products);
}

getRecords();
