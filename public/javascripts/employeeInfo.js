$(function () {
    let userData;
  
    const infoContainer = $("#infoContainer");
  
    const userProfileRenderer = () => {
      infoContainer.html(`
      <p>FirstName: ${userData.fristName}</p>
      <p>LastName: ${userData.lastName}</p>
      <p>Phone_Number: ${userData.phone_number}</p>
      <p>Gender: ${userData.Gender}</p>
      <p>Province: ${userData.Province}</p>
      <p>RoleInCompany: ${userData.RoleInCompany}</p>
      <p>nationalCode: ${userData.nationalCode}</p>
      <p>DateOfRegistration: ${userData.DateOfRegistration}</p>
      `);
    };
  
    const requestHandler = () => {
        const employeeId = location.pathname.split("/").at(3)
      $.ajax({
        type: "GET",
        url: `/employee/${employeeId}`,
        success: function (response) {
          userData = response;
          console.log(userData);
            userProfileRenderer();
        },
        error: function (err) {
          if (err.status === 404) {
            infoContainer.html(`
            <p>User not found</p>
            `);
          } else {
            alert("Something went wrong.");
          }
        },
      });
    };
  
    requestHandler();
  });

