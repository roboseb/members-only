# Members Only

Members only project for the Odin Project.

---Features---

-Chatroom app made with NODE.js, express, and Mongodb

-Layout mimicking discord for main page.

-Sign up, sign in, sign out, and apply for membership!

-Non-members have most info redacted in messages.

-Customized mobile layout also mimicking dicord's mobile app

-Sentient AI that will break the app if you make her mad

-Lots of different triggers for "AI" caused glitching. Most buttons that seem to do nothng are actually slowly breaking the app.

-Me, admin, can delete messages.

-Mia will also delete messages (for real, permanently) if you upset her enough

-Membership page with heavily customized passcode entry

-Membership page is actually a puzzle, with all info needed to solve it on the page. The sticky note contains the key. (But what part of it?)

-Read the devlog if you want more hints, but the apply button will actually give you hints as well. Entering the wrong code will display a random message. Some of them are unrelated to the puzzle. Some are related to Hotline Miami. Some are related to Danganronpa. Some are related to the Zero Escape series. One of these sets of references is a red herring...

---Devlog---

September 16th, 2022

    Just some basic setup work today. Obviously, making a full express app is more setup than using create-react-app, but still a lot better than setting up everything by hand with just webpack. Even making and connecting to mongoDB is not that bad.

September 17th, 2022

    Hoping I can get all the actual sign in/validation/encryption/layout working today. If I can, I can probably add all the fun stuff within a day or two.

    Authentication shit is done! Easy peasy with the TOP page and a little stackoverflow. Now for some message DB stuff.

September 18th, 2022

    Yesterday was pretty productive layout-wise. Found a new site for when I need more specific icons than what feathericons has. I've decided to use a dingbat face font for generating user icons, as that seems to be the simplest way, and the dingbat font I found is pretty cute. Man I gotta shit.

    Fucking I key stopped working on my mechanical keyboard. Luckily I have a basic old one that I was using before. Might even be able to get a replacement from Amazon/the manufacturer, but not sure how long that'll take. Technically, it was a keyboard/mouse combo, so it would be dope if they sent me a full set of both. For the time being, might take some time to readjust to this keyboard.

September 19th, 2022

    Sianvar has only released two albums and somehow they're both the greatest album ever made.

    I'd like to be done with this in a day, but it would be totally reasonably to also spend tomorrow adding more features and cleaning it up a little. Just gotta remember not to waste my time making this an actual complete clone of discord, as that's not really the point.

    Layout is pretty much done. Might update the nav a little more. Sign-up and sign-in pages look decent, and even have some custom password eye thingies.

    Channels work, most of the styling is a solid clone of discord, and I somehow got everything to scroll properly.

September 20th, 2022

    Welcome to the totally reasonable second day. Even though I spent more time than usual cleaning some stuff up yesterday, there's still a decent amount of work to do, mainly all the glitchy Mia stuff. And the actual members only part. But that should be pretty trivial to implement. Just need to come up with something cool for it to do.

    Miiiiight be another other day.

September 21st, 2022

    Welcome to the next next day, with a totally unknown level of reasonability.

    Knock on wood, but there's really not a ton left to do, so it should be done today. The bulk of work should be adding a better mobile layout, and then really laying out the glitch "progression". Or deciding if it'll all just be specific triggers and doesn't really have an order. Not sure yet. Just need to move the glitches away from this littl debug panel to something else. I think I'll leave the button panel is as a secret somewhere though.

    Ow! (Splidao!) [I Like It, Though] by Hail the Sun is the song of the day. It's from their second album as far as I can see, so I checked out their first album, and the first song on there is conceptually cool but sounds like shit, so I will be looking at newer albums. As a side note, found out yesterday that this type of music is called post-hardcore. Much worse name than my suggestion, 'progunk'.

September 22nd, 2022

    Looks like I forgot to write up a devlog for this day, so hey, this is future Seb.

September 25th, 2022

    Obviously lost a couple of days. Got a little sick again, so decided to take it easy on the 23rd and then yesterday the family got together for a little lunch.

    As for what I was up to on the 22nd, I started working on the members only part, but decided as usual that just hiding usernames was stupid and pointless. So I threw together some code that will redact names of users and post dates, and then randomly redact words within a sentence. This sort of ends up making mad libs for some posts, which can be funny. At least it's slightly more interesting than the TOP outline. As for how you become a member, the outline again has a simple suggestion, of just having a secret code that you get to your users somehow. Looked at another guy's project, and he just put the codes in the README, which I guess is fair enough to get the practice in.

    Last day I was working on this though, I had the thought of having a puzzle to solve on the members page. At first I sketched some circles and tried to come up with something involving those, but couldn't come up with anything. Then I started thinking back to streams I've watched of the zero escape games, and specifically the Virtue's Last Reward where anagrams are painted all bloodily on a couple walls. Cool! An anagram! But I wanted my code input to be laid out like a number combination lock, because I hate myself and do not value my time. So I thought back to a different death game visual novel, where an early twist shows that similar bloodied text on a wall is actually inverted numbers. VLR does this too btw, and if you're wondering, yes, it's pretty stupid in both games. Anyway, why not combine these two? On the members page, there is now an anagram, which once solved can be inverted and then read numbers, giving you the code. The cool part is that the non-number text is eight characters long but the code is nine! That's as much as I'm giving away here in the README. Try it out yourself!

    Please click the button on the membership page a bunch. The animation is really cool and also shoutout to my boy iteration.

    Membership page is done and connected. 

    Succesfully wasted most of a day animating one element.

September 26th, 2022

    Today is mobile layout day. If I can get it done relatively quickly, I should have about four and a half days to do the next one, as a little challenge to myself and since I spent so much time on this guy.

    Oh, I also need to decide when Mia starts deleting messages.

    And the favicon.

--To-Do---

CANCEL(discord layout)-Fade in on scroll like fireship's video
DONE-Add in mia
DONE-random delete messages
CANCEL-eye scrolling animations
DONE-random change messages' data
DONE-little password eyeball
DONE-invalid login errors
DONE-basic layout
CANCEL-fake random user flags like, "banned", "suspended" etc.
DONE-screen bleeding effect (overly realistic)
DONE-message timestamp
DONE-UI elements start bugging out
DONE-randomly replace characters with dingbats(rakugaki)
DONE-fix dates
DONE-add actual channel funcitonality
DONE-mobile support
DONE-test/setup overflowing users
DONE-change my password
DONE-credits page somewhere
CANCEL-@ mention stylings
DONE-style signup/sign in
DONE- uncomment sendData
DONE- members only shit
CANCEL-every glitch adds a new layer to the background song
CANCEL-sound effects
DONE-fix apostrophes
-favicon
DONE-Setup glitches