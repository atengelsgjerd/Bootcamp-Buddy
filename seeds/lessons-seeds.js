const {Lessons} = require('../models');

const lessonData = [
    {
        lesson_title: 'HTML Introduction',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_intro.asp'
    },
    {
        lesson_title: 'HTML Forms',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_forms.asp'
    },
    {
        lesson_title: 'HTML Canvas Graphics',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html5_canvas.asp'
    },
    {
        lesson_title: 'HTML Media',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_media.asp'
    },
    {
        lesson_title: 'HTML Geolocation API',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html5_geolocation.asp'
    },
    {
        lesson_title: 'HTML Examples',
        module_id: 1,
        url: 'https://www.w3schools.com/html/html_examples.asp'
    },
    {
        lesson_title: 'Media queries',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries'
    },
    {
        lesson_title: 'Basic concepts of flexbox',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox'
    },
    {
        lesson_title: 'Responsive design',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design'
    },
    {
        lesson_title: 'Cascade, specificity, and inheritance',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance'
    },
    {
        lesson_title: 'Pseudo-classes',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes'
    },
    {
        lesson_title: 'Pseudo-elements',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements'
    },
    {
        lesson_title: 'transition',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition'
    },
    {
        lesson_title: 'Fundamental text and font styling',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals'
    },
    {
        lesson_title: 'Using CSS custom properties (variables)',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties'
    },
    {
        lesson_title: 'Create fancy boxes',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/create_fancy_boxes'
    },
    {
        lesson_title: 'Combinators',
        module_id: 2,
        url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators'
    },
    {
        lesson_title: 'The Script element',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script'
    },
    {
        lesson_title: 'Variables',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var'
    },
    {
        lesson_title: 'Primitive',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/Primitive'
    },
    {
        lesson_title: 'Expressions and operators',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators'
    },
    {
        lesson_title: 'if...else',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else'
    },
    {
        lesson_title: 'Array',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array'
    },
    {
        lesson_title: 'String methods',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods'
    },
    {
        lesson_title: 'Object',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
    },
    {
        lesson_title: 'Defining methods',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_methods'
    },
    {
        lesson_title: 'Loops and iteration',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration'
    },
    {
        lesson_title: 'Functions',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions'
    },
    {
        lesson_title: 'Variable scope',
        module_id: 3,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope'
    },
    {
        lesson_title: 'this key',
        module_id: 3,
        url: 'https://bootcampspot.instructure.com/courses/5346/pages/3-roadmap-2?module_item_id=1209460'
    },
    {
        lesson_title: 'Window object',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window'
    },
    {
        lesson_title: 'Document Object Model (DOM)',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model'
    },
    {
        lesson_title: 'Document: querySelectorAll() method',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll'
    },
    {
        lesson_title: 'HTMLElement: style property',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style'
    },
    {
        lesson_title: 'Element: setAttribute() method',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute'
    },
    {
        lesson_title: 'Document: createElement() method',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement'
    },
    {
        lesson_title: 'Node: appendChild() method',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild'
    },
    {
        lesson_title: 'setInterval() global function',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/setInterval'
    },
    {
        lesson_title: 'EventTarget: addEventListener() method',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener'
    },
    {
        lesson_title: 'KeyboardEvent',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent'
    },
    {
        lesson_title: 'Event: preventDefault() method',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault'
    },
    {
        lesson_title: 'Event: stopPropagation() method',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation'
    },
    {
        lesson_title: 'Storage',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage'
    },
    {
        lesson_title: 'Using data attributes',
        module_id: 4,
        url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes'
    },
    {
        lesson_title: 'jQuery API',
        module_id: 5,
        url: 'https://api.jquery.com/'
    },
    
    {
        lesson_title: 'jQuery UI Demos',
        module_id: 5,
        url: 'https://jqueryui.com/demos/'
    },
    {
        lesson_title: 'Bootstrap',
        module_id: 5,
        url: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/'
    },
    {
        lesson_title: 'Google Fonts',
        module_id: 5,
        url: 'https://fonts.google.com/'
    },
    {
        lesson_title: 'Day.js',
        module_id: 5,
        url: 'https://day.js.org/'
    }
  
];

const seedLesson = () => Lessons.bulkCreate(lessonData);

module.exports = seedLesson;
