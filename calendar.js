
const buttonColor = "lightblue";
const currentDate = new Date();
const calendarWeeks = [
    new Date('2025-05-05'),
    new Date('2025-05-26'),
    new Date('2025-06-02'),
    new Date('2025-06-09'),
    new Date('2025-06-16'),
    new Date('2025-06-23'),
    new Date('2025-06-30'),
    new Date('2025-07-07'),
    new Date('2025-07-14'),
    new Date('2025-07-21'),
    new Date('2025-07-28'),
    new Date('2025-08-04'),
    new Date('2025-08-11')
];
const paragraphs = [
    "<h2>Street Food Siesta</h2><br><p>Syö herkullista katuruokaa Oulunkylässä!<br>Esillä on monta kojua joista löydät ruokalajeja ympäriltä maailmaa.",
    "<h2>otappa olunen</h2>",
    "<h2>otappa olunen</h2>",
    "<h2>otappa olunen</h2>",
    "<h2>otappa olunen</h2>",
    "<h2>Pulahda mereen!</h2><br><p>Uiminen kuuluu kesään!<br>Mustikkamaan uimarannalle pääset helposti Kulosaaren pysäkiltä.</p>",
    "<h2>otappa olunen</h2>",
    "<h2>otappa olunen</h2>",
    "<h2>otappa olunen</h2>",
    "<h2>otappa olunen</h2>",
    "<h2>Kallio Block Party 2025</h2><br><p>Lähde katsomaan kun koko Kallio meukkaa!<br> Kadut täyttyvät musiikista ja jatkuvat iltaan asti!",
    "<h2>otappa olunen</h2>",
    "<h2>otappa olunen</h2>"
]
const buttons = document.getElementsByClassName('button');

for (i = 0; i < buttons.length; i++) {
    if (calendarWeeks[buttons[i].id] <= currentDate){
        document.getElementById(buttons[i].id).style.backgroundColor = buttonColor;
    }
}

function enlarge(id) {
    if (calendarWeeks[id] <= currentDate){
        let interval = null;
        let buttonscale = 1;
        clearInterval(interval);
        interval = setInterval(frame, 5)
            function frame() {
                if (buttonscale >= 1.3) {
                    clearInterval(interval)
                }
                else {
                    buttonscale += 0.02;
                    document.getElementById(id).style.scale = buttonscale;
                }
            }
        
    }
}

function shrink(id) {
    if (calendarWeeks[id] <= currentDate){
        let interval = null;
        let buttonscale = 1.3;
        clearInterval(interval);
        interval = setInterval(frame, 5)
            function frame() {
                if (buttonscale <= 1) {
                    clearInterval(interval)
                }
                else {
                    buttonscale -= 0.02;
                    document.getElementById(id).style.scale = buttonscale;
                }
            }
    }
}

function openSesame(id) {
    if (calendarWeeks[id] <= currentDate){
        let interval = null;
        let colorfade = 0;
        let red = 113;
        let green = 146;
        let blue = 170;
        let opacity = 0;
        let padding = 50;
        document.getElementById(id).style.backgroundColor =  "rgb(" + red + "," + green + "," +blue +")";
        clearInterval(interval);
        interval = setInterval(frame, 15)
            function frame() {
                if (colorfade >= 50) {
                    clearInterval(interval)
                }
                else {
                    colorfade ++;
                    opacity += 0.02;
                    padding --;
                    red ++;
                    green ++;
                    blue ++;
                    document.getElementById(id).style.backgroundColor = "rgb(" + red + "," + green + "," +blue +")";
                    document.getElementById("content").style.opacity = opacity;
                    document.getElementById("content2").style.opacity = opacity;
                    document.getElementById("content").style.paddingTop = padding + "px";
                    document.getElementById("content2").style.paddingTop = padding + "px";
                    document.getElementById("showtext").innerHTML = paragraphs[id];
                    document.getElementById("showpic").innerHTML = "<img src=\"images/" + id + ".jpg\" width=\"530\"></img>\"";
                }
            } 
    }

}
