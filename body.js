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

            let getcurrentTime = new Date();
            console.log(weekday[currentTime.getday()]);
        }

        const getCurrentTime = () => {
            var months = [
                "Jan",
                "Feb",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "Sept",
                "Oct",
                "Nov",
                "Dec"
            ];
        
            var now = new Date();
            var month = months[now.getMonth() + 1];
            var date = now.getDate();
            var year = now.getFullYear();

            let hours = now.getHours();
            let mins = now.getMinutes();

            console.log(month + "/" + day + "/" + year);
        };
        getcurrentTime();