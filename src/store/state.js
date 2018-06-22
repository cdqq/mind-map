export default {
    userId: '',
    userName: '',
    dataMap:[{
        id:'1',
        text:'跟节点',
        children:[
            {
                id:'2',
                text:'一级主题1',
                children:[
                    {
                        id:'3',
                        text:'分支主题',
                        children:[],
                        path:'',
                        addr:{"x":"510","y":"170"},
                        childrenLen:0,
                        parent:null 
                    },
                    {
                        id:'4',
                        text: '分支主题',
                        children: [],
                        path: '',
                        addr: {"x":"510","y":"220"},
                        childrenLen: 0,
                        parent: null
                    }
                ],
                path:'',
                addr:{"x":"310","y":"195"},
                childrenLen:2,
                parent:null,
            },
            {
                id:'5',
                text: '一级主题2',
                children: [],
                path: '',
                addr: {"x":"310", "y":"345"},
                children: 0,
                parent: null,
            }
        ],
        path:'',
        addr:{"x":"110","y":"320"},
        childrenLen:2,
        parent:null
    }]
}