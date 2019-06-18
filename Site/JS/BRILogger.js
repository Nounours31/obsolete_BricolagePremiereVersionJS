"use strict";


class BRILogger {

constructor() {
  this.containerDiv = null;
  this.tabDiv = null;
  this.logDiv = null;
  this.visible = true;     // flag for visibility
  this.opened = false;     // flag for toggle on/off
  this.enabled = true;     // does not accept log messages any more if it is false
  this.logHeight = 215;    // 204 + 2*padding + border-top
  this.tabHeight = 20;
  // for animation
  this.animTime = 0;
  this.animDuration = 200; // ms
  this.animFrameTime = 16;  // ms


  // avoid redundant call
  if (this.containerDiv)
    return true;

  // check if DOM is ready
  if (!document || !document.createElement || !document.body || !document.body.appendChild)
    return false;

  // constants
  this.CONTAINER_DIV = "loggerContainer";
  this.TAB_DIV = "loggerTab";
  this.LOG_DIV = "logger";
  this.Z_INDEX = 9999;

  // create logger DOM element
  containerDiv = document.getElementById(CONTAINER_DIV);
  if (!containerDiv) {
    // container
    containerDiv = document.createElement("div");
    containerDiv.id = CONTAINER_DIV;
    containerDiv.setAttribute("style", "width:100%; " +
      "margin:0; " +
      "padding:0; " +
      "text-align:left; " +
      "box-sizing:border-box; " +
      "position:fixed; " +
      "left:0; " +
      "z-index:" + Z_INDEX + "; " +
      "bottom:" + (-logHeight) + "px; ");  /* hide it initially */

    // tab
    tabDiv = document.createElement("div");
    tabDiv.id = TAB_DIV;
    tabDiv.appendChild(document.createTextNode("LOG"));
    tabDiv.setAttribute("style", "width:40px; " +
      "box-sizing:border-box; " +
      "overflow:hidden; " +
      "font:bold 10px verdana,helvetica,sans-serif; " +
      "line-height:" + (tabHeight - 1) + "px; " +  /* subtract top-border */
      "color:#fff; " +
      "position:absolute; " +
      "left:20px; " +
      "top:" + -tabHeight + "px; " +
      "margin:0; padding:0; " +
      "text-align:center; " +
      "border:1px solid #aaa; " +
      "border-bottom:none; " +
      /*"background:#333; " + */
      "background:rgba(0,0,0,0.8); " +
      "border-top-right-radius:8px; " +
      "border-top-left-radius:8px; ");
    // add mouse event handlers
    tabDiv.onmouseover = function () {
      this.style.cursor = "pointer";
      this.style.textShadow = "0 0 1px #fff, 0 0 2px #0f0, 0 0 6px #0f0";
    };
    tabDiv.onmouseout = function () {
      this.style.cursor = "auto";
      this.style.textShadow = "none";
    };
    tabDiv.onclick = function () {
      Logger.toggle();
      this.style.textShadow = "none";
    };

    // log message
    logDiv = document.createElement("div");
    logDiv.id = LOG_DIV;
    logDiv.setAttribute("style", "font:12px monospace; " +
      "height: " + logHeight + "px; " +
      "box-sizing:border-box; " +
      "color:#fff; " +
      "overflow-x:hidden; " +
      "overflow-y:scroll; " +
      "visibility:hidden; " +
      "position:relative; " +
      "bottom:0px; " +
      "margin:0px; " +
      "padding:5px; " +
      /*"background:#333; " + */
      "background:rgba(0, 0, 0, 0.8); " +
      "border-top:1px solid #aaa; ");

    // style for log message
    let span = document.createElement("span");  // for coloring text
    span.style.color = "#afa";
    span.style.fontWeight = "bold";

    // the first message in log
    let msg = "===== Log Started at " +
      getDate() + ", " + getTime() + ", " +
      "(Logger version " + version + ") " +
      "=====";

    span.appendChild(document.createTextNode(msg));
    logDiv.appendChild(span);
    logDiv.appendChild(document.createElement("br"));   // blank line
    logDiv.appendChild(document.createElement("br"));   // blank line

    // add divs to document
    containerDiv.appendChild(tabDiv);
    containerDiv.appendChild(logDiv);
    document.body.appendChild(containerDiv);
  }
  return true;
}

log(msg) {
  if (arguments.length == 0)
    Logger.print(""); // print a blank line
  else
    Logger.print(msg);
}



///////////////////////////////////////////////////////////////////////////
// get time and date as string with a trailing space
getTime  () {
  let now = new Date();
  let hour = "0" + now.getHours();
  hour = hour.substring(hour.length - 2);
  let minute = "0" + now.getMinutes();
  minute = minute.substring(minute.length - 2);
  let second = "0" + now.getSeconds();
  second = second.substring(second.length - 2);
  return hour + ":" + minute + ":" + second;
}
getDate  () {
  let now = new Date();
  let year = "" + now.getFullYear();
  let month = "0" + (now.getMonth() + 1);
  month = month.substring(month.length - 2);
  let date = "0" + now.getDate();
  date = date.substring(date.length - 2);
  return year + "-" + month + "-" + date;
}
///////////////////////////////////////////////////////////////////////////
// return available requestAnimationFrame(), otherwise, fallback to setTimeOut
getRequestAnimationFrameFunction () {
  let requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.webkitRequestAnimationFrame;
  if (requestAnimationFrame)
    return function (callback) { return requestAnimationFrame(callback); };
  else
    return function (callback) { return setTimeout(callback, 16); };
}



///////////////////////////////////////////////////////////////////////////
// public members
///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////
  // print log message to logDiv
  print (msg) {
    // ignore message if it is disabled
    if (!enabled)
      return;

    // check if this object is initialized
    if (!containerDiv) {
      let ready = this.init();
      if (!ready)
        return;
    }

    let msgDefined = true;

    // convert non-string type to string
    if (typeof msg == "undefined")       // print "undefined" if param is not defined
    {
      msg = "undefined";
      msgDefined = false;
    }
    else if (typeof msg == "function")   // print "function" if param is function ptr
    {
      msg = "function";
      msgDefined = false;
    }
    else if (msg === null)               // print "null" if param has null value
    {
      msg = "null";
      msgDefined = false;
    }
    else {
      if (msg instanceof Array)        // print array elements if param is array object
      {
        msg = this.arrayToString(msg);
      }
      else if (msg instanceof Object)  // print "object" if param is object type
      {
        msg = "object";
        msgDefined = false;
      }
      else {
        msg += ""; // for other types
      }
    }

    let lines = msg.split(/\r\n|\r|\n/);
    for (let i = 0, c = lines.length; i < c; ++i) {
      // format time and put the text node to inline element
      let timeDiv = document.createElement("div");            // color for time
      timeDiv.setAttribute("style", "color:#999;" +
        "float:left;");

      let timeNode = document.createTextNode(getTime() + "\u00a0");
      timeDiv.appendChild(timeNode);

      // create message span
      let msgDiv = document.createElement("div");
      msgDiv.setAttribute("style", "word-wrap:break-word;" +  // wrap msg
        "margin-left:6.0em;");     // margin-left = 9 * ?
      if (!msgDefined)
        msgDiv.style.color = "#afa"; // override color if msg is not defined

      // put message into a text node
      let line = lines[i].replace(/ /g, "\u00a0");
      let msgNode = document.createTextNode(line);
      msgDiv.appendChild(msgNode);

      // new line div with clearing css float property
      let newLineDiv = document.createElement("div");
      newLineDiv.setAttribute("style", "clear:both;");

      logDiv.appendChild(timeDiv);            // add time
      logDiv.appendChild(msgDiv);             // add message
      logDiv.appendChild(newLineDiv);         // add message

      logDiv.scrollTop = logDiv.scrollHeight; // scroll to last line
    }
  }
  ///////////////////////////////////////////////////////////////////////
  // slide log container up and down
  toggle () {
    if (opened)  // if opened, close the window
      this.close();
    else        // if closed, open the window
      this.open();
  }
  open () {
    if (!this.init()) return;
    if (!visible) return;
    if (opened) return;

    logDiv.style.visibility = "visible";
    animTime = Date.now();
    let requestAnimationFrame = getRequestAnimationFrameFunction();
    requestAnimationFrame(slideUp);
    function slideUp() {
      let duration = Date.now() - animTime;
      if (duration >= animDuration) {
        containerDiv.style.bottom = 0;
        opened = true;
        return;
      }
      let y = Math.round(-logHeight * (1 - 0.5 * (1 - Math.cos(Math.PI * duration / animDuration))));
      containerDiv.style.bottom = "" + y + "px";
      requestAnimationFrame(slideUp);
    }
  }

  close () {
    if (!this.init()) return;
    if (!visible) return;
    if (!opened) return;

    animTime = Date.now();
    let requestAnimationFrame = getRequestAnimationFrameFunction();
    requestAnimationFrame(slideDown);
    function slideDown() {
      let duration = Date.now() - animTime;
      if (duration >= animDuration) {
        containerDiv.style.bottom = "" + -logHeight + "px";
        logDiv.style.visibility = "hidden";
        opened = false;
        return;
      }
      let y = Math.round(-logHeight * 0.5 * (1 - Math.cos(Math.PI * duration / animDuration)));
      containerDiv.style.bottom = "" + y + "px";
      requestAnimationFrame(slideDown);
    }
  }
  ///////////////////////////////////////////////////////////////////////
  // show/hide the logger window and tab
  show () {
    if (!this.init())
      return;

    containerDiv.style.display = "block";
    visible = true;
  }

  hide () {
    if (!this.init())
      return;

    containerDiv.style.display = "none";
    visible = false;
  }
  
  ///////////////////////////////////////////////////////////////////////
  // when Logger is enabled (default), log() method will write its message
  // to the console ("logDiv")
  enable () {
    if (!this.init())
      return;

    enabled = true;
    tabDiv.style.color = "#fff";
    logDiv.style.color = "#fff";
  }
  ///////////////////////////////////////////////////////////////////////
  // when it is diabled, subsequent log() calls will be ignored and
  // the message won't be written on "logDiv".
  // "LOG" tab and log text are grayed out to indicate it is disabled.
  disable () {
    if (!this.init())
      return;

    enabled = false;
    tabDiv.style.color = "#444";
    logDiv.style.color = "#444";
  }

  ///////////////////////////////////////////////////////////////////////
  // clear all messages from logDiv
  clear () {
    if (!this.init())
      return;

    logDiv.innerHTML = "";
  }

  ///////////////////////////////////////////////////////////////////////
  // utility funtions
  arrayToString (array) {
    let str = "[";
    for (let i = 0, c = array.length; i < c; ++i) {
      if (array[i] instanceof Array)
        str += this.arrayToString(array[i]);
      else
        str += array[i];

      if (i < c - 1)
        str += ", ";
    }
    str += "]";
    return str;
  }
};
