import React from "react";

function timespan(date) {
  var date1 = new Date();
  date1.setTime(Date.parse(date));

  var seconds = Math.floor((new Date() - date1) / 1000);
  console.log(Date());
  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago ";
  }
  return Math.floor(seconds) + " seconds ago";
}
export default timespan;