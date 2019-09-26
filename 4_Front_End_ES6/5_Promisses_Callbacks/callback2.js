/*



*/

function LastName(name) {
    
    console.log(name + ' Franco');
}

function FullName(callbalck) {
    name = 'Thyago';
    callbalck(name);
}

FullName(LastName);