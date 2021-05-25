const convertNoteBTN = document.querySelector("#convertNote");
const noteHeaderSelector = "span #app #page_reading_note_detail > article > div.css-5f4m9y > div.css-4wuuch";
const noteContentSelector = "span #app #page_reading_note_detail > article > div.css-18obxw2 > ul.css-1jrt56o";

convertNoteBTN.addEventListener("click", function(){
	const beforeChangeNoteValue = document.getElementById("beforeChangeNote").value;
	const beforeChangeNoteBox = document.createElement('span');
	beforeChangeNoteBox.innerHTML = beforeChangeNoteValue;
	document.body.append(beforeChangeNoteBox);

	var bookName = getBookName(),
		bookWriter = getBookWriter();

	var noteHeader = bookName+" - "+bookWriter+"\n\n"+getBookNotes();

	var afterChangeNote = noteHeader;
	document.getElementById("afterChangeNote").value = afterChangeNote;
}, false);

function getNoteData(noteLayout, ele){
	let selectNoteLayout;

	switch(noteLayout) {
		case "header":
			selectNoteLayout = noteHeaderSelector;
			break;

		case "content":
			selectNoteLayout = noteContentSelector;
			break;

		default:
			alert("뭔거용");
			break;
	}

	return document.querySelectorAll(selectNoteLayout + " > " +ele);
}

/* 책 제목 */
function getBookName(){
	const bookNameSelector = "h3.css-bm6nz6 > a";
	return getNoteData("header", bookNameSelector)[0].innerText;
}
/* 책 저자 */
function getBookWriter(){
	const bookWriterSelector = "div.css-0 > span";

	const writerEle = getNoteData("header", bookWriterSelector),
		writerCnt = writerEle.length;
	if (writerCnt !== 1) {
		return writerEle[0].innerText+"저 / "+writerEle[1].innerText+"역 ";
	} else {
		return writerEle[0].innerText+"저 ";
	}
}
/* 책 노트 내용 */
function getBookNotes(){
	const bootNotesSelector = "li.css-vgz3sg",
		bookNotesYellowSelector = "p.css-135eg6y",
		bookNotesMemoSelector = "p.note_message";

	const notesEle = getNoteData("content", bootNotesSelector),
		noteCnt = notesEle.length;

	let notesText = "";
	notesEle.forEach(function(ele){
		const noteYellowEle = ele.querySelector(bookNotesYellowSelector);
		const noteMemoEle = ele.querySelector(bookNotesMemoSelector);

		if (noteYellowEle != null) {
			notesText = notesText+"●"+noteYellowEle.innerText+"\n";
		}
		if (noteMemoEle != null) {
			notesText = notesText+"    ●"+noteYellowEle.innerText+"\n";
		}
		notesText += "\n\n";
	});

	return notesText;
}