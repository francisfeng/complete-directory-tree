# complete-directory-tree

Convert a directory (even is empty) tree to a JS object.

## Inspiration

This is project is inspired by and based on [mihneadb/node-directory-tree](https://github.com/mihneadb/node-directory-tree)

## Install

npm install --save complete-directory-tree

## Usage

```javascript
var completeDirectoryTree = require('complete-directory-tree');
var result = completeDirectoryTree('./test/test_data');
```

This will take a directory tree:

```
test_data
│
├── some_dir
│	│
│   │── another_dir
│   │	│
│   │   └── file_a.txt
│   │	│
│	│	└── file_b.txt
│	│
│	│── file_a.txt
│	│
│	└── file_b.txt
│
├── some_dir_2
│	 │
│    └── .gitkeep
│
├── some_dir_3
│
├── file_a.txt
│
│── file_a.txt
```

and returns an object:

```javascript
{  
   "path":"./test/test_data",
   "children":[  
      {  
         "path":"test\\test_data\\some_dir",
         "children":[  
            {  
               "path":"test\\test_data\\some_dir\\another_dir",
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
var result = completeDirectoryTree('./test/test_data', ['.txt']);
```

And returns:
```
{  
   "path":"./test/test_data",
   "children":[  
      {  
         "path":"test\\test_data\\some_dir",
         "children":[  
            {  
               "path":"test\\test_data\\some_dir\\another_dir",
               "children":[],
               "files":[  
                  {  
                     "path":"test\\test_data\\some_dir\\another_dir\\file_a.txt",
                     "name":"file_a.txt",
                     "extension":".txt",
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
               "size":13
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
         "children":[],
         "files":[]
      },
      {  
         "path":"test\\test_data\\some_dir_3",
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

Compare to the last one, it removes `.gitkeep` file in `"test\\test_data\\some_dir_2"`

## Note
Device, FIFO and socket files are ignored.

Files to which the user does not have permissions are included in the directory
tree, however, directories to which the user does not have permissions, along
with all of its contained files, are completely ignored.