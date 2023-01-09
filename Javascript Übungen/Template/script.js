function eingabe(){
    let eingabeName = document.getElementById('name').value;
    // let eingabeTest = document.getElementById('test1234').value;

    document.getElementById('hallo').innerHTML = `
        Hallo ${eingabeName};
    `;
}