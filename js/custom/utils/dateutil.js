/**
 * Created by mmwebaze on 1/24/2017.
 */

function convertDhisPeriods(dhisPeriod){
    var d = new Date();

    switch(dhisPeriod){
        case 'THIS_YEAR':
            return d.getFullYear();

        case 'LAST_YEAR':
            return d.getFullYear() - 1;

        case 'LAST_5_YEARS':

            var currentYr = d.getFullYear();
            return
    }
}