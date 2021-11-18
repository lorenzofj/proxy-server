# Proxy Server

I'm learning what is a proxy server, what is it for, what are the pros and cons of and how to create one.

I've read articles and watched videos:

1. https://www.youtube.com/watch?v=KOibBdrdyY0
2. https://www.youtube.com/watch?v=5cPIukqXe5w
3. https://www.fortinet.com/resources/cyberglossary/proxy-server

In the middle of the third link I got stuck with a lot of terms I've usually heard but I really didn't knew them in depth like HTTP methods, CORS, COP. So I stopped reading that and started learning these concepts.

- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
- https://www.tutorialspoint.com/http/http_methods.htm

I've learned the basics of Node.js watching and reading these sources:

1. https://www.youtube.com/watch?v=RLtyhwFtXQA
2. https://www.educba.com/node-dot-js-commands/

Then I realized I needed to learn how to create and use an NoSQL database, so I chose MongoDB and started with the basics:

1. https://www.youtube.com/watch?v=SnqPyqRh4r4
2. https://www.youtube.com/watch?v=EE8ZTQxa0AM
3. https://www.w3schools.com/nodejs/nodejs_mongodb.asp

---

## NASA API Project

I decided to make a small project to apply what I learned in the past weeks. It consist on a simple web page that shows an image or video with a little explanation of them, provided by the NASA API. Also you can pick any date of your preference and see the image from that day. The frontend was made with an HTML hbs file, bootstrap, custom CSS and Javascript. The backend was made with Node.js using Express and Axios.

### In the project directory, you can run:

`npm start`

Runs the app in development mode.  
Open http://localhost:8080 to view it in the browser.  
You will alse see any lint errors in the console.

Lastly you will need to generate your own NASA api key [here](https://api.nasa.gov/ "NASA API") and paste it in imageOfTheDayNasaAPI.js like this:

```JavaScript
params: {
    date: date,
    api_key: 'YOUR_APIKEY'
}
```
