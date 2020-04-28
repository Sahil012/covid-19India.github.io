$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://api.covid19india.org/data.json", // Using our JSON file to serve results
        success: function(result) {
            console.log(result);
            for (var i = 0; i < 33; i++) {
                $('.confirmed' + i).text(result.statewise[i].confirmed);
                $('.active' + i).text(result.statewise[i].active);
                $('.death' + i).text(result.statewise[i].deaths);
                $('.recoverd' + i).text(result.statewise[i].recovered);
            }
            $('.tested' + 0).text(result.tested[result.tested.length - 1].totalsamplestested);
        }
    });
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "https://api.covid19india.org/state_test_data.json", // Using JSON file to serve results
        success: function(result) {
            console.log(result);
            var flag = 0
            for (var i = 0; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Andaman and Nicobar Islands") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 24).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 24).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Andhra Pradesh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 8).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 8).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Arunachal Pradesh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 31).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 31).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Assam") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 23).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 23).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Bihar") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 14).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 14).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Chandigarh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 20).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 20).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Chhattisgarh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 22).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 22).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Delhi") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 3).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 3).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Goa") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 28).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 28).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Gujarat") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 2).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 2).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Haryana") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 16).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 16).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Himachal Pradesh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 21).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 21).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Jammu and Kashmir") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 11).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 11).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Jharkhand") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 18).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 18).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Karnataka") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 12).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 12).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Kerala") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 13).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 13).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Ladakh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 25).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 25).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Madhya Pradesh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 5).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 5).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Maharashtra") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 1).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 1).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Meghalaya") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 26).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 26).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Mizoram") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 32).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 32).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Nagaland") {
                    console.log(result.states_tested_data[i - 1].state);
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Odisha") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 17).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 17).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Puducherry") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 27).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 27).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Punjab") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 15).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 15).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Rajasthan") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 4).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 4).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Tamil Nadu") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 7).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 7).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Telangana") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 9).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 9).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Tripura") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 30).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 30).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Uttar Pradesh") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 6).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 6).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            for (var i = flag; i < 3000; i++) {
                if (result.states_tested_data[i].state !== "Uttarakhand") {
                    console.log(result.states_tested_data[i - 1].state);
                    if (result.states_tested_data[i - 1].totaltested == '') {
                        $('.tested' + 19).text(result.states_tested_data[i - 2].totaltested);
                    } else {
                        $('.tested' + 19).text(result.states_tested_data[i - 1].totaltested);
                    }
                    flag = i;
                    break;
                }
            }
            if (result.states_tested_data[result.states_tested_data.length - 1].state == "West Bengal") {
                console.log(result.states_tested_data[result.states_tested_data.length - 1].state);
                $('.tested' + 10).text(result.states_tested_data[result.states_tested_data.length - 1].totaltested);
            }
        }
    });
});

for (var i = 0; i < 33; i++) {
    $('.confirmed' + i).css('color', 'red');
    $('.active' + i).css('color', 'blue');
    $('.death' + i).css('color', 'grey');
    $('.recoverd' + i).css('color', 'rgb(57, 174, 84)');
}