# complete-directory-tree [![Build Status](https://travis-ci.org/francisfeng/complete-directory-tree.svg?branch=master)](https://travis-ci.org/francisfeng/complete-directory-tree)

Convert a directory (even is empty) tree to a JS object.

## Inspiration

This project is inspired by and based on [mihneadb/node-directory-tree](https://github.com/mihneadb/node-directory-tree)

## Install

```
npm install --save complete-directory-tree
````

## Test
```
npm install
npm test
```

## Usage

```javascript
var completeDirectoryTree = require('complete-directory-tree');
var result = completeDirectoryTree('./test/test_data');
```

It takes a directory tree:

```
test_data
│
├── some_dir
│  │
│  ├── another_dir
│  │   │
│  │   ├── file_a.txt
│  │   │
│  │   └── file_b.txt
│  │
│  ├── file_a.txt
│  │
│  └── file_b.txt
│
├── some_dir_2
│   │
│   └── .gitkeep
│
├── some_dir_3
│
├── file_a.txt
│
├── file_a.txt
```

and returns an object:

```javascript
{  
   "path":"./test/test_data",
   "name":"test_data",
   "children":[  
      {  
         "path":"test\\test_data\\some_dir",
         "name":"some_dir",
         "children":[  
            {  
               "path":"test\\test_data\\some_dir\\another_dir",
               "name":"another_dir",
               "children":[],
               "files":[  
                  {  
                     "path":"test\\test_data\\some_dir\\another_dir\\file_a.txt",
                     "name":"file_a.txt",
                     "ex tension":".txt",
                     "size":13
                  },
                  {  
                     "path":"test\\test_data\\some_dir\\another_dir\\file_b.txt",
                     "name":"file_b.txt",
                     "extension":".txt",
                     "size":3764
                  }
               ]
            }
         ],
         "files":[  
            {  
               "path":"test\\test_data\\some_dir\\file_a.txt",
               "name":"file_a.txt",
               "extension":".txt",
               "siz e":13
            },
            {  
               "path":"test\\test_data\\some_dir\\file_b.txt",
               "name":"file_b.txt",
               "extension":".txt",
               "size":3764
            }
         ]
      },
      {  
         "path":"test\\test_data\\some_dir_2",
         "name":"some_dir_2",
         "children":[],
         "files":[  
            {  
               "path":"test\\test_data\\some_dir_2\\.gitkeep",
               "name":".gitkeep",
               "extens ion":"",
               "size":2307
            }
         ]
      },
      {  
         "path":"test\\test_data\\some_dir_3",
         "name":"some_dir_3",
         "children":[],
         "files":[]
      }
   ],
   "files":[  
      {  
         "path":"test\\test_data\\file_a.txt",
         "name":"file_a.txt",
         "extension":".txt",
         "size":13
      },
      {  
         "path":"test\\test_data\\file_b.txt",
         "name":"file_b.txt",
         "extension":".txt",
         "size":3764
      }
   ]
}
```

Also, it accepts an array of extensions.
```javascript
var completeDirectoryTree = require('complete-directory-tree');
var result = completeDirectoryTree('./test/test_data', ['.txt']); // only .txt files
```

And returns:
```javascript
{  
   "path":"./test/test_data",
   "name":"test_data",
   "children":[  
      {  
         "path":"test\\test_data\\some_dir",
         "name":"some_dir",
         "children":[  
            {  
               "path":"test\\test_data\\some_dir\\another_dir",
               "name":"another_dir",
               "children":[],
               "files":[  
                  {  
                     "path":"test\\test_data\\some_dir\\another_dir\\file_a.txt",
                     "name":"file_a.txt",
                     "ex tension":".txt",
                     "size":13
                  },
                  {  
                     "path":"test\\test_data\\some_dir\\another_dir\\file_b.txt",
                     "name":"file_b.txt",
                     "extension":".txt",
                     "size":3764
                  }
               ]
            }
         ],
         "files":[  
            {  
               "path":"test\\test_data\\some_dir\\file_a.txt",
               "name":"file_a.txt",
               "extension":".txt",
               "siz e":13
            },
            {  
               "path":"test\\test_data\\some_dir\\file_b.txt",
               "name":"file_b.txt",
               "extension":".txt",
               "size":3764
            }
         ]
      },
      {  
         "path":"test\\test_data\\some_dir_2",
         "name":"some_dir_2",
         "children":[],
         "files":[]
      },
      {  
         "path":"test\\test_data\\some_dir_3",
         "name":"some_dir_3",
         "children":[],
         "files":[]
      }
   ],
   "files":[  
      {  
         "path":"test\\test_data\\file_a.txt",
         "name":"file_a.txt",
         "extension":".txt",
         "size":13
      },
      {  
         "path":"test\\test_data\\file_b.txt",
         "name":"file_b.txt",
         "extension":".txt",
         "size":3764
      }
   ]
}
```

Compare to the last one, it removes the `.gitkeep` file in `"test\\test_data\\some_dir_2"`

## Note
Device, FIFO and socket files are ignored.

Directories without permissions will not be included.

## License
MIT