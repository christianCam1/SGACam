function export_table_to_excel(id, type, fn) {
	var wb = XLSX.utils.table_to_book(document.getElementById(id), {sheet:"Sheet JS"});
	var fname = fn+'.'+ type;
	XLSX.writeFile(wb, fname);
}
