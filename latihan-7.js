for (x = 0; x < 9; x++) {
    for (y = 0; y < 9; y++){
        if (9 - x - 1 == y) {
            document.write('+ &nbsp')
        } else {
            document.write('- &nbsp',' ')
        }
        
    }
    document.write('<br>')
}