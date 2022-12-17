
### 💖 Hello!

<p><b>With this app you are going to remove those followers that you don't follow back.</b></p>

<ol>
    <li>
      Create a new bookmark in yor browser
      <ul>
        <li>In the name put "Remove Followers"</li>
        <li>In the URL put the code below</li>
      </ul>
    </li>
    <li>Go to your Instagram profile.</li>
    <li>Open your folowers list</li>
    <li>Click the bookmark "Remove Followers"</li>
    <li>Put the tab in a new window to avoid that the browser pause the script.</li>
</ol>


````
javascript:let stop=!1;var start=async()=>{console.log("main:start");let e=document.querySelector("._aano > div:nth-child(1) > div:nth-child(1)");stop=!1;for(let o=0;o<e.childNodes.length&&!stop;o++){document.querySelector("._aano").scrollTop=60*o-1;if(e.childNodes[o].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[2]){const t=e.childNodes[o].childNodes[2].childNodes[0];if("Remove"===t.textContent)for(t.click(),await new Promise((e=>setTimeout(e,6e4))),document.querySelector("button._a9--:nth-child(1)").click();;)if(await new Promise((e=>setTimeout(e,1e3))),!(t.childNodes.length>1)){if("Remove"===t.textContent){await new Promise((e=>setTimeout(e,36e5))),o--;break}if("Removed"===t.textContent){console.log(`${o} removed correctly at ${new Date}`);break}}}for(;o===e.childNodes.length-1;)document.querySelector("._aano").scrollTop=document.querySelector("._aano").scrollHeight,await new Promise((e=>setTimeout(e,1e3))),e=document.querySelector("._aano > div:nth-child(1) > div:nth-child(1)")}};start();
````

<p>
    Once you click "Start removing followers" the app 
    go through your followers list and remove those that you do not follow back.
</p>
<p>
    The app <b>waits 1 minute</b> to remove a follower to  
    avoid be banned by Instagram. You don't need to do anything,
    be patient and let it work.
</p>
