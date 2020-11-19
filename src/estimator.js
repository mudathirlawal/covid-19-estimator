
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

// Applying destructuring:
let { 
    region, 
    periodType, 
    timeToElapse, 
    reportedCases, 
    population, 
    totalHospitalBeds 
} = data;

// Using the IIFE Pattern to return closures.
let covid19ImpactEstimator = (
    ( data ) => {
        const NO_OF_DAYS_IN_WEEK = 7;
        const NO_OF_DAYS_IN_MONTH = 30;
        const DOUBLING_INTERVAL = 3;
        let factor;
    
        const getFactor = _ => { 
            if ( periodType === "days" ) {
                return factor = Math.floor( timeToElapse / DOUBLING_INTERVAL );
            } else if ( periodType === "weeks" ) {
                timeToElapse = timeToElapse / NO_OF_DAYS_IN_WEEK;
                return factor = Math.floor( timeToElapse / DOUBLING_INTERVAL );
            } else if ( periodType === "months" ) {
                timeToElapse = timeToElapse / NO_OF_DAYS_IN_MONTH;
                return factor = Math.floor( timeToElapse / DOUBLING_INTERVAL );
            }
        };
            
        const impact = _ =>  {
            factor = getFactor();
            const currentlyInfected = reportedCases * 10;
            return { 
                currentlyInfected: currentlyInfected,
                infectionsByRequestedTime: currentlyInfected * ( 2 ** factor )
            };
        };
        const severeImpact = _ => {
            factor = getFactor(); 
            const currentlyInfected = reportedCases * 50;
            return {
                currentlyInfected: currentlyInfected,
                infectionsByRequestedTime: currentlyInfected * ( 2 ** factor )
            };
        };
    
        let estimation = {
            data: data, 
            impact: impact(), 
            severeImpact: severeImpact()
        };  
        return estimation;    
    }
)();

console.log( covid19ImpactEstimator );
export default covid19ImpactEstimator;
