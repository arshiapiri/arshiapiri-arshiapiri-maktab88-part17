$(() => {
    $.get("/employee/all", (data) => {
        data.forEach(element => {
            showEmployeeInfo(element._id);
        });
    });
});
function showEmployeeInfo(data) {
    const table = $("<table>").addClass("table");

    
    const thead = $("<thead>");
    const tr = $("<tr>");
    
    tr.append($("<th>").text("First Name"));
    tr.append($("<th>").text("Last Name"));
    tr.append($("<th>").text("Gender"));
    tr.append($("<th>").text("National Code"));
    tr.append($("<th>").text("Phone Number"));
    tr.append($("<th>").text("Province"));
    tr.append($("<th>").text("Role In Company"));
    tr.append($("<th>").text("Date Of Registration"));
    thead.append(tr);
    table.append(thead);

    // اضافه کردن ردیف‌های جدول با اطلاعات کاربر
    const tbody = $("<tbody>")
    table.append(tbody);

    // اضافه کردن جدول به بدنه صفحه
    $("body").append(table);
}