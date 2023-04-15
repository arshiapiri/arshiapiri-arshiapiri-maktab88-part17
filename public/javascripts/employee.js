
const headers = ["fristName", "lastName", "gender", "phone_number", "province", "roleInCompany", "DateOfRegistration", "more information"];
$(() => {
    $.get("/employee/all", (data) => {
        tableCreator(headers, data);
    });
});

function tableCreator(headers, data) {
    $("table thead").append("<tr></tr>");
    for (const key in data[0]) {
        if (!headers.includes(key)) continue;
        $("table thead tr").append(`<th> ${key} </th>`);
    }
    $("table thead tr").append(`<th> More Info </th>`);

    data.forEach(function(employee) {
        const row = $("<tr></tr>");
        
        headers.forEach(function(header) {
            if (header === "more information") {
                row.append(`<td> <button class="btn btn-primary more-info-btn" data-id="${employee._id}">More Info </button>  </td>`);
            } else {
                row.append(`<td>${employee[header]}</td>`);
            }
        });

        $("table tbody").append(row);
    });
    $(".more-info-btn").click(function() {
        window.location.href = `/employee/pageInfo`;
    })
}