var mainHeadline = "<img class='mainSticks' src='images/sticks.png' title='sticks'>"
        +"<h1 class = 'mainHeadline'><a class='mainHeadlineLink' href='index.html'>Drums - פורטל תופים</a></h1>"
        +"<img class='mainSticks' src='images/sticks.png' title='sticks' style='margin-right:5px;'>";

var submenu = "<ul id='submenu'>"
        + "<li><a href='drumkit1.html'>אקוסטית</a></li>"
        + "<li><a href='drumkit2.html'>אלקטרונית</a></li>"
        + "<li><a href='drumkit3.html'>אפריקאית</a></li>"
        + "<li><a href='drumkit4.html'>וירטואלית</a></li>"
        + "</ul>";

var submenuSide = "<ul id='submenuSide' >"
        + "<li><a href='drumkit1.html'>מערכת אקוסטית</a></li>"
        + "<li><a href='drumkit2.html'>מערכת אלקטרונית</a></li>"
        + "<li><a href='drumkit3.html'>מערכת אפריקאית</a></li>"
        + "<li><a href='drumkit4.html'>מערכת וירטואלית</a></li>"
        + "</ul>";

var submenu2 = "<ul id='submenu2'>"
        + "<li><a href='drums.html'>תופים</a></li>"
        + "<li><a href='cymbals.html'>מצילות</a></li>"
        + "<li><a href='otherdrums.html'>תוספות</a></li>"
        + "</ul>";


var submenuSide2 = "<ul id='submenuSide2'>"
        + "<li><a href='drums.html'>תופים</a></li>"
        + "<li><a href='cymbals.html'>מצילות</a></li>"
        + "<li><a href='otherdrums.html'>תוספות</a></li>"
        + "</ul>";
/*
var menu = "<ul id='menu'>"
        + "<li><a href='index.html'>דף הבית </a></li>"
        + "<li><a href='drums.html'>כלי הקשה</a><script>document.write(submenu2);</script></li>"
        + "<li><a href='drumkit1.html'>מערכות</a><script>document.write(submenu);</script></li>"
        + "<li><a href='drumlearn.html'>אימונים</a></li>"
        + "<li><a href='history.html'>היסטוריה</a></li>"
        + "<li><a href='gallery.html'>גלריה</a></li>"
        + "<li><a href='about.html'>אודות</a></li>"
        + "<li><a href='contact.html'>צור קשר</a></li>"
        + "</ul>";
*/
var menu = "<ul id='menu'>"
        + "<li><a href='index.html'>דף הבית <img src='images/icons/home.png' title='Home page' class='ic'></a></li>"
        + "<li><a href='drums.html'>כלי הקשה<img src='images/icons/d.png' title='Percussions page' class='ic' style='right: 3px;'></a><script>document.write(submenu2);</script></li>"
        + "<li><a href='drumkit1.html'>מערכות<img src='images/icons/s.png' title='Drum sets page' class='ic'></a><script>document.write(submenu);</script></li>"
        + "<li><a href='drumlearn.html'>אימונים<img src='images/icons/w.png' title='Learning drums page' class='ic'></a></li>"
        + "<li><a href='history.html'>היסטוריה<img src='images/icons/h.png' title='History page' class='ic'></a></li>"
        + "<li><a href='gallery.html'>גלריה<img src='images/icons/g.png' title='Gallery page' class='ic'></a></li>"
        + "<li><a href='about.html'>אודות<img src='images/icons/a.png' title='About page' class='ic'></a></li>"
        + "<li><a href='contact.html'>צור קשר<img src='images/icons/c.png' title='Contact page' class='ic'></a></li>"
        + "</ul>";

var logos = "<a href='index.html'><img class='logo' src='images/logos/drum.png' title='Homepage'></a>"
        + "<a href='https://www.facebook.com/yoav.saroya'><img class='logo' src='images/logos/facebookLogo.png' title='Facebook account'></a>"
        + "<a href='https://www.linkedin.com/in/yoav-saroya-973806116?trk=hp-identity-name'><img class='logo' src='images/logos/linkdinLogo.png' title='Linkedin account'></a>"
        + "<a href='https://plus.google.com/u/0/+YoavSaroya/about'><img class='logo' src='images/logos/googleLogo.png' title='GooglePlus account'></a>"
        + "<a href='mailto: stankovic100@gmail.com'><img class='logo' src='images/logos/gmailLogo.png' title='Gmail address'></a>";


var goUpButton = "<button class='goUp' onclick='goUp();'><img src='images/logos/arrowUp.png'>חזור למעלה</button>";

var buttons = "<button onclick=changeBackground('Blue-Drums-HD-Wallpaper.jpg'); class='chback'>רקע - ברירת המחדל</button>"
                    + "<button onclick=changeBackground('drumsWall.jpg'); class='chback'>רקע - מערכת תופים </button>"
                    + "<button onclick=changeBackground('amazingSet.jpg'); class='chback'>רקע - מערכת ענקית</button>"
                    + "<button onclick=changeBackground('drumsHD.jpg'); class='chback'>רקע - מערכת תופים יוקרתית</button>"
                    + "<button onclick=changeBackground('cymbalHD.jpg'); class='chback'>רקע - מצילה</button>";


function verify()
{
    changeBackground(localStorage.getItem("background"));
    page = window.location.href;	// current page url
    elements = document.getElementById("menu").getElementsByTagName("a");// Array of links
    if (page.substr(page.length-4,4) !== "html") page = elements[0].href;
    for (i = 0; i < elements.length; i++) 
    {
        if (page === elements[i].href)
        {
            elements[i].style.background = '#FA7E40';
            elements[i].style.fontWeight = 'bolder';
            break;
        }
    }

    if (document.getElementById("submenu") !== null)
    {
        innerelements = document.getElementById("submenu").getElementsByTagName("a");
        for (i = 0; i < innerelements.length; i++)
        {
            if (innerelements[i].href === page)
            {
                elements[5].style.background = '#FA7E40';         //marking the tab.
                elements[5].style.fontWeight = 'bolder';
                innerelements[i].style.background = '#F9D489';
                if (elements[5].href !== innerelements[i].href)
                    innerelements[i].style.fontWeight = 'normal';
                markSideBar("submenuSide");
                return;
            }
        }
    }

    if (document.getElementById("submenu2") !== null)
    {
        innerelements2 = document.getElementById("submenu2").getElementsByTagName("a");
        for (i = 0; i < innerelements2.length; i++)
        {
            if (innerelements2[i].href === page)
            {
                elements[1].style.background = '#FA7E40';         //marking the tab.
                elements[1].style.fontWeight = 'bolder';
                innerelements2[i].style.background = '#F9D489';
                if (elements[1].href !== innerelements2[i].href)
                    innerelements2[i].style.fontWeight = 'normal';
                markSideBar("submenuSide2");
                return;
            }
        }
    }
}


function markSideBar(listName)
{
    page = window.location.href;	// current page url
    elements = document.getElementById(listName).getElementsByTagName("a");// Array of links

    for (i = 0; i < elements.length; i++)
    {
        if (elements[i].href === page)
        {
            elements[i].style.background = '#003333';
            elements[i].style.color = 'white';
            return;
        }
    }
}

function showAnswer() {
    document.getElementById("answer").style.display = 'inline-block';
}
function resetTextField(CKEDITOR) {
    CKEDITOR.instances.editor1.setData('');
}
function goUp() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function changeBackground(background) {
    
    if (background === null) {
        background = "Blue-Drums-HD-Wallpaper.jpg";
    }
    localStorage.setItem("background", background);
    x = 'images/backgrounds/' + localStorage.getItem("background");
    document.body.style.backgroundImage = 'url(' + x + ')';
}