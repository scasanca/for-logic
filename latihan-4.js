

for (let x = 1; x <= 9; x++){
    for (let y = 1; y <= 9; y++){
        if (x % 2 == 0) {
            document.write('+ ')
        } else {
            document.write('- &nbsp' )
        }
    }
    document.write('<br>')
}