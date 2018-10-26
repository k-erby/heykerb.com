/*
 * Global Object Person Testimonals, 
 * for use in testimonial template
 */
testimonials = [
    {
      quote:  'Yeah, I met her once. She real.',
      person: 'Dominique Charlebois'
    }, {
      quote:  'You are such a wonderful, funny, caring, bubbly, talented & adorable person. You are honestly life goals.',
      person: 'Previous Student'
    }, {
      quote:  'I\'ve had a lot of instructors that were liquid. A lot that were gas. But you\'re the first one that\'s solid.',
      person: 'Previous Student'
    }, {
      quote:  'You are an amazing teacher and an even better person (which is saying a lot considering you are a pretty goddamn fabulous teacher).',
      person: 'Previous Student'
    }, {
      quote: 'Kaitlin === best, no type coercion',
      person: 'Chris Pouliot'
    }, {
      quote:  'Kaitlin\'s willingness to accept constructive criticism and to work towards the high standards she sets for herself have resulted in signifigant growth.',
      person: 'Midway practicum report, Regan Rasmussen & Moira Raynor-Atterbury'
    }, {
      quote:  'Kaitlin\'s positive, caring nature; strong organizational skills; exemplary work ethic; ... and, her broad knowledge base, particulary in the visual arts have resulted in an outstanding practicum.',
      person: 'Final practicum report, Regan Rasmussen, Moira Raynor-Atterbury & Meghan McMillan'
    }, {
      quote:  'Meow >:(',
      person: 'My cat'
    }
  ];

/*
* update the HTML testimonial block
*
* @param {string} testimonial.quote
* @param {string} testimonial.person
*/
function updateTestimonial(testimonial) {
    document.getElementById('testimonial-text').innerHTML = '"' + testimonial.quote + '"';
    document.getElementById('testimonial-person').innerHTML = testimonial.person;
}

/*
* load a random testimonial from the testimonials list
*  @param {MouseEvent} e - event object
*/
function onGetTestimonialClick(e) {
    if (e) {
        e.preventDefault();
    }
    var randomNum = Math.floor(Math.random() * testimonials.length);
    updateTestimonial(testimonials[randomNum]);
}

/*
* on page ready
*/
document.addEventListener("DOMContentLoaded", () => {
    onGetTestimonialClick();
});
