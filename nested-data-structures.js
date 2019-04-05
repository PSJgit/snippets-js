const arrOfObjs = [

  { id: 'title', content: '...' },
  { id: 'statement', content: [ '...', '...', 'and ...'] },
  { id: 'education', content: '...' },
  { id: 'workHistory', content: '...',
    jobs: [
      {
        company: 'job 1',
        date: '2000 - 2010',
        title: 'designer/developer',
        role: '...',
      },
      {
        company: 'job 2',
        date: '2010 - 2019',
        title: 'front-end dev',
        role: '...',
      },
      {
        company: 'something else',
        date: '1999 - 2000',
        title: 'other thing',
        role: '...',
      }
    ]
  },
  { id: 'Contact',
    links: [
      {
        title: 'Github',
        url: 'https://git...'
      },
      {
        title: 'linkedin',
        url: 'https://git...'
      }
    ]
  }
]

// return arr of just the jobs dates
let dates = arrOfObjs.filter(obj => obj.jobs)
                      .map(obj => obj.jobs.map(obj => obj.date))
                      .reduce((arr, obj) => arr.concat(obj), []) 


const obj = {

  name: 'Patrick Jones',

  title: [
    '... title data',
    'more title data'
  ],
  statement: [
    'statement data',
    'more data'
  ],
  education: [
    'education',
    'education',
    'education'
  ],
  workHistory: [
    {
      company: 'company 1',
      date: '2014 - 2018',
      title: 'dev',
      role: '...',
    },
    {
      company: 'company 2',
      date: '2012 - 2012',
      title: 'dev',
      role: '...',
    }
  ],
  contact: [
    '... contact data',
    'contact contact contact contact'
  ],
  links: [
    {
      title: 'Github',
      url: 'https://git...'
    },
    {
      title: 'linkedin',
      url: 'https://git...'
    }
  ]
}


const getNestedObject = (nestedObj, pathArr) => {
  return pathArr.reduce((obj, key) =>
    (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}
// pass in your object structure as array elements
const title = getNestedObject(obj, ['title']);
console.log(title)
// to access nested array, pass in array index as an element the path array.
const firstJob = getNestedObject(obj, ['workHistory', 0, 'company'] );
console.log(firstJob)


