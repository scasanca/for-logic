for (let x = 1; x < 10; x++) {
    for (let y = 9; y > 0; y--) {
      if (y <= x) {
        document.write("+ &nbsp");
      } else {
        document.write("- &nbsp", ` `);
      }
    }
    document.write("<br>");
  }