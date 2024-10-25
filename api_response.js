

async function test() {

    async function getApiData() {
    
        let url = "https://api.postalpincode.in/pincode/560045";
    
        let response = await fetch(url);
        console.log(response.json());
    
        return await response.json();
    }
    const responseVal = await getApiData();
    console.log(responseVal);
    let ans = [];
    const getState = responseVal[0].PostOffice;

    for( let i of getState){
        // stateArr['Pincode'] = i.Pincode;
        // stateArr['Name'] = i.Name;
        // stateArr['State'] = i.State;
        //Method 2
        stateList = {
            "pincode" : i.Pincode,
            "name" : i.Name,
            "state" : i.State,
        }
        ans.push(stateList)
    }

    console.log(ans);
    // const extract_response = JSON.stringify(responseVal);
}

test()



