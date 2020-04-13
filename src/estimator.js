
let data = {
    region: {
        name: "Africa",
        avgAge: 19.7,
        avgDailyIncomeInUSD: 5,
        avgDailyIncomePopulation: 0.71
    },
    periodType: "days",
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614
};
   
// Here I would have employed the IIFE Pattern and returned 
// my output as a closure so my functions can be reused; but
// but I will stick with the pattern you've layed out.
const covid19ImpactEstimator = ( data ) => {

    //  My computations go here:
    

    return {
        data: data, 
        impact: impact, 
        severeImpact: severeImpact 
    };      
};

export default covid19ImpactEstimator;
