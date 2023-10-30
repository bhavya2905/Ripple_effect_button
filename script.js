const button = document.querySelector('.ripple')


    button.addEventListener('click' , function (e) {
        //point of the pointer
        const x = e.clientX;
        const y = e.clientY;

        //top and left origin of the button
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft
        
        //to get the top and left of the span, based on button boundary
        const xInside = x - buttonLeft
        const yInside =  y - buttonTop
        
        const circle = document.createElement('span')
        circle.classList.add('circle');
        circle.style.top = yInside +'px'
        circle.style.left = xInside +'px'

        this.appendChild(circle);

        setTimeout(()=> circle.remove(),500);

    })

