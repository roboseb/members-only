const objDiv = document.getElementById("messages");
objDiv.scrollTop = objDiv.scrollHeight;

const textChannels = Array.from(document.querySelectorAll('.text-channel'));
textChannels.forEach(channel => {



    channel.addEventListener('click', () => {
        textChannels.forEach(newChannel => {
            newChannel.classList.remove('selected');
        });
        channel.classList.toggle('selected');
    });


});