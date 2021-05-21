const convertNoteBTN = document.querySelector("#convertNote")

convertNoteBTN.addEventListener("click", function(){
	const beforeChangeNoteValue = document.getElementById("beforeChangeNote").value;
	const beforeChangeNoteBox = document.createElement('span');
	beforeChangeNoteBox.className += "hidden";
	beforeChangeNoteBox.innerHTML = beforeChangeNoteValue;
	document.body.append(beforeChangeNoteBox);

	var bookName = getBookName(document.querySelector("span #app"));

	document.getElementById("afterChangeNote").value = "# "+bookName;
}, false);


function getBookName(noteHtml){
	return document.querySelector("#page_reading_note_detail > article > div > div > h3 > a").innerText;
}