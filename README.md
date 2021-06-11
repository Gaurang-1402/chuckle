# chuckle

This was my submission for HackDartmouth 2021.

(disclaimer: any jokes cracked on the duration of this post are purely unintentional. This kid has spent the last 18 hours coding a humor app- side effects were inevitable)
## Inspiration
Before I start, here's a joke to crack you up:
"What do Alexander the Great and Winnie the Pooh have in common? Same middle name." (source: [Chuckle](https://chuckle-6o6km892y-gaurang-1402.vercel.app/))

As a young boy, I spent countless hours reading joke books titled, "101 school jokes," "500 animal jokes," "200 puns that make you sound intelligent" etc. I liked being the class clown and having smart comebacks. 

Joke books > text books 

From my experience, I believe that humor is a form of pattern recognition that can be improved by constant practice. It involves seeing everything around you from a new lens. Like your emotional quotient(EQ), your humor quotient(HQ)(yes I made that up) is also flexible. 

Chuckle is the new evolved version of joke books that enable you to improve your sense of humor. I seriously needed this(you'll see soon enough).

## What it does
Chuckle is an educational platform to learn clever jokes and improve your sense of humor. On Chuckle, users can find a dashboard that contains some of the cleverest jokes on the internet. Users can upvote or downvote jokes to identify what they find funny. Based on the upvote and downvote, the dashboard is reorganized to show the highest rated jokes at the top and the most downvoted jokes at the bottom. Moreover, the upvotes dynamically update emojis on the side to become more extreme (funny --> funnier --> funniest). And downvotes make the emojis angry.

If you've tired of your current selection of jokes, you can press the "Clear dashboard and get new jokes button" to be served some of the finest, funniest one liners on the world wide web. If your appetite for jokes is massive, the "additional jokes" button renders new jokes from the API onto the dashboard.

Whether you need a joke in your pickup lines, sprinkle some humor into your school/college performance, or want to straight up become a funnier person, Chuckle is your go-to application.

## How we built it
Chuckle is entirely built with React. Why? Because Chuckle is a Reaction(To judges, I apologise please don't grade me lower because of my jokes). To get the jokes, I used the [Icanhazdadjoke API](https://icanhazdadjoke.com/api#fetch-a-random-dad-joke). Within React, I used the UUID and axios libraries to make my life simpler.

I mainly used font awesome for the emojis and icons in the application. Moreover, the logo and much of the design work was done over Figma.

I didn't make a backend because I wanted to focus on my React skills. To makeup for this, I used the browser's local storage to ensure that the API doesn't fetch jokes already loaded in the dashboard. I also used codepen to for some of the animations. 

A major inspiration for this app came from [Colt Steele's course.](https://www.udemy.com/course/modern-react-bootcamp/)

Too much yap yap here's a joke: "What is the hardest part about sky diving? The ground"(source: https://chuckle-6o6km892y-gaurang-1402.vercel.app/)

## Challenges we ran into
Window local storage was particularly difficult for me. Imbedding it with the code I had already written was challenging. Additionally, I faced issues while displaying the loader, and loyal, and funny Chuckle users may spot some delays that need fixing.

I also spent a lot of time behind styling, and animations, which is not the best use of a Saturday evening.

Lastly, doing a solo hackathon can be challenging due to the multi faceted roles that you have to perform. I've only been coding in React since the past 3 months, so I had to learn a lot of concepts as I wrote code (yes I could have broken the sidebar into its own component- shut up).

## Accomplishments that we're proud of
I'm proud of the styles I used to build the web app.

Here's a joke on accomplishments: 
"What did the father tomato say to the baby tomato whilst on a family walk? Ketchup" (source: [Chuckle](https://chuckle-6o6km892y-gaurang-1402.vercel.app/))

## What we learned
React, Window local storage, CSS animations and a whole lot of other minor tech involved.

More importantly, here's another joke that I learned: What do you call a careful wolf? Aware wolf (source: [Chuckle](https://chuckle-6o6km892y-gaurang-1402.vercel.app/))

Honestly, spending so much time browsing through jokes brought back the funnier, younger Gaurang. 

## What's next for Chuckle
Chuckle is meant to be a personal humor app, so future features would be personal rather than social. Creating a backend with authentication, a database of stored jokes, and joke sharing functionality.  Making it more mobile-responsive would also be a priority. Topic based jokes would be helpful.

Integration of ML techniques to spot the user's sense of humor and make joke recommendations accordingly can be a viable route (because everything needs AI nowadays).

I can also add blockchain somehow. After the dogecoin price spike last week, I think blockchain and humor are correlated (quote me on this if you like).

Before we part, here's a last one: 
"Did you know the first French fries weren't actually cooked in France? They were cooked in Greece" (source: [Chuckle](https://chuckle-6o6km892y-gaurang-1402.vercel.app/))

If you read this post without laughing even once, congratulations, you get invited to visit [Chuckle](https://chuckle-6o6km892y-gaurang-1402.vercel.app/)


