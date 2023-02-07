for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++){
        if (y <= x) {
            document.write ('+ &nbsp');
        }else {
            document.write('- &nbsp', ' ');
        }
    }
    document.write('<br>')
}