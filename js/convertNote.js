const convertNoteBTN = document.querySelector("#convertNote");
const noteContentSelector = "span #app #page_reading_note_detail > article > div.css-5f4m9y > div.css-4wuuch";

convertNoteBTN.addEventListener("click", function(){
	const beforeChangeNoteValue = document.getElementById("beforeChangeNote").value;
	const beforeChangeNoteBox = document.createElement('span');
	beforeChangeNoteBox.innerHTML = beforeChangeNoteValue;
	document.body.append(beforeChangeNoteBox);

	var bookName = getBookName(),
		bookWriter = getBookWriter();

	var noteHeader = bookName+" - "+bookWriter;

	var afterChangeNote = noteHeader;
	document.getElementById("afterChangeNote").value = afterChangeNote;
}, false);

function getNoteData(ele){
	
	console.log(noteContentSelector + " > " +ele + " --- ");
	console.log(document.querySelectorAll(noteContentSelector + " > " +ele));
	return document.querySelector(noteContentSelector + " > " +ele).innerText;
}

/* 책 제목 */
function getBookName(){
	const bookNameSelector = "h3.css-bm6nz6 > a";
	return getNoteData(bookNameSelector);
}
/* 책 저자 */
function getBookWriter(){
	const bookWriterSelector = "div.css-0 > span";

	const writerEle = document.querySelectorAll(noteContentSelector+" > "+bookWriterSelector),
		writerCnt = writerEle.length;
	if (writerCnt !== 1) {
		return writerEle[0]+" 저 / "+writerEle[1]+" 역 ";
	} else {
		return getNoteData(bookWriterSelector)+" 저 ";
	}
}
/* 책 번역자 */