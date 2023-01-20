import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Social Media Web Application',
        projectDesc: 'Developed an Application where multiple users can post social content to and fro.',
        tags: ['React.js', 'MongoDB','Node.js', 'Express.js', 'Redux'],
        code: 'https://github.com/devXjatin/sociobook',
        demo: 'https://sociobook.netlify.app/',
        image: 'https://jatin-portfolio-bucket.s3.ap-south-1.amazonaws.com/sociobook.png'
    },
    {
        id: 2,
        projectName: 'Sorting Visualizer',
        projectDesc: 'This is a Web Application which is built to visualize Sorting Algorithm. Application Supports Bubble, Selection, Insertion, Quick and Merge Sort.',
        tags: ['HTML', 'CSS','Javascript'],
        code: 'https://github.com/devXjatin/sorting-visualizer',
        demo: 'https://visualizer-sorting-algo.netlify.app/',
        image: "https://jatin-portfolio-bucket.s3.ap-south-1.amazonaws.com/sorting.png"
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/