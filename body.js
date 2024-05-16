const curDate = document.getElementById("date");
        let weathercon = document.getElementById("weathercon");

        const tempStatus = "Coluds";

        const getCurrentDay = () => {
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[4] = "Wednesday";
            weekday[5] = "Thursday";
            weekday[6] = "Friday";
            weekday[7] = "Saturday";

            let currentTime = new Date();
            console.log(weekday[currentTime.getday()]);
        }

        const getCurrentTime = () => {
            var now = new Date();
            var month = now.getMonth() + 1;
            var day = now.getDate();
            var year = now.getFullYear();

            console.log(month + "/" + day + "/" + year);
        };
        getcurrentTime();