export const state = () => ({
    productList: [
        {
            id:1,
            image: 'image1.jpg',
            image1: 'image_1.jpg',
            image2: 'image__1.jpg',
            image3: 'image___1.jpg',
            toggle:false,
            title: 'sunflower knit pencil dress',
            size: ['XS','S','M','L','XL','XXL'],
            price: 2290,
            fitGuide: ['Hip-Friendly','Midriff-Friendly'],
            fabric: 'crease Free',
            dresslength: 'maxi',
            colour: 'Sunflower',
        },
        {
            id:2,
            image: 'image2.jpg',
            image1: 'image_2.jpg',
            image2: 'image__2.jpg',
            image3: 'image___2.jpg',
            toggle:false,
            title: 'blush midi dress',
            size: ['XS','S','M','L','XL','XXL'],
            price: 2740,
            fitGuide: ['Bust-Friendly','Hip-Friendly','Midriff-Friendly'],
            fabric: 'cotton',
            dresslength: 'maxi',
            colour: 'pink',
        },
        {
            id:3,
            image: 'image3.jpg',
            image1: 'image_3.jpg',
            image2: 'image__3.jpg',
            image3: 'image___3.jpg',
            toggle:false,
            title: 'forest pleated ruffle tie dress',
            size: ['XS','S','M','L','XL','XXL'],
            price: 2490,
            fitGuide: ['Bust-Friendly','Hip-Friendly','Midriff-Friendly'],
            fabric: 'crease Free',
            dresslength: 'maxi',
            colour: 'green',
        },
        {
            id:4,
            image: 'image4.jpg',
            image1: 'image_4.jpg',
            image2: 'image__4.jpg',
            image3: 'image___4.jpg',
            toggle:false,
            title: 'olive drop waist dress',
            size: ['XS','S','M','L','XL','XXL'],
            price: 1912,
            fitGuide: ['Hip-Friendly','Midriff-Friendly'],
            fabric: 'cotton',
            dresslength: 'midi',
            colour: 'olive',
        },
        {
            id:5,
            image: 'image5.jpg',
            image1: 'image_5.jpg',
            image2: 'image__5.jpg',
            image3: 'image___5.jpg',
            toggle:false,
            title: 'mustard off shoulder mini dress',
            size: ['S','M','L','XL'],
            price: 1490,
            fitGuide: ['Hip-Friendly','Midriff-Friendly'],
            fabric: 'cotton',
            dresslength: 'midi',
            colour: 'yellow',
        },
        {
            id:6,
            image: 'image6.jpg',
            image1: 'image_6.jpg',
            image2: 'image6.jpg',
            image3: 'image_6.jpg',
            toggle:false,
            title: 'mustard flutter sleeve skater dress',
            size: ['XS','S','M','L','XL','XXL'],
            price: 1832,
            fitGuide: ['Bust-Friendly','Hip-Friendly','Midriff-Friendly'],
            fabric: 'crease Free',
            dresslength: 'mini',
            colour: 'yellow',
        },
        {
            id:7,
            image: 'image7.jpg',
            image1: 'image_7.jpg',
            image2: 'image7.jpg',
            image3: 'image_7.jpg',
            toggle:false,
            title: 'denim belted playsuit',
            size: ['S','M','L','XL'],
            price: 1690,
            fitGuide: ['Bust-Friendly','Midriff-Friendly'],
            fabric: 'cotton',
            dresslength: 'mini',
            colour: 'blue',
        },
        {
            id:8,
            image: 'image8.jpg',
            image1: 'image_8.jpg',
            image2: 'image8.jpg',
            image3: 'image_8.jpg',
            toggle:false,
            title: 'midnight flutter sleeve skater dress',
            size: ['XS','S'],
            price: 1832,
            fitGuide: ['Bust-Friendly','Hip-Friendly','Midriff-Friendly'],
            fabric: 'crease Free',
            dresslength: 'mini',
            colour: 'Sunflower',
        },
        {
            id:9,
            image: 'image9.jpg',
            image1: 'image_9.jpg',
            image2: 'image9.jpg',
            image3: 'image_9.jpg',
            toggle:false,
            title: 'olive shift dress',
            size: ['S'],
            price: 1390,
            fitGuide: ['Bust-Friendly','Hip-Friendly','Midriff-Friendly'],
            fabric: 'cotton',
            dresslength: 'knee length',
            colour: 'green',
        },
        {
            id:10,
            image: 'image10.jpg',
            image1: 'image_10.jpg',
            image2: 'image10.jpg',
            image3: 'image_10.jpg',
            toggle:false,
            title: 'forest floral ruffle dress',
            size: ['S','M','L','XL'],
            price: 2190,
            fitGuide: ['Bust-Friendly','Hip-Friendly','Midriff-Friendly'],
            fabric: 'crease Free',
            dresslength: 'mini',
            colour: 'green',
        },
        {
            id:11,
            image: 'image11.jpg',
            image1: 'image_11.jpg',
            image2: 'image11.jpg',
            image3: 'image_11.jpg',
            toggle:false,
            title: 'black off shoulder mini dress',
            size: ['S','M','L','XL','XXL'],
            price: 1490,
            fitGuide: ['Hip-Friendly','Midriff-Friendly'],
            fabric: 'cotton',
            dresslength: 'mini',
            colour: 'black',
        },
        {
            id:12,
            image: 'image12.jpg',
            image1: 'image_12.jpg',
            image2: 'image12.jpg',
            image3: 'image_12.jpg',
            toggle:false,
            title: 'black ruffle dress',
            size: [,'S','L','XL'],
            price: 1290,
            fitGuide: ['Hip-Friendly'],
            fabric: 'cotton',
            dresslength: 'mini',
            colour: 'black',
        }
    ],
    filteredDetails : {
        fabric: [],
        fitGuide: [],
        dressLength: [],
        price: [],
    },
    fabrics: [
        {
            id:1,
            name: 'cotton',
            isChecked: false
        },
        {
            id:2,
            name: 'crease Free',
            isChecked: false
        }
    ],
    fitGuides: [
        {
            id:1,
            name: 'Bust-Friendly',
            isChecked: false
        },
        {
            id:2,
            name: 'Hip-Friendly',
            isChecked: false
        },
        {
            id:3,
            name: 'Midriff-Friendly',
            isChecked: false
        }
    ],
    dressLengths: [
        {
            id:1,
            name: 'mini',
            isChecked: false
        },
        {
            id:2,
            name: 'midi',
            isChecked: false
        },
    ],
    priceDetails: [
        {
            id:1,
            name: "Under \u20b91,000",
            isChecked: false,
            min: 0,
            max: 1000
        },
        {
            id:2,
            name: "\u20b91,000 - \u20b92,000",
            isChecked: false,
            min: 1000,
            max: 2000
        },
        {
            id:3,
            name: "\u20b92,000 - \u20b93,000",
            isChecked: false,
            min: 2000,
            max: 3000
        },
    ],
    filteredProduct: null,
});

export const mutations = {
    changeImageTrue(state,payload){
        const id = payload.id;
        const index = state.productList.findIndex(item => item.id === id);
        const existingProduct = state.productList.find( item => item.id === id);
        existingProduct.toggle = true;
        state.productList[index] = existingProduct;  
    },
    changeImageFalse(state,payload){
        const id = payload.id;
        const index = state.productList.findIndex(item => item.id === id);
        const existingProduct = state.productList.find( item => item.id === id);
        existingProduct.toggle = false;
        state.productList[index] = existingProduct;  
    },
    getFabric(state,payload){
        const event = payload.event;
        const value = payload.name;
        const fabric = { fabricName: value, status: event.target.checked };
        if(fabric.status === true){
            state.filteredDetails.fabric.push(fabric);
        }else{
            const index = state.filteredDetails.fabric.findIndex(fabric => fabric.fabricName === value);
            state.filteredDetails.fabric[index]=fabric;
            var filteredFabric = state.filteredDetails.fabric.filter(value => {
                if(value.status === true){
                    return value; 
                }
            })
            state.filteredDetails.fabric = filteredFabric;
        }
        const products = [];
        const fabricFilter = state.filteredDetails.fabric;  
        if(fabricFilter.length>0){
            fabricFilter.forEach(fab => {
                state.productList.forEach(product => {
                    if(product.fabric == fab.fabricName){
                        products.push(product);
                    }
                })
            });
            state.filteredProduct = products;
        }
        // console.log(state.filteredProduct);
    },
    getFitGuide(state,payload){
        const event = payload.event;
        const value = payload.name;
        const fitGuide = { fitGuideName: value, status: event.target.checked };
        if( fitGuide.status === true){
            state.filteredDetails.fitGuide.push(fitGuide);
        }else{
            const index = state.filteredDetails.fitGuide.findIndex(fitGuide => fitGuide.fitGuideName === value);
            state.filteredDetails.fitGuide[index]=fitGuide;
            var filteredfitGuide = state.filteredDetails.fitGuide.filter(value => {
                if(value.status === true){
                    return value; 
                }
            })
            state.filteredDetails.fitGuide = filteredfitGuide;
        }
        const products = [];
        const fitGuideFilter = state.filteredDetails.fitGuide;  
        if(fitGuideFilter.length>0){
            fitGuideFilter.forEach(fab => {
                state.productList.forEach(product => {
                    console.log(product.fitGuide);
                    if(product.fitGuide.includes(fab.fitGuideName)){
                        products.push(product);
                    }
                })
            });
            state.filteredProduct = products;
        }
    },
    getDressLength(state,payload){
        const event = payload.event;
        const value = payload.name;
        const dressLength = { dressLengthName: value, status: event.target.checked };
        if( dressLength.status === true){
            state.filteredDetails.dressLength.push(dressLength);
        }else{
            const index = state.filteredDetails.dressLength.findIndex(dressLength => dressLength.dressLengthName === value);
            state.filteredDetails.dressLength[index]=dressLength;
            var filtereddressLength = state.filteredDetails.dressLength.filter(value => {
                if(value.status === true){
                    return value; 
                }
            })
            state.filteredDetails.dressLength = filtereddressLength;
        }
        const products = [];
        const dresslengthFilter = state.filteredDetails.dressLength;  
        if(dresslengthFilter.length>0){
            dresslengthFilter.forEach(fab => {
                state.productList.forEach(product => {
                    if(product.dresslength == fab.dressLengthName){
                        products.push(product);
                    }
                })
            });
            state.filteredProduct = products;
        }
    },
    getPriceDetail(state,payload){
        const event = payload.event;
        const value = payload.name;
        const priceDetail = { priceDetailName: value, status: event.target.checked };
        if(priceDetail.status === true){
            state.filteredDetails.price.push(priceDetail);
        }else{
            const index = state.filteredDetails.price.findIndex(priceDetail => priceDetail.priceDetailName === value);
            state.filteredDetails.price[index]=priceDetail;
            var filteredpriceDetail = state.filteredDetails.price.filter(value => {
                if(value.status === true){
                    return value; 
                }
            })
            state.filteredDetails.price = filteredpriceDetail;
        }
        const products = [];
        const priceFilter = state.filteredDetails.price;  
        if(priceFilter.length>0){
            priceFilter.forEach(fab => {
                state.productList.forEach(product => {
                    if(fab.priceDetailName=="Under \u20b91,000" && product.price<1000){
                        products.push(product);
                    }
                    else if(fab.priceDetailName=="\u20b91,000 - \u20b92,000" && product.price>=1000 && product.price<2000){
                        products.push(product);
                    }
                    else if(fab.priceDetailName=="\u20b92,000 - \u20b93,000" && product.price>=2000 && product.price<=3000){
                        products.push(product);
                    }
                })
            });
            state.filteredProduct = products;
        }
    }
};

export const getters = {
    getProducts : (state) => {
        if(!state.filteredProduct){
            state.filteredProduct=state.productList;
        }
        return state.filteredProduct;
    },
    getFabrics:(state)=>{
        return state.fabrics;
    },
    getFitGuides:(state)=>{
        return state.fitGuides;
    },
    getDressLengths:(state)=>{
        return state.dressLengths;
    },
    getPriceDetails:(state)=>{
        return state.priceDetails;
    },
};

