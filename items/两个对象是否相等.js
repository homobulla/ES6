
function eq(a,b) {
    // +0 -0 
    if(a === b) {
        return a !== 0 || 1 /a === 1 / b;
    }
    // NaN
    if(a !== a) {
        return b !== b;
    }
}