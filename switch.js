let fruit = 'banana'

switch (fruit) {
    case 'apple':
        console.log('Apples are $0.90')
        break;
    case 'orange':
        console.log('Oranges are $0.75')
        break;
    case 'banana':
        console.log('Bananas are $0.30 per pound')
        break;
    case 'grape':
        console.log('Grapes are $1.00 per pound')
        break;
    case 'kiwi':
        console.log('Kiwis are $0.50 each')
        break;
    default:
        console.log(`I'm sorry, we are sold out of ${fruit}s`);
}