const subject = 'javascript';
switch (subject) {
    case 'java':
        console.log('Good!')
        break;
    case 'css':
        console.log('Love!')
        break;
    case 'javascript':
        console.log('Love!')
        break;
    default:
        console.log('모든 case 절과 일치하지 않다면 해당 명령문 수행')
}

const subject2 = 'css';
switch (subject2) {
    case 'java':
        console.log('Good!')
        break;
    case 'css':
    case 'javascript':
        console.log('Love!')
        break;
    default:
        console.log('모든 case 절과 일치하지 않다면 해당 명령문 수행')
}