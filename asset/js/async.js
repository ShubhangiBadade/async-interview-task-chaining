let cl = console.log;
const sweetAlert = (msg, iconStr) => {
    Swal.fire({
        title: msg,
        timer: 2500,
        icon: 'iconstr'
    })
}
// hr call for interview
const hr = () => {
    //API call
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Mocking response
            let error = Math.random() >= .5 ? false : true;
            if (!error) {
                resolve('Candidate shortlisted for first interview')
            } else {
                reject('Looking for candidate!!')
            }
        }, 2500)
    })
}

// First interview call

const firstTechInt = () => {
    return new Promise((resolve, reject) => {
        //API Call
        setTimeout(() => {
            // Mocking response
            let error = Math.random >= .5 ? false : true;
            if (!error) {
                resolve('Candidate is very good in basics !!');
            } else {
                reject('Candidate is very poor in basics');
            }

        }, 2000)
    })
}

//Second interview call
const secondTechInt = () => {
    return new Promise((resolve, reject) => {
        //API Call
        setTimeout(() => {
            //Mocking response
            let error = Math.random >= .5 ? false : true;
            if(!error){
                resolve('candidate is good in coding!!!')
            }else{
                reject('Candidate is good in theory but poor in coding....')
            }
        },1500)
    })
}

// Management final interview call
const mngRound =()=>{
    return new Promise((resolve,reject)=>{
        //API Call
        setTimeout(()=>{
            //Mocking response
            let error = Math.random() >= .5 ? false : true ;
            if(!error){
                resolve('Candidate selected for required profile!!!!');
            }else{
                reject('Candidate rejected....')
            }
        },1000)
    })
}

//hr() // return promise


const init = async()=>{
    try{
        let res1 = await hr();
        let res2 = await firstTechInt();
        let res3 = await secondTechInt();
        let result = await mngRound();
        sweetAlert(result ,'sucess')
    }catch(err){
        sweetAlert(err ,'error')
    }
}
init();

    // promise consumed
    /*.then((res) => {
        cl(res);
        return firstTechInt() // returns promise
    })
    .then((res) => {
        cl(res);
        return secondTechInt(); // returns promise)
     }) 
     .then((res) => {
        cl(res);
        return mngRound(); // returns promise)
     }).then((res)=>cl(res))
    .catch((err) => { cl(err) }); */