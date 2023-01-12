let title = [];
let note = [];

function render(){
    let note = document.getElementById('notes-section');
    note.innerHTML = '';
    note.innerHTML =`
        <div class="notes">
            <div class="notes-title">Placeholder Title</div>
            <div class="notes-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt dolor
                veritatis! Porro distinctio aliquam commodi, soluta, quisquam veritatis, illo veniam ipsa nostrum nemo
                voluptatem odit accusamus vitae facere explicabo. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Alias modi fugit enim magni odit, explicabo sint ut perspiciatis temporibus qui maxime.
                Necessitatibus dolorem ipsum quibusdam deserunt molestias error cum nesciunt?</div>

            <div class="notes-footer">
                <img src="./img/bearbeitung.png">
                <img src="./img/mulleimer.png">
            </div>
        </div>
    `;

}