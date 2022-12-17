// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron')

// contextBridge.exposeInMainWorld('controls', {
//   onStart: (callback) => ipcRenderer.on('start', callback)
// });



// ipcRenderer.on('start', start);


let stop = false;

var start = async () => {
    console.log('main:start');

    let nodesList = document.querySelector('._aano > div:nth-child(1) > div:nth-child(1)');

    stop = false;

    for (let i = 0; i < nodesList.childNodes.length; i++) {
        // Stop if is true
        if (stop) {
            break;
        }

        // Scroll to element
        document.querySelector('._aano').scrollTop = 60 * i - 1;
            
        // Get follow button
        const followButton = nodesList.childNodes[i].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[2];

        // Check if follow button exist
        if (followButton) {
            // Get unfollow button
            const unfollowButton = nodesList.childNodes[i].childNodes[2].childNodes[0];

            // Check if unfollow button exists
            if (unfollowButton.textContent === 'Remove') {
                // Click unfollow button
                unfollowButton.click();
                
                // Await one minute
                await new Promise(resolve => setTimeout(resolve, 60000));
                
                // Click remove button confirmation
                document.querySelector('button._a9--:nth-child(1)').click();
                
                while (true) {
                    // Await a second
                    await new Promise(resolve => setTimeout(resolve, 1000));

                    if (unfollowButton.childNodes.length > 1) {
                        continue;
                    }
                    else if (unfollowButton.textContent === 'Remove') {
                        // Await one hour
                        await new Promise(resolve => setTimeout(resolve, 3600000));
                        
                        // Go back index to retry this forrower
                        i--;
                        // stop = true;
                        
                        break;
                    }
                    else if (unfollowButton.textContent === 'Removed') {
                        console.log(`${i} removed correctly at ${new Date()}`);
                        break;
                    }
                }
            }
        }

        // Check if is the final of the list and wait to load
        while (true) {
            if (i === nodesList.childNodes.length - 1) {
                // Scroll to end
                document.querySelector('._aano').scrollTop = document.querySelector('._aano').scrollHeight;

                // Await a second
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Reassign nodes list
                nodesList = document.querySelector('._aano > div:nth-child(1) > div:nth-child(1)');
            }
            else {
                break;
            }
        }
    }
}


process.once('document-start', () => {
  console.log('main:document-start');
  
  ipcRenderer.on('start', start)

  // window.controls.onStart((_event, _value) => {
  //   start()
  // });
})